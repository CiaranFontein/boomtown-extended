import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import {
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  MenuItem,
  Menu,
  Typography,
  ListItemIcon
} from "@material-ui/core";
import { withRouter } from "react-router";
import {
  MoreVert,
  Fingerprint as FingerprintIcon,
  PowerSettingsNew as PowerSettingsNewIcon,
  AddCircle
} from "@material-ui/icons";
import logo from "../../images/boomtown.svg";
import { LOGOUT_MUTATION, VIEWER_QUERY } from "../../apollo/queries";
import { graphql, compose } from "react-apollo";

const MenuBar = ({ classes, match, LOGOUT_MUTATION }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.flexToolbar}>
        <NavLink to="/items">
          <IconButton
            className={classes.iconButton}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <img src={logo} alt="logo" width="40px" />
          </IconButton>
        </NavLink>
        <div className={classes.rightSideIcons}>
          <NavLink to="/share">
            <Button className={classes.iconButton}>
              <AddCircle />
              Share Something
            </Button>
          </NavLink>
          <IconButton
            onClick={handleClick}
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.iconButton}
          >
            <MoreVert />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              component={NavLink}
              to={"/profile"}
              exact
              onClick={handleClose}
            >
              <ListItemIcon>
                <FingerprintIcon fontSize="default" />
              </ListItemIcon>
              <Typography variant="inherit" noWrap>
                Your Profile
              </Typography>
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleClose();
                try {
                  LOGOUT_MUTATION();
                } catch (e) {
                  throw e;
                }
              }}
            >
              <ListItemIcon>
                <PowerSettingsNewIcon fontSize="default" />
              </ListItemIcon>
              <Typography variant="inherit" noWrap>
                Sign Out
              </Typography>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};
const refetchQueries = [{ query: VIEWER_QUERY }];

export default withRouter(
  withStyles(styles)(
    compose(
      graphql(LOGOUT_MUTATION, {
        options: { refetchQueries },
        name: "LOGOUT_MUTATION"
      })
    )(MenuBar)
  )
);
