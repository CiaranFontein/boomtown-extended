const styles = theme => ({
  toolbar: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between"
  },
  rightSideIcons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  flexToolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 64
  },
  iconButton: {
    fontSize: 13
  },
  navLinkShare: {
    marginRight: 16
  },
  FabIconButton: {
    backgroundColor: "transparent",
    boxShadow: "none",
    fontSize: 13,
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    }
  }
});

export default styles;
