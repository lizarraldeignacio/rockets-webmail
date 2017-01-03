import React from 'react';
import { CHANGE_STATE } from '../actions/types';

const INITIAL_STATE = { frontPageState: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_STATE:
      return action.payload;
    default:
      return state;
  }
}
