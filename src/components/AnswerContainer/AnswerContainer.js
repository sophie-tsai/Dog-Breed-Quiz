import AnswerChoices from "./AnswerChoices";
import React, { useState } from "react";
import "./Answers.css";

function AnswerContainer(props) {
  // const [userSelectedAnswer, setUserSelectedAnswer] = useState("");
  // console.log(userSelectedAnswer);

  const {
    breed,
    multipleChoiceAnswers,
    wasChoiceSelected,
    setWasChoiceSelected,
    setMultipleChoiceAnswers,
  } = props.data;
  const { incrementScore } = props;

  function handleChoice(event, selectedAnswer) {
    event.preventDefault();
    //prevents the user from choosing an answer after they've chosen one
    if (wasChoiceSelected) {
      return;
    }
    // setUserSelectedAnswer(text);
    showAnswerResult(selectedAnswer);
  }

  function getUpdateMultipleChoiceAnswers(selectedChoiceText) {
    return multipleChoiceAnswers.map((multipleChoice) => {
      // If the selected one is the current element
      if (selectedChoiceText === multipleChoice.breed) {
        // IF what is selected is the correct answer
        if (selectedChoiceText === breed) {
          incrementScore();
          return {
            backgroundColor: "green",
            breed: selectedChoiceText,
          };
        }
        // If what is selected is incorrect answer
        return {
          backgroundColor: "red",
          breed: selectedChoiceText,
        };
      }

      // No change for all others
      return multipleChoice;
    });
  }

  function showAnswerResult(id) {
    const updatedChoices = getUpdateMultipleChoiceAnswers(id);
    setMultipleChoiceAnswers(updatedChoices);

    setWasChoiceSelected(true);
  }

  const answerChoices = multipleChoiceAnswers.map((element) => {
    const { breed, backgroundColor } = element;

    return (
      <AnswerChoices
        key={breed}
        text={breed}
        handleChoice={handleChoice}
        backgroundColor={backgroundColor}
      />
    );
  });

  return <div>{answerChoices}</div>;
}

export default AnswerContainer;
