const styles = theme => ({
  pageContainer: {
    paddingBottom: 16,
    flexGrow: 1,
    justifySelf: "center",
    height: "auto",
    background: "#212121",
    textDecoration: "none",
    color: "#212121",
    width: "100%",
    minWidth: 350
  },
  cardContainer: {
    height: 460
  },
  cardContentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
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
