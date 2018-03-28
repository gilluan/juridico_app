import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  type Query {
    getUser(id: String): User
    getUsers: [User!]!
    getPerson: [Person!]!
    getClientes: [Cliente!]!
  }

  type Mutation {
    signup(email: String!, password: String!, name: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    saveCliente(cliente: ClienteInput): Cliente!
  }

  type Cliente {
    id: ID
    nome: String!
  }

  type Person {
    name: String!
  }

  type User {
    id: ID
    email: String
    name: String
    password: String
  }

  input ClienteInput {
    nome: String!
    sexo: String
    nascimento: Int
    observacoes: String
  }

  type AuthPayload {
    token: String
    user: User
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
