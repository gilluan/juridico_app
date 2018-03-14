import React from 'react'
import { withFormik } from 'formik'
import Yup from 'yup';
import FormikInput from '../shared/FormikInput';
import FormikForm from '../shared/FormikForm';
import FormikSelect from '../shared/FormikSelect';
import { Button } from 'semantic-ui-react'

const options = [
  { text: 'Male', value: 'male' },
  { text: 'Female', value: 'female' },
];

const InnerForm = ({ handleSubmit }) => (
  <FormikForm onSubmit={handleSubmit}>
    <FormikInput
      fluid
      placeholder='Email'
      name="email"
     />
    <FormikInput
      fluid
      placeholder='Password'
      type="password"
      name="password"
     />
     <FormikSelect
      fluid
      placeholder="Genre"
      name="genre"
      options={options}
     />
    <Button type='submit'>Submit</Button>
  </FormikForm>
);

const UserForm = withFormik({
  mapPropsToValues: props => ({ email: '', password: '' }),
  validationSchema: Yup.object().shape({
    password: Yup.string()
      .required('Password is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!')
  }),
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    props.save(values);
  },
})(InnerForm);

export default UserForm
