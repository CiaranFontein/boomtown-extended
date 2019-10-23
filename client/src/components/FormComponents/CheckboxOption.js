import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { Field } from "react-final-form";

const CheckboxOption = ({ classes, tag }) => {
  return (
    <label key={tag.id}>
      <Field
        className={classes.checkbox}
        name="tags"
        component="input"
        type="checkbox"
        value={tag.title}
      />
      {tag.title}
    </label>
  );
};

export default withStyles(styles)(CheckboxOption);
