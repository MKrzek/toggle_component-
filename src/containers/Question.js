import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as Actions from "../actions/index.js";
import Answer from "../components/Answer.js";
import CorrectAnswerLabel from "./CorrectAnswerLabel.js";

class Question extends React.Component {

  componentDidMount() {
    this.props.fetchQuestion();
  }
  

  getAnswers = () => {
    const data = Object.assign({}, this.props.question[0]);
    const answers = data.answers[0];
    return _.map(answers, (set, index) => {
      return (
        <Answer
          set={set}
          key={index}
          setNumber={index}
          data-set-id={index}
          addAnswers={this.addAnswers}
        />
      );
    });
  };

  addAnswers = (value, setNumber) => {
    const answerSet = { setNumber: setNumber, value: value };
    this.props.addAnswers(answerSet);
  };

  calculateAnswers = () => {
    console.log("props answers", this.props.answers);
    if (this.props.answers) {

      let backGround = document.getElementById("app");

      let correctAnswers = this.props.answers.filter(item => {
        return item.value === true;
      });
      console.log("corr", correctAnswers);
      if (correctAnswers.length > 0 && correctAnswers.length < 0) {
        backGround.clasName = "";
        backGround.classList.add("mask");
      }
      if (correctAnswers.length === 2) {
        backGround.clasName = "";
        backGround.classList.add("mask2");
      }
      if (correctAnswers.length === 3) {
        backGround.className = "";
        backGround.classList.add("mask3");
      }
      if (correctAnswers.length === 4) {
        backGround.className = "";
        backGround.classList.add("maskCorrect");

        this.props.correctAnswerFound();
      }
    }
  };

  

  render() {
    const { isLoading, isError } = this.props;
    if (this.props.question) {
      let data = Object.assign({}, this.props.question[0]);
      let question = data.question;

      return (
        <div className="mask" id="app">
          {isLoading?  (<div className='loader'>Data is being loaded</div>): null}
          {isError ? (<div className='error'>Error!</div>): null}
          <div className="question">{question}:</div>

          <div className="answers">{this.getAnswers()}</div>
          <div>{this.calculateAnswers()}</div>
          <CorrectAnswerLabel />
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  console.log("state.answers", state.answers);
  return {
    question: state.question.data,
    isLoading: state.question.isLoading,
    isError: state.question.isError,
    answers: state.answers
  };
}
export default connect(mapStateToProps, Actions)(Question);
