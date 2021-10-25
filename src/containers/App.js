import React from "react";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";

const App = (props) => {
  return (
    <IntlProvider messages={require(`../translations/${props.lang}.json`)}>
      <Router>
        <Routes />
      </Router>
    </IntlProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.languageReducer.lang,
  };
};

export default connect(mapStateToProps, null)(App);
