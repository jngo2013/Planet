import { POST_MESSAGE } from '../actions/types';

const INITIAL_STATE ={
  message: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case POST_MESSAGE:
      // grab all the comments from the database and post into the message board
      return {...state, message: action.payload }
    default:
      return state;
  }
}