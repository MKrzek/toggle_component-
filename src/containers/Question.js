import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as Actions from '../actions/index.js';
import Answer from './Answer.js';
class Question extends React.Component{

componentDidMount(){
    this.props.fetchQuestion()
}

getAnswers=()=>{
    
    const data=Object.assign({}, this.props.question[0])
   const answers=data.answers[0];
    
    return _.map(answers, (set, index)=>{
        return <Answer set={set} key={index} setNumber={index}  addAnswers={this.addAnswers}/>
    })
}

addAnswers=(value, setNumber)=>{
    const answerSet={setNumber: setNumber, value: value}
    this.props.addAnswers(answerSet)
    
}

calculateAnswers=()=>{
    console.log('working')
   const corr= this.props.answers.map(item=>{
       if(item.value===true)
       return item
   })
   console.log('corr', corr)
   const finalVal=corr.every(item=>{
       return item
   })
   console.log('final val', finalVal)
}


    render(){
        const answers= this.calculateAnswers()
        
        if (this.props.question){
        let data=Object.assign({}, this.props.question[0])
        let question= data.question
        
        return <div className='container'>
                <div>{question}:</div>
                {this.getAnswers()}
               
               </div>
    }else{
        return null
    }
}
}

function mapStateToProps(state){
    console.log('state.answers', state.answers)
    return {question: state.question.data,
            isLoading: state.question.isLoading,
            isError: state.question.isError,
            answers: state.answers
    }
}
export default connect (mapStateToProps, Actions)(Question)