import { Query } from "react-apollo";
import React, { createContext } from "react";
import { VIEWER_QUERY } from "../apollo/queries";
import { FullScreenLoader } from "../components";

const ViewerContext = createContext();

const ViewerProvider = ({ children }) => {
  return (
    <Query query={VIEWER_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <FullScreenLoader />;
        if (error) return `${error}`;
        const viewer = data && data.viewer ? data.viewer : null;
        return (
          <ViewerContext.Provider value={{ viewer }}>
            {children}
          </ViewerContext.Provider>
        );
      }}
    </Query>
  );
};
export { ViewerContext };
export default ViewerProvider;
