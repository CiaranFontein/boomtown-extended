import { Query } from "react-apollo";
import React, { Fragment, createContext } from "react";
import { VIEWER_QUERY } from "../apollo/queries";

const ViewerContext = createContext();

// {children} was passed when it was a function
class ViewerProvider extends Component {
  constructor(props){
    super(props)
    this.state = {
        user: {
            name: "James Bond",
            age: 35,
            code: "OO7"
        }
    }
  }
  
    render() {
      <ViewerContext.Provider value={/* pass value to be consumed */}>
      {this.props.children}
      </ViewerContext.Provider>
  }
}
  /**
   
   * Replace the <Fragment /> component with an Apollo <Query /> component
   * with a <ViewerContext.Provider /> nested inside that wrap the children.
   */
  //return <Fragment>{children}</Fragment>;


export default ViewerProvider;
