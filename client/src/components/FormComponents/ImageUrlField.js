import React from "react";
import styles from "./styles";
import { Field } from "react-final-form";
import { TextField, withStyles } from "@material-ui/core";

const ImageUrlField = ({ classes }) => (
  <Field
    className={classes.field}
    name="imageurl"
    type="text"
    render={({ input, meta }) => (
      <TextField {...input} fullWidth placeholder="Image Url" />
    )}
  />
);

export default withStyles(styles)(ImageUrlField);
