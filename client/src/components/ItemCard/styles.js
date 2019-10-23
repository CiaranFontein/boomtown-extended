const styles = theme => ({
  itemCard: {
    width: "100%",
    height: 500
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  cardImageContainer: {
    height: 300,
    width: "100%"
  },
  itemTag: {
    color: "LightGrey",
    margin: theme.spacing(0.25)
  },
  itemTitle: {
    margin: theme.spacing(1)
  },
  itemDescription: {
    margin: theme.spacing(1)
  },
  borrowButton: {
    margin: theme.spacing(2)
  },
  tagsContainer: {
    maxWidth: 200,
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap"
  }
});

export default styles;
