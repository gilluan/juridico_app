import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  type Query {
    getUser(id: String): User
    getUsers: [User!]!
  }

  type Mutation {
    signup(email: String!, password: String!, name: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }

  type User {
    id: ID
    email: String
    name: String
    password: String
  }

  type AuthPayload {
    token: String
    user: User
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
