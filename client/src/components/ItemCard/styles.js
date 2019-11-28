const styles = theme => ({
  pageContainer: {
    padding: 16,
    flexGrow: 1,
    background: "#fff",
    alignItems: "center",
    paddingTop: 0,
    height: "auto",
    background: "#212121"
  },
  cardContainer: {
    height: 460
  },
  cardContentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 400,
    height: "100%"
  },
  spaceBetweenColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
});

export default styles;
