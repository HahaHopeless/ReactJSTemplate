import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "./components/Footer";
import Landing from "./containers/Landing";
import NotFound from "./containers/NotFound";

const Routes = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </main>
  );
};

export default withRouter(connect(null, null)(Routes));
