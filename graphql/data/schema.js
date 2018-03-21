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
    createPet(pet: PetInput): String!
  }

  type User {
    id: ID
    email: String
    name: String
    password: String
  }

  input PetInput {
    nome: String!
    especie: String!
    cor: String
    raca: String
    sexo: String
    peso: Float
    nascimento: Int
    criado: Int
    ativo: Boolean
    comportamento: [String]
    observacoes: String
  }

  type AuthPayload {
    token: String
    user: User
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
