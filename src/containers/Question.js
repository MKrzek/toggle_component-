import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as Actions from '../actions/index.js';
import Answer from './Answer.js';
class Question extends React.Component{
    constructor(props){
        super(props);
        this.state={
            label:'This answer is incorrect'
        }
    }

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
    this.calculateAnswers()  
}

calculateAnswers=()=>{
   let correctAnswers= this.props.answers.map(item=>{
       if(item.value===true)
       return item
   })
   correctAnswers=correctAnswers.filter((n)=>( n !== undefined))
   console.log('corr', correctAnswers)
   console.log('corr length', correctAnswers.length)
   if (correctAnswers.length===4){
       this.setState({
           label:'This answer is correct'
       })
   }

}


    render(){
        if (this.props.question){
        let data=Object.assign({}, this.props.question[0])
        let question= data.question
        
        return <div className='container'>
                <div>{question}:</div>
                {this.getAnswers()}
                <div>{this.state.label}</div>
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