import React from "react";
import AnswerOption from "./AnswerOption.js";

export default class Answer extends React.Component {
  getCorrectAnswer = (value, setNumber) => {
    this.props.addAnswers(value, setNumber);
  };

  render() {
    const option = this.props.set.map((option, index) => {
      let optionid = this.props.setNumber + index;
      return (
        <AnswerOption
          option={option}
          key={index}
          optionid={optionid}
          setNumber={this.props.setNumber}
          getCorrectAnswer={this.getCorrectAnswer}
        />
      );
    });
    return <div className="rectangle-5">{option}</div>;
  }
}
