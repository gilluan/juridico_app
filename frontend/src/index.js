import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

//Add apollo
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

//TODO: substituir o link por um link de ambiente
const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const store = configureStore()

render(
   <ApolloProvider client={client}>
    <Router>
      <Root store={store} />
    </Router>
    </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker();
