import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
// import DevTools from './DevTools'
import { Route, Link, Switch } from 'react-router-dom'
import App from './App';
import LoginPage from './LoginPage';
import { Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import  PrivateRoute  from '../components/PrivateRoute';
import { ConnectedRouter } from "react-router-redux";


const Root = ({ store, history }) => {
  return (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>

        <Menu inverted>
          <Menu.Item name='home' active={false} onClick={this.handleItemClick} >
            <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item name='messages' active={true} onClick={this.handleItemClick}>
            <Link to="/users">Usuários</Link>
            </Menu.Item>
            <Menu.Item name='friends' active={false} onClick={this.handleItemClick}>
            <Link to="/pets">Pets</Link>
            </Menu.Item>
          </Menu>

            <Container>
              <Switch>
                <Route path="/login" component={LoginPage} />
                <PrivateRoute path="/" component={App} />
              </Switch>
            </Container>

              {/*<DevTools />*/}
        </div>
    </ConnectedRouter>
  </Provider>
);
};
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
