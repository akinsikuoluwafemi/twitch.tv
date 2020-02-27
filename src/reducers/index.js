import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer'
import streamReducer from './streamReducer';

//form should be the key of the formReducer
export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
}); 
