import React, { createContext, Component } from "react";

export const ItemPreviewContext = createContext();

const initialState = {
  title: "Insert title",
  description: "Write a description for your product",
  created: new Date(),
  tags: [],
  imageurl:
    "https://images.unsplash.com/photo-1442124920820-8e5f4b07b563?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
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

  updatePreview = async item => {
    this.setState({ item: { ...this.state.item, ...item } });
  };

  resetPreview = () => {
    this.setState({ item: { ...this.state.item, ...initialState } });
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
