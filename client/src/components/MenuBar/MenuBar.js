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
  Fingerprint,
  AddCircle,
  PowerSettingsNew
} from "@material-ui/icons";
import logo from "../../images/boomtown.svg";

const MenuBar = ({ classes, match }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    {
      path: "/profile",
      name: "Profile",
      icon: <Fingerprint fontSize="default" />
    },
    {
      path: "/welcome",
      name: "Sign Out",
      icon: <PowerSettingsNew fontSize="default" />
    }
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
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {options.map(option => (
              <MenuItem
                component={NavLink}
                to={option.path}
                key={option.path}
                onClick={handleClose}
              >
                <ListItemIcon>{option.icon}</ListItemIcon>
                <Typography noWrap>{option.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(withStyles(styles)(MenuBar));
