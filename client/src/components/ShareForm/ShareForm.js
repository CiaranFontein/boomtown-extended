import React, { Component } from "react";
import { withStyles, Button, TextField } from "@material-ui/core";
import { Form, FormSpy, Field } from "react-final-form";
import styles from "./styles";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import { Mutation } from "react-apollo";
import { ADD_ITEM_MUTATION } from "../../apollo/queries";
import { CheckboxOption } from "../FormComponents";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
class ShareForm extends Component {
  dispatchUpdate = (values, allTags, updatePreview) => {
    updatePreview({
      ...values,
      tags: values.tags || []
    });
  };

  saveItem = async (values, allTags, addItem) => {
    try {
      const newItem = {
        ...values,
        tags: this.applyTags(values.tags || [], allTags)
      };
      await addItem({ variables: { input: newItem } });
    } catch (e) {
      throw e;
    }
  };

  applyTags = (tags, tagInfo) => {
    return tags.map(tag => {
      const updatedTag = { title: tag.title };
      tagInfo.filter(t => {
        if (t.title === tag.title) {
          updatedTag.id = t.id;
        }
        return true;
      });
      return updatedTag;
    });
  };

  render() {
    const { tags, classes } = this.props;
    let errorMsg = "";
    return (
      <ItemPreviewContext.Consumer>
        {({ updatePreview, resetPreview, state }) => (
          <div className={classes.centeredCol}>
            <Mutation mutation={ADD_ITEM_MUTATION}>
              {(addItem, { data }) => {
                return (
                  <Form
                    onSubmit={values => {
                      if (!values.title) {
                        errorMsg = "Please enter a title";
                        return;
                      }
                      if (!values.imageurl) {
                        errorMsg = "Please enter an image url";
                        return;
                      }
                      this.saveItem(values, tags, addItem);
                    }}
                    render={({ handleSubmit, form, submitting, pristine }) => (
                      <form
                        className={classes.centeredCol}
                        onSubmit={event => {
                          event.preventDefault();
                          handleSubmit();
                          form.reset();
                          resetPreview();
                        }}
                      >
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
                          className={classes.field}
                          name="title"
                          type="text"
                          render={({ input, meta }) => (
                            <TextField
                              {...input}
                              autoFocus
                              fullWidth
                              placeholder="Title"
                            />
                          )}
                        />
                        <Field
                          className={classes.field}
                          name="imageurl"
                          type="text"
                          render={({ input, meta }) => (
                            <TextField
                              {...input}
                              fullWidth
                              placeholder="Image Url"
                            />
                          )}
                        />
                        <Field
                          className={classes.field}
                          name="description"
                          type="text"
                          render={({ input, meta }) => (
                            <TextField
                              {...input}
                              fullWidth
                              multiline
                              rows="2"
                              placeholder="Description"
                              inputProps={{ maxLength: 40 }}
                            />
                          )}
                        />
                        <div className={classes.checkboxContainer}>
                          {tags.map(tag => {
                            return <CheckboxOption key={tag.id} tag={tag} />;
                          })}
                        </div>
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={submitting || pristine}
                          className={classes.shareButton}
                        >
                          Share
                        </Button>
                        <Typography className={classes.errorMessage}>
                          {errorMsg}
                        </Typography>
                      </form>
                    )}
                  ></Form>
                );
              }}
            </Mutation>
          </div>
        )}
      </ItemPreviewContext.Consumer>
    );
  }
}

ShareForm.propTypes = {
  tags: PropTypes.array.isRequired
};

export default withStyles(styles)(ShareForm);
