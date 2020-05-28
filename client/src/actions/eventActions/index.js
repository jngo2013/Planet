import {
  GET_USER_EVENTS,
  ADD_USER_EVENT,
  DELETE_EVENT_BY_ID_ERROR,
  UPDATE_EVENT_BY_ID_ERROR,
  ADD_USER_EVENT_ERROR,
  GET_USER_TODOS_ERROR,
  GET_USER_EVENTS_ERROR,
  LOAD_SPECIFIC_EVENT_ID,
  LOAD_SPECIFIC_EVENT_ID_ERROR,
  DELETE_SPECIFIC_EVENT_BY_ID_ERROR,
  GET_SPECIFIC_EVENT,
  GET_SPECIFIC_EVENT_ERROR,
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

export const selectEvent = (id, completed) => async dispatch => {
  console.log(id)
  console.log("selected event")
  try {
    localStorage.setItem('currentEvent', id);
    dispatch({ type: LOAD_SPECIFIC_EVENT_ID, payload: id })


  } catch (e) {
    dispatch({ type: LOAD_SPECIFIC_EVENT_ID_ERROR, payload: e })
  }
}

export const deleteUserEvent = (id, user) => async dispatch => {
console.log("attempting to delete event")
console.log(id)
try {
  await axios.delete(`/api/event/delete/${id}`, { headers: { 'authorization': localStorage.getItem('token') }});
  const { data } = await axios.get('/api/event/events', { headers: { 'authorization': localStorage.getItem('token') }});
  dispatch({ type: GET_USER_EVENTS, payload: data})
} catch (e) {
  dispatch({ type: DELETE_SPECIFIC_EVENT_BY_ID_ERROR, payload: e})
}
}

export const selectedEvent = (id) => async dispatch => {
  console.log("eyyyy")
  console.log(id)
  try {
    const { data } = await axios.get(`/api/event/eventSelected/${id}`, { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_SPECIFIC_EVENT, payload: data })
  } catch (e) {
    dispatch({ type: GET_SPECIFIC_EVENT_ERROR, payload: e})
  }
}

// export const deleteTodoById = id => async dispatch => {
//   try {
//     await axios.delete(`/api/user/todos/${id}`, { headers: { 'authorization': localStorage.getItem('token') }});
//     const { data } = await axios.get('/api/user/todos', { headers: { 'authorization': localStorage.getItem('token') }});
//     dispatch({ type: GET_USER_TODOS, payload: data });
//   } catch (e) {
//     dispatch({ type: DELETE_TODO_BY_ID_ERROR, payload: e });
//   }
// }