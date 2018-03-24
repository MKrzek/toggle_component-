import React from "react";

export default class AnswerOption extends React.Component {

  handleClick = () => {
   
    this.props.getCorrectAnswer(this.props.option.value, this.props.setNumber);
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
  };

  render() {
    
    const { option} = this.props.option;
    return (
      <div onClick={this.handleClick} id={this.props.optionid}>
        <p className="option">{option}</p>
      </div>
    );
  }
}
