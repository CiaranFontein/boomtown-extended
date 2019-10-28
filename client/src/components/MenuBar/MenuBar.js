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
import logo from "../../images/boomtown.svg";

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
    { path: "/welcome", name: "Sign Out" }
  ];
  return (
    <AppBar position="static">
      <Toolbar className={classes.flexToolbar}>
        <NavLink to="./items">
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
          <NavLink to="./share">
            <Button className={classes.iconButton}>
              <AddCircleIcon />
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
                <NavLink to={option.path} activeClassName="active">
                  {option.name}
                </NavLink>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(withStyles(styles)(MenuBar));
