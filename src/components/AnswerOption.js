import React from "react";

export default class AnswerOption extends React.Component {
  handleClick = () => {
    let id = this.props.optionid;
    let optionChosen = document.getElementById(id);
    let optionChosenChild = optionChosen.firstChild;
    let parentSet = optionChosen.parentElement;
    let childrenSet = parentSet.children;
    for (let i = 0; i < childrenSet.length; i++) {
      childrenSet[i].classList.remove("selectedOption");
      childrenSet[i].firstChild.classList.remove("selectedAnswer");
      childrenSet[i].firstChild.classList.add("option");
    }
    optionChosen.classList.add("selectedOption");
    optionChosenChild.classList.remove("option");
    optionChosenChild.classList.add("selectedAnswer");
    this.props.getCorrectAnswer();
  };

  render() {
    const { option } = this.props.option;

    return (
      <div
        onClick={this.handleClick}
        id={this.props.optionid}
        data-id={this.props.optionid}
        data-value={this.props.option.value}
      >
        <p className="option">{option}</p>
      </div>
    );
  }
}
