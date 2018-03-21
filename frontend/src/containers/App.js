import React from 'react';
import { withRouter, Route } from "react-router-dom";
import UserPage from "./UserPage";
import Switch from "react-router-dom/Switch";
import { connect } from "react-redux";

const App = props => {
  const { dispatch } = props;
  return (
    <div>
      <Switch>
        <Route exact path="/" component={UserPage} />
        <Route path="/users" component={UserPage} />
      </Switch>
    </div>
);
};


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default withRouter(connect(mapStateToProps)(App));
