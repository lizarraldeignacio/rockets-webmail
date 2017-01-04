import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducerAuth from './reducer_auth';

const rootReducer = combineReducers({
  form: formReducer,
  auth: reducerAuth
});

export default rootReducer;
