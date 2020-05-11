import AnswerChoices from "./AnswerChoices";
import React, { useState } from "react";
import "./Answers.css";

function AnswerContainer(props) {
  const [userSelectedAnswer, setUserSelectedAnswer] = useState("");
  console.log(userSelectedAnswer);

  const {
    breed,
    multipleChoiceAnswers,
    wasChoiceSelected,
    setWasChoiceSelected,
  } = props.data;
  const { incrementScore } = props;

  function handleChoice(event, text) {
    event.preventDefault();
    //prevents the user from choosing an answer after they've chosen one
    if (wasChoiceSelected) {
      return;
    }

    showAnswerResult(text);
  }

  function getUpdateMultipleChoiceAnswers(selectedChoiceText) {
    return multipleChoiceAnswers.map((multipleChoice) => {
      // If the selected one is the current element
      if (selectedChoiceText === multipleChoice.breed) {
        // IF what is selected is the correct answer
        if (selectedChoiceText === breed) {
          incrementScore();
        }
      }

      // No change for all others
      return multipleChoice;
    });
  }

  function showAnswerResult(id) {
    const updatedChoices = getUpdateMultipleChoiceAnswers(id);
    // setMultipleChoiceAnswers(updatedChoices);
    setUserSelectedAnswer(id);
    setWasChoiceSelected(true);
  }

  const answerChoices = multipleChoiceAnswers.map((element) => {
    const { breed } = element;
    // console.log("element", element);
    return (
      <AnswerChoices key={breed} text={breed} handleChoice={handleChoice} />
    );
  });
  // console.log("answer choices", answerChoices);

  return <div>{answerChoices}</div>;
}

export default AnswerContainer;
