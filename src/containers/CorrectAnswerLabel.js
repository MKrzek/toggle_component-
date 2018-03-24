import React from "react";
import { connect } from "react-redux";
class CorrectAnswerLabel extends React.Component {
  
  componentWillReceiveProps() {
    this.correctAnswerFound();
  }
  correctAnswerFound = () => {
    if (this.props.correctAnswer) {
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
    const { correctAnswer } = this.props.correctAnswer;
    if (correctAnswer) {
      return <div className="the-answer-is-incorr">The answer is correct!</div>;
    } else {
      return (
        <div className="the-answer-is-incorr">The answer is incorrect</div>
      );
    }
  }
}
function mapStateToProps(state) {
  return { correctAnswer: state.correctAnswer };
}
export default connect(mapStateToProps, null)(CorrectAnswerLabel);
