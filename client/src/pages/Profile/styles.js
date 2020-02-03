const styles = theme => ({
  h2: {
    color: "#f9a825",
    fontSize: 32,
    padding: 8,
    maxWidth: 1260,
    margin: "0 auto"
  },
  userInfoPanel: {
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: 56,
    marginBottom: 36,
    width: "100%",
    maxWidth: 1260,
    margin: "0 auto"
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
  boomData: {
    marginBottom: theme.spacing(1),
    fontSize: 21
  },
  bold: {
    display: "inline-block",
    fontWeight: 900
  },
  page: {
    width: "100%",
    background: "#212121",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 80,
    paddingBottom: 80
  }
});

export default styles;
