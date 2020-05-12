import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import scoreRef from "../../firebaseRef";
import "./Score.css";

function Score(props) {
  const { score } = props;
  const [finalScore, setFinalScore] = useState(0);
  const [playerName, setPlayerName] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setPlayerName(value);
  }

  function submitHighScore() {
    if (playerName) {
      scoreRef.add({
        name: playerName,
        score: finalScore,
      });
    }
  }

  useEffect(() => {
    setFinalScore(score * 100);
  }, []);

  return (
    <div className="score-container">
      <h1 className="final-score">score: {finalScore}</h1>
      <div>
        <input
          type="text"
          placeholder="enter your name"
          className="final-score-name"
          value={playerName}
          onChange={handleChange}
          required
        ></input>
        {playerName && (
          <Link to="/leaderboard">
            <FontAwesomeIcon
              icon={faArrowRight}
              size="3x"
              className="arrow-icon"
              onClick={submitHighScore}
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Score;
