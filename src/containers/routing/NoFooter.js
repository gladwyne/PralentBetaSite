import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const NoFooter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Fragment>
          <Navbar />
          <Component {...matchProps} />
        </Fragment>
      )}
    />
  );
};

export default NoFooter;
