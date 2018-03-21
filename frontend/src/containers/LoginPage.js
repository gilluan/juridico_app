import React from 'react';
import { Button, Form, Grid, Header, Message } from 'semantic-ui-react'
import LoginForm from '../components/login/LoginForm';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUserRequest, loginUserResponse } from "../actions/index";
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

const LoginPage = props => (
  <div className='login-form'>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Log-in to your account
        </Header>
        <LoginForm {...props} />
        <Message>
          New to us? <a href=''>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);

const LOGIN_USER = gql`
  mutation loginMutation($email: String!, $password: String!){
    login(email: $email, password: $password) {
      token
    }
}
`;

const mapStateToProps = state => ({
  isAuthenticated: true
});

const mapDispatchToProps = dispatch => ({
  handleLogin: async (credentials, props) => {
    dispatch(loginUserRequest());
    let { login, password } = credentials;
    let { data: { login: { token } } } = await props.loginMutation({variables: {login, password}});
    dispatch(loginUserResponse(token));
  }
});

const LoginPageWithGraphQL = compose(graphql(LOGIN_USER, {name: "loginMutation"}))(LoginPage);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPageWithGraphQL));
