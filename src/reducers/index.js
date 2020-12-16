import { combineReducers } from 'redux';
import authreducer from './authreducer';
import Postsreducer from './postsreducer';
import {reducer} from 'redux-form'

export default combineReducers({
    auth: authreducer,
    posts: Postsreducer,
    form: reducer
});