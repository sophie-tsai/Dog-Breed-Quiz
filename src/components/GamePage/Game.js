import React, { useState, useEffect } from "react";
import AnswerContainer from "../AnswerContainer/AnswerContainer";
import * as DogAPI from "../../utils/dogApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Game(props) {
  const { setGameOver, dogImages, score, setScore, setEndTime } = props;

  //the single image
  const [image, setImage] = useState("");
  const [breed, setBreed] = useState("");
  const [wasChoiceSelected, setWasChoiceSelected] = useState(false);
  const [multipleChoiceAnswers, setMultipleChoiceAnswers] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [arrayIndex, setArrayIndex] = useState(0);
  // const errorMsg = "Oops, something went wrong! :-(";

  const arrowIcon = (
    <FontAwesomeIcon
      icon={faArrowRight}
      size="3x"
      className="arrow-icon"
      onClick={handleArrowClick}
    />
  );

  function getDoggoData() {
    setArrayIndex((prevIndex) => prevIndex + 1);
    const currentDog = dogImages[arrayIndex].src;

    const dogData = DogAPI.handleAnswerSelectionFromImage(currentDog);
    setImage(currentDog);
    setBreed(dogData.correctBreedName);
    setMultipleChoiceAnswers(dogData.multipleChoiceAnswers);
  }

  function handleArrowClick() {
    if (questionNumber === 10) {
      setGameOver(true);
      const date = new Date();
      const endTimeStamp = date.getTime();
      setEndTime(endTimeStamp);
      return;
    }
    if (questionNumber < 10) {
      setQuestionNumber((prevNumber) => prevNumber + 1);
      setWasChoiceSelected(false);
    }
  }

  function increment() {
    setScore((prevScore) => prevScore + 1);
  }

  useEffect(() => {
    getDoggoData();
  }, [questionNumber]);

  return (
    <div>
      <span className="score-info">
        score: {score} - round {questionNumber}
      </span>
      <div className="game-page-main">
        <div className="dog-image-container">
          <img className="dog-image" src={image} alt="random dog" />
        </div>
        <div className="answer-container">
          <AnswerContainer
            data={{
              breed: breed,
              multipleChoiceAnswers: multipleChoiceAnswers,
              wasChoiceSelected: wasChoiceSelected,
              setWasChoiceSelected: setWasChoiceSelected,
              setMultipleChoiceAnswers: setMultipleChoiceAnswers,
            }}
            incrementScore={increment}
          />
        </div>
        <div>{arrowIcon}</div>
      </div>
    </div>
  );
}

export default Game;
