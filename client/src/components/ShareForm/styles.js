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
    width: "90%"
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
  }
});

export default styles;
