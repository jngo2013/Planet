import {
  POST_MESSAGE,
  POST_MESSAGE_ERROR,
  GET_MESSAGE,
  GET_MESSAGE_ERROR,
} from '../types'

import axios from 'axios';


export const postMessage = () => async dispatch => {
  try {
    const { text } = await axios.post('/api/user/messages', { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: POST_MESSAGE, payload: text });
  } catch (e) {
    dispatch({ type: POST_MESSAGE_ERROR, serverError: e, clientError: 'Something went wrong. Refresh the page and try again' });
  }
}

// getAllMessages function
export const getAllMessages = () => async dispatch => {
  console.log("GET ALL MESSAGES FUNCTION WAS HIT");
  try {
    const { data } = await axios.get('/api/dashboard', { headers: { 'authorization': localStorage.getItem('token') }});
    console.log(data);
    dispatch({ type: GET_MESSAGE, payload: data });   
  } catch (e) {
    dispatch({ type: GET_MESSAGE_ERROR, serverError: e, clientError: 'Something went wrong. Refresh the page and try again' });
  }
}