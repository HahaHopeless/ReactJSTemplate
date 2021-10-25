import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Landing from './Landing';
import NotFound from './NotFound';

const Main = () => {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </main>
  );
};

export default withRouter(connect(null, null)(Main));
