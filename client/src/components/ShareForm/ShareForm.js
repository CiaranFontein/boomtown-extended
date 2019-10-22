import React, { Component } from "react";
import { TextField, withStyles, Button } from "@material-ui/core";
import { withRouter } from "react-router";
import { Form, Field, FormSpy } from "react-final-form";
import styles from "./styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";

const onSubmit = values => {
  let { username, password } = values;
  console.log(username);
  console.log(password);
};

const tags = [{ id: 0, title: "Electronics" }, { id: 1, title: "Tools" }];

class ShareForm extends Component {
  applyTags = (tags, allTags) => {
    return tags.map(tag => {
      const updatedTag = { title: tag };
      allTags.filter(t => {
        if (t.title === tag) {
          updatedTag.id = t.id;
        }
      });
      return updatedTag;
    });
  };

  dispatchUpdate = (values, allTags, updatePreview) => {
    updatePreview({
      ...values,
      tags: this.applyTags(values.tags || [], allTags)
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <ItemPreviewContext.Consumer>
        {({ updatePreview, resetPreview }) => (
          <div className={classes.centeredCol}>
            <Form
              onSubmit={values => {}}
              //validate={validate}
              render={({ handleSubmit }) => (
                <form className={classes.centeredCol} onSubmit={handleSubmit}>
                  <FormSpy
                    subscription={{ values: true }}
                    onChange={({ values }) => {
                      if (values) {
                        this.dispatchUpdate(values, tags, updatePreview);
                      }
                      return "";
                    }}
                  />
                  <Field
                    placeholder="Item Title"
                    name="title"
                    type="text"
                    render={({ input, meta }) => <TextField {...input} />}
                  />
                  <Field
                    placeholder="Write a description"
                    name="description"
                    type="text"
                    render={({ input, meta }) => <TextField {...input} />}
                  />
                  <label>
                    <Field
                      name="tags"
                      component="input"
                      type="checkbox"
                      value="Electronics"
                    />
                    Electronics
                  </label>
                  <label>
                    <Field
                      name="tags"
                      component="input"
                      type="checkbox"
                      value="Tools"
                    />
                    Tools
                  </label>
                  <Button className={classes.submitButton} variant="contained">
                    Share
                  </Button>
                </form>
              )}
            ></Form>
          </div>
        )}
      </ItemPreviewContext.Consumer>
    );
  }
}

export default withStyles(styles)(ShareForm);
