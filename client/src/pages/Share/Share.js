import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { ShareForm, ShareItemPreview } from "../../components";

const Share = ({ classes }) => {
  return (
    <React.Fragment>
      <div className={classes.shareForm}>
        <ShareItemPreview />
        <div className={classes.shareFormInput}>
          <h1 className={classes.shareFormTitle}>
            Share. Borrow. <br />
            Prosper.
          </h1>
          <ShareForm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Share);
