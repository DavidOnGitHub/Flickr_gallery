import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import picture from './pictureReducer';

export default combineReducers({
  picture,
  form: formReducer
});
