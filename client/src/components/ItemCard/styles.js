const styles = theme => ({
  pageContainer: {
    padding: 16,
    flexGrow: 1,
    background: "#fff",
    alignItems: "center",
    paddingTop: 0,
    height: "auto",
    background: "#212121",
    textDecoration: "none",
    color: "#212121"
  },
  cardContainer: {
    height: 460
  },
  cardContentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 400,
    height: "100%",
    textDecoration: "none",
    color: "#212121"
  },
  spaceBetweenColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  noTextDecoration: {
    textDecoration: "none",
    color: "black"
  }
});

export default styles;
