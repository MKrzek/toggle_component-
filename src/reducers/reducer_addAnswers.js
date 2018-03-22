import _ from 'lodash';
import { ADD_ANSWERS } from "../constants.js";
export default function(state=[], action){
    
    switch(action.type){
       
        case ADD_ANSWERS:
        const set = action.payload;
        let answers = state.filter((item)=>{
            console.log('item in state', item.setNumber)
            console.log('SETTTTT ', set.setNumber )
            return item.setNumber !==set.setNumber})
        
        console.log('answers', answers)
     
       
        
        return [...answers, set]
        default: 
        return state
    }
}
