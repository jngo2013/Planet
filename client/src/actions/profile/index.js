import { GET_USER_INFO, GET_USER_INFO_ERROR } from "../types";

import axios from "axios";

export const getUserName = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/profile/profile", {
      headers: { authorization: localStorage.getItem("token") },
    });

    dispatch({ type: GET_USER_INFO, payload: data });
  } catch (e) {
    dispatch({
      type: GET_USER_INFO_ERROR,
      serverError: e,
      clientError: "Something went wrong please wait 900 seconds and try again",
    });
  }
};
