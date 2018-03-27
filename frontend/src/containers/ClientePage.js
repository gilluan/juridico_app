import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { withFormik } from 'formik'
import Yup from 'yup';
import FormikInput from '../shared/FormikInput';

import { Button } from 'semantic-ui-react';
import FormikForm from '../shared/FormikForm';


const QUERY_LIST_CLIENTES = gql`
  query{
    getClientes {
      nome
      id
    }
  }
`;


const ListCliente = () => (
    <Query query={QUERY_LIST_CLIENTES}>
        {({ loading, error, data }) => {
            if (loading) return "Loading..."
            if (error) return `Error! ${error.message}`

            return (
                <div>
                {data.getClientes.map(cliente => (
                    <option key={cliente.id} value={cliente.nome}>
                    {cliente.nome}
                    </option>
                ))}
                </div>
            );
        }}

    </Query>
)

const InnerForm = ({handleSubmit}) => (
  <FormikForm onSubmit={handleSubmit}>
    <FormikInput
      fluid
      placeholder='Nome'
      name="nome"
     />
    
    <Button type='submit'>Salvar</Button>
  </FormikForm>
);

const ClienteForm = withFormik({
  mapPropsToValues: props => ({nome: ''}),
  validationSchema: Yup.object().shape({
  nome: Yup.string()
    .required('Nome is required!'),
  }),
  handleSubmit: (values, { props, resetForm }) => {
      props.saveCliente({variables: {...values}})
      console.log(props)
      resetForm();
  },
  handleReset: (t, a) => {

  },
  displayName: 'ClienteForm'
})(InnerForm);


const SAVE_CLIENTE = gql`
    mutation saveCliente($nome: String!){
  saveCliente(cliente: {nome: $nome}){
    id
    nome
  }
}
`

const updateList = (cache, { data: { saveCliente } }) => {
                        const {getClientes } = cache.readQuery({ query: QUERY_LIST_CLIENTES });
                        cache.writeQuery({
                        query: QUERY_LIST_CLIENTES,
                        data: { getClientes: getClientes.concat([saveCliente]) }
                        });
                    }

class PetsPage extends Component {
    render() {
        return (
            <div>
                <h1>Clientes</h1>
                <Mutation 
                    mutation={SAVE_CLIENTE}
                    update={updateList}>
                        {(saveCliente => {
                            return <ClienteForm saveCliente={saveCliente}/>
                        })}
                </Mutation>
                <ListCliente />
            </div>
        );
    }
}

export default PetsPage