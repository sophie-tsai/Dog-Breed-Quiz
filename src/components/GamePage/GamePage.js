import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import * as DogAPI from "../../utils/dogApi";
import AnswerContainer from "../AnswerContainer/AnswerContainer";
import "./GamePage.css";

function GamePage(props) {
  //the array of 10 preloaded dog images
  const { dogImages, setResetGame } = props;

  //the single image
  const [image, setImage] = useState("");
  const [breed, setBreed] = useState("");
  const [multipleChoiceAnswers, setMultipleChoiceAnswers] = useState([]);

  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [wasChoiceSelected, setWasChoiceSelected] = useState(false);
  const [arrayIndex, setArrayIndex] = useState(0);
  const errorMsg = "Oops, something went wrong! :-(";

  const homeIcon = (
    <FontAwesomeIcon
      icon={faHome}
      size="3x"
      className="nav-icon"
      onClick={handleHomeClick}
    />
  );
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

  function handleHomeClick() {
    setResetGame(true);
  }

  function handleArrowClick() {
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
    <div className="page-container">
      <nav className="nav-bar">
        <Link to="/">{homeIcon}</Link>
      </nav>
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

export default GamePage;
