import {
  GET_USER_EVENTS,
  ADD_USER_EVENT,
  DELETE_EVENT_BY_ID_ERROR,
  UPDATE_EVENT_BY_ID_ERROR,
  ADD_USER_EVENT_ERROR,
  GET_USER_TODOS_ERROR,
  GET_USER_EVENTS_ERROR,
} from '../types';

import axios from 'axios';

export const getUserEvents = () => async dispatch => {
  console.log('ive been triggered from state')
  try {
    const { data } = await axios.get('/api/event/events', { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_USER_EVENTS, payload: data})
  } catch (e) {
    dispatch({ type: GET_USER_EVENTS_ERROR, serverError: e, clientError: 'Something went wrong. Refresh the page and try again'})
  }
}

