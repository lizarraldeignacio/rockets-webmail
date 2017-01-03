import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducerState from './reducer_state';
import reducerAuth from './reducer_auth';

const rootReducer = combineReducers({
  form: formReducer,
  frontPageState: reducerState,
  auth: reducerAuth
});

export default rootReducer;
