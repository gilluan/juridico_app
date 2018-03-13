import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
// import DevTools from './DevTools'
import { Route, Link } from 'react-router-dom'
import App from './App'
import LoginPage from './LoginPage';
import UserPage from './UserPage';
import { Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import PrivateRoute from '../components/PrivateRoute';


const Root = ({ store }) => (
  <Provider store={store}>
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
        <Route exact={true} path="/" component={App} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute isAuthenticated={true} path="/users" component={UserPage} />
      </Container>
      
      {/*<DevTools />*/}
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
