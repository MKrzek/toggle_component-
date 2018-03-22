import {
  FETCH_QUESTION,
  QUESTION_LOADING,
  QUESTION_ERROR
} from "../constants.js";

const initialState={
    isError: false,
    isLoading: false
}
export default function (state=initialState, action){
    switch(action.type){
        case QUESTION_LOADING:
        return {isLoading:true};

        case FETCH_QUESTION:
        return  {isLoading: false, isError: false, data: action.payload}

        case QUESTION_ERROR:
        return {isError: false}
        default: 
        return state
    }
}
