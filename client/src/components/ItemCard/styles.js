import { flexbox } from "@material-ui/system";

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
    color: "Light Grey",
    margin: theme.spacing(1)
  },
  itemTitle: {
    margin: theme.spacing(1)
  },
  itemDescription: {
    margin: theme.spacing(1)
  },
  userShortInfo: {
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "spaceBetween",
    alignItems: "center"
  },
  userInfo: {
    margin: theme.spacing(1),
    borderRadius: "50%"
  },
  borrowButton: {
    margin: theme.spacing(2)
  }
});

export default styles;
