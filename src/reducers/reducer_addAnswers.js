import { ADD_ANSWERS } from "../constants.js";
export default function(state = [], action) {
  switch (action.type) {
    case ADD_ANSWERS:
      
      return action.payload
    default:
      return state;
  }
}
