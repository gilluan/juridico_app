import React from 'react'
import { withFormik } from 'formik'
import Yup from 'yup';
import FormikInput from '../../shared/FormikInput';
import FormikForm from '../../shared/FormikForm';
import { Button } from 'semantic-ui-react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

const InnerForm = props => (
  <FormikForm onSubmit={props.handleSubmit}>
    <FormikInput
      fluid
      placeholder='Login'
      name="login"
     />
    <FormikInput
      fluid
      placeholder='Password'
      type="password"
      name="password"
     />
    <Button type='submit'>Entrar</Button>
  </FormikForm>
);

const LoginForm = withFormik({
  mapPropsToValues: props => ({login: '', password: ''}),
  validationSchema: Yup.object().shape({
  password: Yup.string()
    .required('Password is required!'),
  login: Yup.string()
    .required('Login is required!')
  }),
  handleSubmit: (values, { props }) => {
    props.handleLogin(values, props);
  },
  displayName: 'LoginForm'
})(InnerForm);

export default LoginForm;
