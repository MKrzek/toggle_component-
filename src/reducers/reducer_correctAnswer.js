import { CORRECT_ANSWER_FOUND } from "../constants";
const initialState = {
  correctAnswer: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case CORRECT_ANSWER_FOUND:
      return { correctAnswer: true };
    default:
      return state;
  }
}
