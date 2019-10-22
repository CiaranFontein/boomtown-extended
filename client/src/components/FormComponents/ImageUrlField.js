import React from "react";
import { Field } from "react-final-form";
import { TextField } from "@material-ui/core";

const ImageUrlField = () => (
  <Field
    name="imageurl"
    type="text"
    render={({ input, meta }) => (
      <TextField {...input} placeholder="Image Url" />
    )}
  />
);

export default ImageUrlField;
