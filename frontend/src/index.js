import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore';
import configureHistory from './store/configureHistory';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

//Add apollo
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

//TODO: substituir o link por um link de ambiente
const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const store = configureStore(configureHistory)();

render(
   <ApolloProvider client={client}>
      <Root store={store} history={configureHistory} />
    </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker();
