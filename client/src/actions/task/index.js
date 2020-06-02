import {
  POST_TASK,
  POST_TASK_ERROR,
  GET_TASK,
  GET_TASK_ERROR
} from '../types'

import axios from 'axios';

export const postTask = (id) => async dispatch => {
  try {
    console.log("this is Post Tag")
    const { data } = await axios.post(`/api/user/tasks/${id}`, { headers: { 'authorization': localStorage.getItem('token') }});
    // dispatch({ type: POST_TASK, payload: data });
    console.log("heuheuhehue")
  } catch (e) {
    dispatch({ type: POST_TASK_ERROR, serverError: e, clientError: 'Something went wrong. Refresh the page and try again' });
  }
}

export const getAllTasks = (id) => async dispatch => {
  console.log("GET ALL TASKS FUNCTION WAS HIT");
  console.log(id)
  try {
    const { data } = await axios.get(`/api/taskboard/get/${id}`, { headers: { 'authorization': localStorage.getItem('token') }});
    console.log(data);
    console.log("HERE IS THE DATA!!!!")
    dispatch({ type: GET_TASK, payload: data });   
  } catch (e) {
    console.log(e)
    dispatch({ type: GET_TASK_ERROR, serverError: e, clientError: 'Something went wrong. Refresh the page and try again' });
  }
}