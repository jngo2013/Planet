import {
  GET_USER_EVENT,
} from '../actions/types'


const INITIAL_STATE = {
  getUserEventServerError: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER_EVENT:
      return {...state, getUserEventServerError: action.payload};
    default:
      return state;
  }
}