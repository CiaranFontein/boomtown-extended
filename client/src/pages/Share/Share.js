import React, { Form, TextField } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
/* 
  TODO: Create ShareItemFrom and ShareItemPreview in the components dir
  and call them from this file.

  ShareItemForm is the form that our User will use to add a new item 

  When the user is filling ShareItemForm, we will show a preview of 
  this item using the ShareItemPreview. 
  Hint: It should look like any other Item card.

*/
// import ShareItemForm from '../../components/ShareItemForm';
// import ShareItemPreview from '../../components/ShareItemPreview';

const Share = ({ classes }) => {
  return (
    <div>
      <div>
        <div className="ItemPreview">Item Preview Div</div>
        <div className="Form">
          <div className="Title">
            <h2>Share. Borrow. Prosper</h2>
          </div>
          <button className="UploadButton">Select an Image</button>
          <Form>
            <form>
              <TextField placeholder="Name your item">
                Name Item Text Field div
              </TextField>
              <TextField placeholder="Describe your item">
                Describe your item div
              </TextField>
              <button>Add some tags</button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Share);
