const styles = theme => ({
  centeredRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  centeredCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  textField: {
    margin: theme.spacing(2),
    width: "90%",
    padding: 8
  },
  submitButton: {
    textTranform: "uppercase",
    textAlign: "left"
  },
  checkboxContainer: {
    width: 400,
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap"
  },
  errorMessage: {
    color: "firebrick"
  },
  shareButton: {
    alignSelf: "flex-start",
    margin: 8,
    textTranform: "uppercase"
  },
  field: {
    paddingTop: 8,
    paddingBottom: 8
  }
});

export default styles;
