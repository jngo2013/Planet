import {
  GET_USER_EVENTS,
  ADD_USER_EVENT,
  DELETE_EVENT_BY_ID_ERROR,
  UPDATE_EVENT_BY_ID_ERROR,
  ADD_USER_EVENT_ERROR,
} from '../actions/types'


const INITIAL_STATE = {
  getUserEventServerError: '',
  addUserEventError: '',
  updateEventByIdError: '',
  deleteEventError: '',
  userEvents: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER_EVENTS:
      return {...state, userEvents: action.payload, getUserEventServerError: action.payload};
    case ADD_USER_EVENT:
      return {...state, addUserEventError: ''};
    case ADD_USER_EVENT_ERROR:
      return{...state, addUserEventError: action.payload};
    case UPDATE_EVENT_BY_ID_ERROR:
      return {...state, updateEventByIdError: action.payload}
    case DELETE_EVENT_BY_ID_ERROR:
      return {...state, deleteEventError: action.payload };
    default:
      return state;
  }
}