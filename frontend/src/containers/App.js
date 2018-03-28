import React, { Component } from 'react';
import { Route } from "react-router-dom";
import UserPage from "./UserPage";
import ClientePage from "./ClientePage";
import Switch from "react-router-dom/Switch";
import PrivateRoute from '../components/PrivateRoute';

class App extends Component {

  componentWillMount() {
   
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={UserPage} />
          <Route path="/users" component={UserPage} />
          <PrivateRoute path="/pets" component={ClientePage} />
        </Switch>
      </div>
    )
  };
};



export default App;
