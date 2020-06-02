
import Geocode from "react-geocode";

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
  GET_COORDINATES,
  GET_COORDINATES_ERROR,
} from '../types';



import axios from 'axios';

Geocode.setApiKey("AIzaSyAX1Pf_z0hAt1q0DIZ8CFUEgC7YeNBbKgI");
Geocode.setLanguage("en");
Geocode.setRegion("us");

export const getAddress = (locations) => async dispatch => {
  // searched takes a string
  console.log(locations)
  try {
    Geocode.fromAddress(locations).then(
      response => {
        const { location } = response.results[0].geometry;
        console.log(location);
        dispatch({ type: GET_COORDINATES, payload: location})
      },
      error => {
        console.error(error);
        dispatch({ type: GET_COORDINATES_ERROR, payload: error})
      }
    );
  } catch (e) {

  }
}

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
  try {
    console.log("ur firing selectEvent")
    console.log(id)
    localStorage.setItem('currentEvent', id);
    dispatch({ type: LOAD_SPECIFIC_EVENT_ID, payload: id })
  } catch (e) {
    dispatch({ type: LOAD_SPECIFIC_EVENT_ID_ERROR, payload: e })
  }
}

export const deleteUserEvent = (id, user) => async dispatch => {
try {
  await axios.delete(`/api/event/delete/${id}`, { headers: { 'authorization': localStorage.getItem('token') }});
  const { data } = await axios.get('/api/event/events', { headers: { 'authorization': localStorage.getItem('token') }});
  dispatch({ type: GET_USER_EVENTS, payload: data})
} catch (e) {
  dispatch({ type: DELETE_SPECIFIC_EVENT_BY_ID_ERROR, payload: e})
}
}

export const selectedEvent = (id) => async dispatch => {
  try {
    const { data } = await axios.get(`/api/event/eventSelected/${id}`, { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_SPECIFIC_EVENT, payload: data })
  } catch (e) {
    dispatch({ type: GET_SPECIFIC_EVENT_ERROR, payload: e})
  }
}
export const updateEventTitle = (title, id) => async dispatch => {
  console.log('Attempting to update Title')
  console.log(id)
  console.log(title)
  try {
    const { data } = await axios.put(`/api/event/title/${id}`, { title }, { headers: { 'authorization': localStorage.getItem('token') }});
    // const { data } = await axios.put(`/api/event/title/${id}`, { headers: { 'authorization': localStorage.getItem('token') }});
    console.log(data)
    dispatch({ type: GET_SPECIFIC_EVENT, payload: data })
  } catch (e) {
    console.log(e)
    dispatch({ type: GET_SPECIFIC_EVENT_ERROR, payload: e})
  }
}
export const updateEventDescription = (description, id) => async dispatch => {
  console.log('Attempting to update Description')
  console.log(id)
  console.log(description)
  try {
    const { data } = await axios.put(`/api/event/description/${id}`, { description }, { headers: { 'authorization': localStorage.getItem('token') }});
    console.log(data)
    dispatch({ type: GET_SPECIFIC_EVENT, payload: data })
  } catch (e) {
    console.log(e)
    dispatch({ type: GET_SPECIFIC_EVENT_ERROR, payload: e})
  }
}
export const updateEventDate = (date) => async dispatch => {
  console.log('Attempting to update Date')
  try {

  } catch (e) {
    console.log(e)
  }
}
export const updateEventLocation = (location, id) => async dispatch => {
  console.log('Attempting to update event location')
  try {
    const { data } = await axios.put(`/api/event/location/${id}`, { location }, { headers: { 'authorization': localStorage.getItem('token') }});
    console.log(data)
    dispatch({ type: GET_SPECIFIC_EVENT, payload: data })
  } catch (e) {
    console.log(e)
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