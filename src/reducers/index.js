import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducerAuth from './reducer_auth';
import reducerMessages from './reducer_messages';

const rootReducer = combineReducers({
  form: formReducer,
  auth: reducerAuth,
  messages: reducerMessages
});

export default rootReducer;
