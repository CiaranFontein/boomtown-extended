const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#212121"
  },
  itemGrid: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    padding: theme.spacing(12),
    background: "#212121"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

export default styles;
