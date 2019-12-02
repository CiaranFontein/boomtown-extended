import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Form, Field } from "react-final-form";
import {
  LOGIN_MUTATION,
  SIGNUP_MUTATION,
  VIEWER_QUERY
} from "../../apollo/queries";
import { graphql, compose } from "react-apollo";
import styles from "./styles";
import PropTypes from "prop-types";

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
      formErrors: {}
    };
  }

  signup = async (values, createUser) => {
    try {
      const newUser = {
        ...values
      };
      await createUser({ user: newUser });
    } catch (e) {
      throw e;
    }
  };

  validateEmail = email => {
    let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    return re.test(String(email).toLowerCase());
  };

  render() {
    const { classes, login, signup } = this.props;
    const boolFormToggle = this.state.formToggle;

    return (
      <Form
        onSubmit={async values => {
          if (!boolFormToggle && !values.fullname) {
            this.setState({ formError: "Please enter a name" });
            return;
          }
          if (!values.email || !this.validateEmail(values.email)) {
            this.setState({ formError: "Please enter a valid email" });
            return;
          }
          try {
            boolFormToggle
              ? await login({ variables: { user: { ...values } } })
              : await signup({ variables: { user: values } });
          } catch (e) {
            this.setState({ formError: e.message.split("GraphQL error: ")[1] });
          }
        }}
        render={({ handleSubmit, valid, form }) => {
          return (
            <form
              onSubmit={values => {
                handleSubmit(values);
              }}
              noValidate
              className={classes.accountForm}
            >
              {!boolFormToggle && (
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel htmlFor="fullname">Username</InputLabel>
                  <Field
                    name="fullname"
                    render={({ input, meta }) => (
                      <Input
                        id="fullname"
                        type="text"
                        inputProps={{
                          autoComplete: "off"
                        }}
                        {...input}
                        value={input.value}
                      />
                    )}
                  />
                </FormControl>
              )}
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Field
                  name="email"
                  type="text"
                  render={({ input, meta }) => (
                    <Input
                      id="email"
                      type="text"
                      inputProps={{
                        autoComplete: "off"
                      }}
                      {...input}
                      value={input.value}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Field
                  name="password"
                  type="password"
                  render={({ input, meta }) => (
                    <Input
                      id="password"
                      type="password"
                      inputProps={{
                        autoComplete: "off"
                      }}
                      {...input}
                      value={input.value}
                    />
                  )}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Button
                    type="submit"
                    className={classes.formButton}
                    variant="contained"
                    size="large"
                    color="secondary"
                    disabled={!valid}
                  >
                    {boolFormToggle ? "Enter" : "Create Account"}
                  </Button>
                  <Typography>
                    <button
                      className={classes.formToggle}
                      type="button"
                      onClick={() => {
                        this.setState({
                          formToggle: !boolFormToggle
                        });
                      }}
                    >
                      {boolFormToggle
                        ? "Create an account."
                        : "Login to existing account."}
                    </button>
                  </Typography>
                </Grid>
              </FormControl>
              <Typography className={classes.errorMessage}>
                {this.state.formError ? this.state.formError : ""}
              </Typography>
            </form>
          );
        }}
      >
        );
      </Form>
    );
  }
}

AccountForm.propTypes = {
  LOGIN_MUTATION: PropTypes.func.isRequired,
  SIGNUP_MUTATION: PropTypes.func.isRequired
};

const refetchQueries = [{ query: VIEWER_QUERY }];

export default compose(
  graphql(LOGIN_MUTATION, {
    options: {
      refetchQueries: () => refetchQueries
    },
    name: "login"
  }),
  graphql(SIGNUP_MUTATION, {
    options: { refetchQueries },
    name: "signup"
  }),
  withStyles(styles)
)(AccountForm);
