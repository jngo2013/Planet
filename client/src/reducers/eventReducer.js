import {
  GET_USER_EVENTS,
  GET_USER_EVENTS_ERROR,
  ADD_USER_EVENT,
  DELETE_EVENT_BY_ID_ERROR,
  UPDATE_EVENT_BY_ID_ERROR,
  ADD_USER_EVENT_ERROR,
  LOAD_SPECIFIC_EVENT_ID,
  LOAD_SPECIFIC_EVENT_ID_ERROR,
  DELETE_SPECIFIC_EVENT_BY_ID_ERROR,
  GET_SPECIFIC_EVENT,
  GET_SPECIFIC_EVENT_ERROR,
  GET_COORDINATES,
  GET_COORDINATES_ERROR,
} from '../actions/types'


const INITIAL_STATE = {
  getUserEventServerError: '',
  addUserEventError: '',
  updateEventByIdError: '',
  deleteEventError: '',
  userEvents: [],
  specificEvent: '',
  specificEventError: '',
  userSpecificEvent: [],
  userSpecificEventError: '',
  eventCoordinates: {},
  eventCoordinatesError: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER_EVENTS:
      return {...state, userEvents: action.payload, getUserEventServerError: ''};
    case GET_USER_EVENTS_ERROR:
      return {...state, getUserEventsServerError: action.payload }
    case ADD_USER_EVENT:
      return {...state, addUserEventError: ''};
    case ADD_USER_EVENT_ERROR:
      return{...state, addUserEventError: action.payload};
    case UPDATE_EVENT_BY_ID_ERROR:
      return {...state, updateEventByIdError: action.payload}
    case DELETE_EVENT_BY_ID_ERROR:
      return {...state, deleteEventError: action.payload };
    case LOAD_SPECIFIC_EVENT_ID:
      return {...state, specificEvent: action.payload, specificEventError: '' };
    case LOAD_SPECIFIC_EVENT_ID_ERROR:
      return {...state, specificEventError: action.payload };
    case DELETE_SPECIFIC_EVENT_BY_ID_ERROR:
      return {...state, deleteEventError: action.payload };
    case GET_SPECIFIC_EVENT:
      return {...state, userSpecificEvent: action.payload, userSpecificEventError: ''};
    case GET_SPECIFIC_EVENT_ERROR:
      return {...state, userSpecificEventError: action.payload };
    case GET_COORDINATES:
      return {...state, eventCoordinates: action.payload, eventCoordinatesError: '' };
    case GET_COORDINATES_ERROR:
      return {...state, eventCoordinatesError: action.payload };
    default:
      return state;
  }
}