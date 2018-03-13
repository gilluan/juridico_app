import { combineReducers } from 'redux'

const user = (state = { users: {} }, action) => {
  return state
}

const errorMessage = (state = null, action) => {
//   const { type, error } = action

  return state
}


const rootReducer = combineReducers({
  user,
  errorMessage,
})

export default rootReducer
