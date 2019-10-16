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
  Menu
} from "@material-ui/core";
import { withRouter } from "react-router";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const MenuBar = ({ classes, match }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const ITEM_HEIGHT = 48;

  const options = [
    {
      path: "/profile",
      name: "Profile"
    },
    { path: "/share", name: "Sign Out" }
  ];
  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink to={"./items"}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            B
          </IconButton>
        </NavLink>
        <IconButton
          onClick={handleClick}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200
            }
          }}
        >
          {options.map(option => (
            <MenuItem key={option.path} onClick={handleClose}>
              <NavLink exact to={option.path} activeClassName="active">
                {option.name}
              </NavLink>
            </MenuItem>
          ))}
        </Menu>
        <NavLink to={"./share"}>
          <Button color="inherit">
            <AddCircleIcon />
            Share Something
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(withStyles(styles)(MenuBar));
