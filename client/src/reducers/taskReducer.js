import { POST_TASK, GET_TASK } from '../actions/types'

const INITIAL_STATE = {
  allTask: [],
  newTask: []
};

export default function(state = INITIAL_STATE, action){
  switch (action.type){
  case POST_TASK:
    return {...state, newTask: action.payload };
    case GET_TASK:
     return {...state, allTask: action.payload };
     default:
       return state;
  }
}