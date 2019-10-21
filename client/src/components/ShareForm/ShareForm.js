import React from "react";
import { TextField, withStyles, Button } from "@material-ui/core";
import { withRouter } from "react-router";
import { Form, Field } from "react-final-form";
import styles from "./styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const onSubmit = values => {
  let { username, password } = values;
  console.log(username);
  console.log(password);
};

const ShareForm = ({ classes }) => {
  let checked = false;

  const ItemNameField = () => (
    <Field
      name="itemNameField"
      render={({ input, meta }) => (
        <div>
          <input
            type="text"
            placeholder="Enter the item's name"
            {...input}
            value={input.value}
          ></input>
        </div>
      )}
    ></Field>
  );
  return (
    <div className={classes.centeredCol}>
      <Form
        onSubmit={onSubmit}
        //validate={validate}
        render={({ handleSubmit }) => (
          <form className={classes.centeredCol} onSubmit={handleSubmit}>
            <TextField
              className={classes.textField}
              placeholder="Name your item"
            >
              Name Item Text Field div
            </TextField>
            <TextField
              className={classes.textField}
              placeholder="Describe your item"
            >
              Describe your item div
            </TextField>
            <FormControl className={classes.textField}>
              <FormGroup className={classes.textField}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      //onChange={handleChange("false")}
                      value={checked}
                    />
                  }
                  label="Household Items"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      //onChange={handleChange("jason")}
                      value={checked}
                    />
                  }
                  label="Recreational Equipment"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      //onChange={handleChange("antoine")}
                      value={checked}
                    />
                  }
                  label="Label 3"
                />
              </FormGroup>
            </FormControl>
            <Button className={classes.submitButton} variant="contained">
              Share
            </Button>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default withRouter(withStyles(styles)(ShareForm));
