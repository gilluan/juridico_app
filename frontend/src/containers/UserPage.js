import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import UserForm from '../components/UserForm';
import { saveUser } from '../actions/user';




const UserPage = ({save}) => (
  <div>
    <h1>The User Form</h1>
    <UserForm save={save}/>
  </div>
);

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  save: (user) => {
    dispatch(saveUser(user));
  }
})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPage));
