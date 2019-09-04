import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Fragment>
          <Navbar />
          <Component {...matchProps} />
          <Footer />
        </Fragment>
      )}
    />
  );
};

export default DefaultLayout;
