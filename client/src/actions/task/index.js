import { POST_TASK_ERROR, GET_TASK, GET_TASK_ERROR } from "../types";

import axios from "axios";

export const postTask = (id) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/user/tasks/${id}`, {
      headers: { authorization: localStorage.getItem("token") },
    });
  } catch (e) {
    dispatch({
      type: POST_TASK_ERROR,
      serverError: e,
      clientError: "Something went wrong. Refresh the page and try again",
    });
  }
};

export const getAllTasks = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/taskboard/get/${id}`, {
      headers: { authorization: localStorage.getItem("token") },
    });
    dispatch({ type: GET_TASK, payload: data });
  } catch (e) {
    dispatch({
      type: GET_TASK_ERROR,
      serverError: e,
      clientError: "Something went wrong. Refresh the page and try again",
    });
  }
};
