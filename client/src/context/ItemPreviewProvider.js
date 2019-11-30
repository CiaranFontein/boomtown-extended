import React, { createContext, Component } from "react";

export const ItemPreviewContext = createContext();

const initialState = {
  title: "Insert title",
  description: "Write a description for your product",
  created: new Date(),
  tags: [],
  imageurl:
    "https://media0.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.webp?cid=790b7611c4be7ef45bdd9767a1e87734d7e27d9409ae096d&rid=giphy.webp",
  itemOwner: {},
  formErrors: ""
};

class ItemPreviewProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: initialState
    };
  }

  updatePreview = item => {
    this.setState({ item: { ...this.state.item, ...item } });
  };

  resetPreview = () => {
    this.setState({ ...this.initialValues });
  };

  render() {
    return (
      <ItemPreviewContext.Provider
        value={{
          state: this.state,
          updatePreview: this.updatePreview,
          resetPreview: this.resetPreview
        }}
      >
        {this.props.children}
      </ItemPreviewContext.Provider>
    );
  }
}
export default ItemPreviewProvider;
