import React from "react";
import styles from "./styles";
import { Field } from "react-final-form";
import { TextField, withStyles } from "@material-ui/core";

const TitleField = ({ classes }) => (
  <Field
    className={classes.field}
    name="title"
    type="text"
    render={({ input, meta }) => (
      <TextField {...input} autoFocus fullWidth placeholder="Title" />
    )}
  />
);
export default withStyles(styles)(TitleField);
