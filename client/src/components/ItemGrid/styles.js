const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  itemGrid: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridGap: theme.spacing(1),
    margin: theme.spacing(1)
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

export default styles;
