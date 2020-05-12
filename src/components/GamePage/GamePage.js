import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Score from "../Score/Score";
import Game from "./Game";
import "./GamePage.css";

function GamePage(props) {
  const {
    dogImages,
    handleHomeClick,
    setResetGame,
    setEndTime,
    startTime,
    endTime,
  } = props;
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const homeIcon = (
    <FontAwesomeIcon
      icon={faHome}
      size="3x"
      className="nav-icon"
      onClick={handleHomeClick}
    />
  );

  return (
    <div className="page-container">
      <nav className="nav-bar">
        <Link to="/">{homeIcon}</Link>
      </nav>
      {gameOver ? (
        <Score score={score} startTime={startTime} endTime={endTime} />
      ) : (
        <Game
          setGameOver={setGameOver}
          setResetGame={setResetGame}
          dogImages={dogImages}
          score={score}
          setScore={setScore}
          setEndTime={setEndTime}
        />
      )}
    </div>
  );
}

export default GamePage;
