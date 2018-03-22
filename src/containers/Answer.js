import React from 'react';

import AnswerOption from './AnswerOption.js';

export default class Answer extends React.Component{

getCorrectAnswer=(value, setNumber)=>{
     this.props.addAnswers(value, setNumber);
}

    render(){
        
        const option = this.props.set.map((option, index)=>{
            
            return <AnswerOption option={option} key={index} setNumber={this.props.setNumber}  getCorrectAnswer={this.getCorrectAnswer}/>
        })
    
        
        
        return <div className='row'>
               {option}
               </div>
    }
}
