import React from "react";
import { Field } from "react-final-form";
import { TextField } from "@material-ui/core";

const TitleField = () => (
  <Field
    name="title"
    type="text"
    render={({ input, meta }) => <TextField {...input} placeholder="Title" />}
  />
);
export default TitleField;
