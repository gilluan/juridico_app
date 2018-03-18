import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import UserForm from '../components/UserForm';
import { saveUser } from '../actions/user';
import { ApolloClient } from 'apollo-client';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'




const UserPage = ({save, lista, listUsers, myQ}) => (
  <div>
    <h1>The User Form</h1>
    <UserForm save={save}/>
    {JSON.stringify(myQ.getUsers)}
  </div>
);

const mapStateToProps = state => ({
  lista: [{nome: 'Gilluan'}]
})

const mapDispatchToProps = dispatch => ({
  save: (user) => {
    dispatch(saveUser(user));
  }
})

const QUERY =  gql`
    query {
      getUsers {
        id
      }
    }
  `;


export default graphql(QUERY, {name: 'myQ'})(withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPage)));
