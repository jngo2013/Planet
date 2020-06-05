import { POST_MESSAGE, GET_MESSAGE } from '../actions/types';

const INITIAL_STATE ={
  content: [],
  newMessage: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case POST_MESSAGE:
      return {...state, newMessage: action.payload }
      case GET_MESSAGE:
      return {...state, content: action.payload }
    default:
      return state;
  }
}