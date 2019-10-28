import React, { Component } from "react";
import { withStyles, Button } from "@material-ui/core";
import { Form, FormSpy } from "react-final-form";
import styles from "./styles";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import { Mutation } from "react-apollo";
import { ADD_ITEM_MUTATION } from "../../apollo/queries";
import {
  TitleField,
  DescriptionField,
  ImageUrlField,
  CheckboxOption
} from "../FormComponents";

class ShareForm extends Component {
  applyTags = (tags, allTags) => {
    return tags.map(tag => {
      const updatedTag = { title: tag };
      allTags.filter(t => {
        if (t.title === tag) {
          updatedTag.id = t.id;
        }
        return updatedTag;
      });
      return allTags;
    });
  };

  dispatchUpdate = (values, allTags, updatePreview) => {
    updatePreview({
      ...values,
      tags: this.applyTags(values.tags || [], allTags)
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

  render() {
    const { tags, classes } = this.props;
    return (
      <ItemPreviewContext.Consumer>
        {({ updatePreview, resetPreview }) => (
          <div className={classes.centeredCol}>
            <Mutation mutation={ADD_ITEM_MUTATION}>
              {(addItem, { data }) => {
                return (
                  <Form
                    onSubmit={values => {
                      this.saveItem(values, tags, addItem);
                    }}
                    //validate={validate}
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
                        <TitleField />
                        <ImageUrlField />
                        <DescriptionField />
                        <div className={classes.checkboxContainer}>
                          {tags.map(tag => {
                            return <CheckboxOption key={tag.id} tag={tag} />;
                          })}
                        </div>
                        <Button
                          type="submit"
                          className={classes.submitButton}
                          variant="contained"
                          disabled={submitting || pristine}
                        >
                          Share
                        </Button>
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
export default withStyles(styles)(ShareForm);
