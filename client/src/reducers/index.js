import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import todosReducer from './todosReducer';
import authReducer from './authReducer';
import eventReducer from './eventReducer';
import profileReducer from './profileReducer'
import { ADD_USER_TODO } from '../actions/types';
import messageReducer from './messageReducer';
import taskReducer from './taskReducer'

export default combineReducers({
  event: eventReducer,
  auth: authReducer,
  todos: todosReducer,
  user: profileReducer,
  form: formReducer.plugin({
    addTodo: (state, action) => {
      switch(action.type) {
        case ADD_USER_TODO:
          return undefined;
        default:
          return state;
      }
    }
  }),
  messages: messageReducer,
  tasks: taskReducer
});
