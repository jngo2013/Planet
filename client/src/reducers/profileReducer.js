import { GET_USER_INFO } from "../actions/types";

const INITIAL_STATE = {
  getUserName: "",
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER_INFO:
      return { ...state, getUserName: action.payload };
    default:
      return state;
  }
}
