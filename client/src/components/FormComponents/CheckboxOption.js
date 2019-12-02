import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { Field } from "react-final-form";
import PropTypes from "prop-types";

const CheckboxOption = ({ classes, tag }) => {
  return (
    <label>
      <Field
        className={classes.checkbox}
        name="tags"
        component="input"
        type="checkbox"
        value={tag}
      />
      {tag.title}
    </label>
  );
};
CheckboxOption.propTypes = {
  tags: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
};

export default withStyles(styles)(CheckboxOption);
