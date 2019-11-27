const styles = theme => ({
  imageContainer: {
    height: "30vh",
    objectFit: "cover"
  },
  itemTag: {
    color: "mediumGrey",
    margin: theme.spacing(0.25)
  },
  itemTitle: {
    margin: theme.spacing(0.5)
  },
  itemDescription: {
    margin: theme.spacing(0.5)
  },
  borrowButton: {
    margin: theme.spacing(1)
  },
  tagsContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    padding: 10
  },
  previewCard: {
    width: "32vw",
    height: "65vh"
  }
});

export default styles;
