import { combineReducers } from "redux";
import FetchQuestion from './reducer_fetchQuestion.js';
import AddAnswers from './reducer_addAnswers.js';
import CorrectAnswerFound from './reducer_correctAnswer.js'
const rootReducer = combineReducers({
 question: FetchQuestion, 
 answers: AddAnswers,
 correctAnswer: CorrectAnswerFound
});
export default rootReducer;
