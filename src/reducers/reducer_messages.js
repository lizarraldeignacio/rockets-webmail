import {
  FETCH_SENT_MESSAGES,
  FETCH_RECEIVED_MESSAGES
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {

    case FETCH_SENT_MESSAGES:
      return {...state,
        sent: {...action.payload.messages}
      };

    case FETCH_RECEIVED_MESSAGES:
      return {...state,
        received: {...action.payload.messages}
      };

    default:
      return state;
  }
}
