const styles = theme => ({
  sharedItemsContainer: {
    padding: 80,
    width: 1200
  },
  centerChildren: {
    background: "#212121",
    display: "flex",
    flexDirection: "column",
    justfiyContent: "center",
    alignItems: "center"
  },
  h2: {
    color: "#f9a825",
    fontSize: 32
  },
  userInfoPanel: {
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: 48
  },
  userInfoHeader: {
    display: "flex",
    alignItems: "center"
  },
  userName: {
    fontSize: 45,
    color: "#888"
  },
  gravatar: {
    borderRadius: "50%",
    marginRight: theme.spacing(1)
  },
  userBio: {
    marginBottom: theme.spacing(2),
    fontSize: 16
  },
  boomData: {
    marginBottom: theme.spacing(1),
    fontSize: 21
  }
});

export default styles;
