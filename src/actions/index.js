import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER,
         AUTH_ERROR,
         DEAUTH_USER,
         FETCH_RECEIVED_MESSAGES,
         FETCH_SENT_MESSAGES
       } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then(response => {
      dispatch({
        type: AUTH_USER,
      });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/main');
    })
    .catch(() => {
      dispatch(authError('Incorrect Username or Password'));
    });
  };
}

export function signupUser({ email, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, password })
    .then(response => {
      dispatch({
        type: AUTH_USER,
      });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/main');
    })
    .catch(error => {
      dispatch(authError(error.response.data.error));
    });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  browserHistory.push('/');
  return {
    type: DEAUTH_USER,
  };
}

function getFetchMessageAction(type) {
  switch (type) {
    case 'sent':
      return FETCH_SENT_MESSAGES;
    default:
      return FETCH_RECEIVED_MESSAGES;
  }
}

export function fetchMessages(type) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/message?type=${type}`, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: getFetchMessageAction(type),
          payload: response.data
        });
      });
  }
}
