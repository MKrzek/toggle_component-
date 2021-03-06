import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as Actions from "../actions/index.js";
import Answer from "../components/Answer.js";

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
          addAnswers={this.addAnswers}
        />
      );
    });
  };

  addAnswers = () => {
    let allSelectedOptions = document.querySelectorAll("div.selectedOption");
    let correctAnswers = [];
    for (let i = 0; i < allSelectedOptions.length; i++) {
      let value = allSelectedOptions[i].dataset.value;
      if (value === "true") {
        let setId = allSelectedOptions[i].dataset.id;
        correctAnswers.push(setId);
      }
    }
    this.props.addAnswers(correctAnswers);
  };

  adjustBackground = () => {
    if (this.props.answers) {
      let backGround = document.getElementById("app");
      console.log("this props answ", this.props.answers);
      let correctAnswers = this.props.answers;

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
        this.correctAnswerFound(correctAnswers.length);
      }
    }
  };
  correctAnswerFound = correctAnswers => {
    if (correctAnswers === 4) {
      let correctOptions = document.querySelectorAll("div.selectedOption");
      for (let i = 0; i < correctOptions.length; i++) {
        correctOptions[i].classList.remove("selectedOption");
        correctOptions[i].classList.add("correctOption");
        correctOptions[i].firstChild.classList.remove("selectedAnswer");
        correctOptions[i].firstChild.classList.add("correctAnswer");
      }
    }
  };

  render() {
    let correctAnswers = this.props.answers;

    const { isLoading, isError } = this.props;
    if (this.props.question) {
      let data = Object.assign({}, this.props.question[0]);
      let question = data.question;

      return (
        <div className="mask" id="app">
          {isLoading ? (
            <div className="loader">Data is being loaded</div>
          ) : null}
          {isError ? <div className="error">Error!</div> : null}
          <div className="question">{question}:</div>

          <div className="answers">{this.getAnswers()}</div>
          <div>{this.adjustBackground()}</div>
          {correctAnswers.length === 4 ? (
            <div className="the-answer-is-incorr">The answer is correct!</div>
          ) : (
            <div className="the-answer-is-incorr">The answer is incorrect</div>
          )}
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return {
    question: state.question.data,
    isLoading: state.question.isLoading,
    isError: state.question.isError,
    answers: state.answers
  };
}
export default connect(mapStateToProps, Actions)(Question);
