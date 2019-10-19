import React, { Component } from "react";
import { TextField } from "@material-ui/core";

class ShareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
  }
}

export default ShareForm;
