import React from "react";
import { Field } from "react-final-form";
import { TextField } from "@material-ui/core";

const DescriptionField = () => (
  <Field
    name="description"
    type="text"
    render={({ input, meta }) => (
      <TextField {...input} placeholder="Description" />
    )}
  />
);

export default DescriptionField;
