const styles = theme => ({
  pageContainer: {
    justifySelf: "center",
    height: "auto",
    background: "#212121",
    textDecoration: "none",
    color: "#212121"
  },
  cardContainer: {
    height: 480,
    width: 421,
    padding: 8
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
  },
  tag: {
    color: "grey"
  },
  tagsContainer: {
    width: "100%"
  }
});

export default styles;
