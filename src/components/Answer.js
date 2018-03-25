import React from "react";
import AnswerOption from "./AnswerOption.js";

export default class Answer extends React.Component {
  componentDidMount = () => {
    this.addClasses();
  };

  addClasses = () => {
    let id = this.props.setNumber;
    let options = document.getElementById(id);
    let children = options.children;
    let random = Math.floor(Math.random() * (children.length - 1)) + 0;
    let randomElement = children[random];
    randomElement.classList.add("selectedOption");
    randomElement.firstChild.classList.remove("option");
    randomElement.firstChild.classList.add("selectedAnswer");
  };

  getCorrectAnswer = () => {
    this.props.addAnswers();
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
    return (
      <div id={this.props.setNumber} className="rectangle-5">
        {option}
      </div>
    );
  }
}
