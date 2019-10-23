import React from "react";
import styles from "./styles";
import { Field } from "react-final-form";
import { TextField, withStyles } from "@material-ui/core";

const DescriptionField = ({ classes }) => (
  <Field
    className={classes.field}
    name="description"
    type="text"
    render={({ input, meta }) => (
      <TextField {...input} fullWidth placeholder="Description" />
    )}
  />
);

export default withStyles(styles)(DescriptionField);
