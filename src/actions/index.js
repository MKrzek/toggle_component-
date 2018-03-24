import axios from "axios";
import {
  FETCH_QUESTION,
  QUESTION_LOADING,
  QUESTION_ERROR
} from "../constants.js";
import { ADD_ANSWERS } from "../constants.js";
import { CORRECT_ANSWER_FOUND } from "../constants";

export function fetchQuestion() {
  return dispatch => {
    dispatch(fetchQuestionRequested());
    axios
      .get(
        'https://api.mlab.com/api/1/databases/toggle_component/collections/questions?q={"subject":"biology"}&apiKey=ruso83O820aZmaGmCk9R72BFGEIo7iJW'
      )
      .then(response => {
        dispatch({
          type: FETCH_QUESTION,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch(fetchQuestionFailed());
      });
  };
}
export function fetchQuestionRequested() {
  return {
    type: QUESTION_LOADING
  };
}

export function fetchQuestionFailed() {
  return {
    type: QUESTION_ERROR
  };
}

export function addAnswers(set) {
  console.log('set', set)
  return dispatch => {
    dispatch({ type: ADD_ANSWERS, payload: set });
  };
}

export function correctAnswerFound() {
  return {
    type: CORRECT_ANSWER_FOUND
  };
}
