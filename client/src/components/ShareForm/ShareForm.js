import React from "react";
import { TextField, withStyles } from "@material-ui/core";
import { withRouter } from "react-router";
import { Form, Field } from "react-final-form";
import styles from "./styles";

const shareFormStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

const onSubmit = values => {
  let { username, password } = values;
  console.log(username);
  console.log(password);
};

const ShareForm = () => {
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
    <div className="newclassname">
      <Form
        onSubmit={onSubmit}
        //validate={validate}
        render={({ handleSubmit }) => (
          <form style={shareFormStyle} onSubmit={handleSubmit}>
            <TextField placeholder="Name your item">
              Name Item Text Field div
            </TextField>
            <TextField placeholder="Describe your item">
              Describe your item div
            </TextField>
            <button>Add some tags</button>
            <button type="submit">Submit</button>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default withRouter(withStyles(styles)(ShareForm));
