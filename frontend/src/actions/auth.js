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

export function loginUserRequest() {
  return dispatch => {
    dispatch(loginRequestAction());
  };
}

export function loginUserResponse(payload) {
  return dispatch => {
    dispatch(loginReceiveAction(payload));
  }
}
