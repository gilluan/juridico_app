import React from 'react';
import { Route } from "react-router-dom";
import UserPage from "./UserPage";
import ClientePage from "./ClientePage";
import Switch from "react-router-dom/Switch";

const App = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={UserPage} />
        <Route path="/users" component={UserPage} />
        <Route path="/pets" component={ClientePage} />
      </Switch>
    </div>
);
};



export default App;
