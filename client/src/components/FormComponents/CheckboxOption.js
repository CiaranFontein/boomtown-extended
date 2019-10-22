import React from "react";
import { Field } from "react-final-form";

const CheckboxOption = ({ tag }) => {
  return (
    <label key={tag.id}>
      <Field name="tags" component="input" type="checkbox" value={tag.title} />
      {tag.title}
    </label>
  );
};

export default CheckboxOption;
