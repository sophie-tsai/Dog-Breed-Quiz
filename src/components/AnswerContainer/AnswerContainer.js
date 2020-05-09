import AnswerChoices from "./AnswerChoices";
import React, { useState } from "react";
import "./Answers.css";

function AnswerContainer(props) {
  const [userSelectedAnswer, setUserSelectedAnswer] = useState("");
  const [wasChoiceSelected, setWasChoiceSelected] = useState(false);

  const { breed, multipleChoiceAnswers } = props.data;
  const { incrementScore } = props;
  // console.log("what is increment", incrementScore);

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
          return {
            borderColor: "green",
            breed: selectedChoiceText,
          };
        }

        // If what is selected is incorrect answer
        return {
          borderColor: "red",
          breed: selectedChoiceText,
        };
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
    const { breed, borderColor } = element;
    // console.log("element", element);
    return (
      <AnswerChoices
        key={breed}
        text={breed}
        borderColor={borderColor}
        handleChoice={handleChoice}
      />
    );
  });
  // console.log("answer choices", answerChoices);

  return <div>{answerChoices}</div>;
}

export default AnswerContainer;

/////////////

// this method gets called before render and everytime the state changes / we get new props
// static getDerivedStateFromProps(props, state) {
//   const { multipleChoiceAnswers, breed } = props.data;
//   //in a static method we cannot use this keyword
//   if (breed !== state.breed) {
//     return {
//       multipleChoiceAnswers: multipleChoiceAnswers,
//       breed: breed,
//       wasChoiceSelected: false,
//     };
//   }
//   // Return null if the state hasn't changed
//   return null;
// }
