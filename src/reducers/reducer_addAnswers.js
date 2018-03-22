
import { ADD_ANSWERS } from "../constants.js";
export default function(state=[], action){
    
    switch(action.type){
       
        case ADD_ANSWERS:
        const set = action.payload;
        const answers = state.filter((item)=>{
            
            return item.setNumber !==set.setNumber})
        return [...answers, set]
        default: 
        return state
    }
}
