import { combineReducers } from "redux";
import FetchQuestion from './reducer_fetchQuestion.js';
import AddAnswers from './reducer_addAnswers.js';
const rootReducer = combineReducers({
 question: FetchQuestion, 
 answers: AddAnswers
});
export default rootReducer;
