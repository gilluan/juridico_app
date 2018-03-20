import { httpPost, httpGet } from "../utils";
import { push } from "react-redux-router";
import Constants from '../constants';

const loginRequestAction = () => {
  return {
    type: Constants.LOGIN_REQUEST
  }
}

const loginReceiveAction = payload => {
  return {
    type: Constants.LOGIN_SUCCESS,
    payload: payload
  }
}

export function loginUser(credentials) {
  return dispatch => {
    dispatch(loginRequestAction());
    return new Promise(function(resolve, reject) {
      let request=new XMLHttpRequest();
      let payload = `
        mutation {
          login(email: ${credentials.login}, password: ${credentials.password}) {
            token
          }
        }
      `;
      request.open("POST", "http://localhost:4000/graphql", true);
      request.setRequestHeader("Content-Type", "application/graphql");
      request.send(payload);
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          resolve(request.responseText)
        }
      }
    }).then(response => dispatch(loginReceiveAction(response)))
  };
}
