import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

//Add apollo
import { ApolloProvider, Query } from 'react-apollo'
import { ApolloClient } from 'apollo-boost'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from "graphql-tag";

//TODO: substituir o link por um link de ambiente
const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


const QUERY_EXAMPLE = gql`
     query {
  getPerson{
    name
  }
}
    `

// Fetch GraphQL data with plain JS
client
  .query({
    query: QUERY_EXAMPLE
  })
  .then(({ data }) => console.log({ data }));

// Fetch GraphQL data with a Query component
const ExchangeRates = () => (
  <Query
    query={QUERY_EXAMPLE}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.getPerson.map(({ id, name }) => (
        <div key={name}>
          <p>{`${name}: ${id}`}</p>
        </div>
      ));
    }}
  </Query>
);

render(
   <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker();
