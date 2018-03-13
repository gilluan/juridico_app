import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// //import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
// import DevTools from '../containers/DevTools'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(thunk))
  )
  return store
}

export default configureStore
