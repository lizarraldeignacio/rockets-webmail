import axios from 'axios';
import { browserHistory } from 'react-router';
import { CHANGE_STATE, AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3090'

export function changeFrontPage(state) {
  return {
    type: CHANGE_STATE,
    payload: state
  };
}

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

    });
  };
}
