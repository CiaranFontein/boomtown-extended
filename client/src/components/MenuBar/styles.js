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
    paddingLeft: 0,
    paddingRight: 0,
    height: 64
  },
  iconButton: {
    padding: 0,
    fontSize: 13,
    margin: theme.spacing(2)
  }
});

export default styles;
