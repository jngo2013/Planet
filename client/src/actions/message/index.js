import {
  POST_MESSAGE,
  POST_MESSAGE_ERROR,
  GET_MESSAGE,
  GET_MESSAGE_ERROR,
} from '../types'

import axios from 'axios';


export const postMessage = (id) => async dispatch => {
  try {
    console.log("2")
    const { data } = await axios.post(`/api/user/messages/${id}`, { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: POST_MESSAGE, payload: data });
    console.log("4")
  } catch (e) {
    dispatch({ type: POST_MESSAGE_ERROR, serverError: e, clientError: 'Something went wrong. Refresh the page and try again' });
  }
}

// getAllMessages function
export const getAllMessages = (id) => async dispatch => {
  console.log("GET ALL MESSAGES FUNCTION WAS HIT");
  console.log(id)
  try {
    const { data } = await axios.get(`/api/dashboard/get/${id}`, { headers: { 'authorization': localStorage.getItem('token') }});
    console.log(data);
    dispatch({ type: GET_MESSAGE, payload: data });   
  } catch (e) {
    dispatch({ type: GET_MESSAGE_ERROR, serverError: e, clientError: 'Something went wrong. Refresh the page and try again' });
  }
}