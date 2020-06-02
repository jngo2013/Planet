
import Geocode from "react-geocode";

import {
  GET_USER_EVENTS,
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
  try {
    Geocode.fromAddress(locations).then(
      response => {
        const { location } = response.results[0].geometry;
        dispatch({ type: GET_COORDINATES, payload: location})
      },
      error => {
        dispatch({ type: GET_COORDINATES_ERROR, payload: error})
      }
    );
  } catch (e) {

  }
}

export const getUserEvents = () => async dispatch => {
  try {
    
    const { data } = await axios.get('/api/event/events', { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_USER_EVENTS, payload: data})
  } catch (e) {
    dispatch({ type: GET_USER_EVENTS_ERROR, serverError: e, clientError: 'Something went wrong. Refresh the page and try again'})
  }
}

export const selectEvent = (id, completed) => async dispatch => {
  try {
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
  try {
    const { data } = await axios.put(`/api/event/title/${id}`, { title }, { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_SPECIFIC_EVENT, payload: data })
  } catch (e) {
    dispatch({ type: GET_SPECIFIC_EVENT_ERROR, payload: e})
  }
}
export const updateEventDescription = (description, id) => async dispatch => {
  try {
    const { data } = await axios.put(`/api/event/description/${id}`, { description }, { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_SPECIFIC_EVENT, payload: data })
  } catch (e) {
    dispatch({ type: GET_SPECIFIC_EVENT_ERROR, payload: e})
  }
}
export const updateEventLocation = (location, id) => async dispatch => {
  try {
    const { data } = await axios.put(`/api/event/location/${id}`, { location }, { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_SPECIFIC_EVENT, payload: data })
  } catch (e) {
    dispatch({ type: GET_SPECIFIC_EVENT_ERROR, payload: e})
  }
}