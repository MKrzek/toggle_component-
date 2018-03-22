import React from 'react';
export default class AnswerOption extends React.Component{


   handleClick=()=>{
     this.props.getCorrectAnswer(this.props.option.value, this.props.setNumber)
   }

    render(){
     
       const{option}=this.props.option
        return <div  className='mx-auto' onClick={this.handleClick}>
                 {option}
               </div>
    }
}