import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "../home";
import Signup from "../signup";
import NotFoundPage from "../404";
// Routing
import DefaultLayout from "../routing/DefaultLayout";
import NoFooter from "../routing/NoFooter";

function App() {
  return (
    <Router>
      <Fragment>
        <ScrollToTop />
        <Switch>
          <DefaultLayout exact path="/" component={Home} />
          <NoFooter exact path="/signup" component={Signup} />
          <NoFooter component={NotFoundPage} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
