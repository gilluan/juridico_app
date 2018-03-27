import React from 'react'
import App from './App';
import LoginPage from './LoginPage';
import { Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import  PrivateRoute  from '../components/PrivateRoute';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const Root = () => {
  return (

<Router>
      <div>
      
        <Menu inverted>
          <Menu.Item name='home' active={false} onClick={this.handleItemClick} >
            <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item name='messages' active={true} onClick={this.handleItemClick}>
            <Link to="/users">Usuários</Link>
            </Menu.Item>
            <Menu.Item name='friends' active={false} onClick={this.handleItemClick}>
            <Link to="/pets">Clientes</Link>
            </Menu.Item>
          </Menu>
            <Container>
              <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/" component={App} />
              </Switch>
            </Container>
        </div>
        </Router>

  );
};

export default Root
