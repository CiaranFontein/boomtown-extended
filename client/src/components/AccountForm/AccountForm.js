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
import validate from "./helpers/validation";
import styles from "./styles";

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
      error: null
    };
  }

  signup = async (values, createUser) => {
    try {
      const newUser = {
        ...values
      };
      console.log(newUser);
      await createUser({ user: newUser });
    } catch (e) {
      throw e;
    }
  };

  render() {
    console.log(this.props);
    const { classes, login, signup } = this.props;
    const boolFormToggle = this.state.formToggle;

    return (
      <Form
        onSubmit={async values => {
          console.log(boolFormToggle, values);
          boolFormToggle
            ? await login({ variables: { user: { ...values } } })
            : await signup({ variables: { user: values } });
        }}
        validate={values => {
          return validate(values, boolFormToggle);
        }}
        render={({ handleSubmit, valid, form }) => {
          return (
            <form
              onSubmit={values => {
                handleSubmit(values);
                console.log("Submitted");
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
                {/* @TODO: Display sign-up and login errors */}
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
