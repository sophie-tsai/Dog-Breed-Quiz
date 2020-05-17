import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import scoreRef from "../../firebaseRef";
import "./Score.css";

function Score(props) {
  const { score, endTime, startTime } = props;
  const [finalScore, setFinalScore] = useState(0);
  const [playerName, setPlayerName] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setPlayerName(value);
  }

  function submitHighScore() {
    if (playerName) {
      const name = playerName.toLowerCase();
      scoreRef.add({
        name: name,
        score: finalScore,
      });
    }
  }

  useEffect(() => {
    const scoreSubtractTime = Math.floor(
      score * 100 - (endTime - startTime) / 1000
    );

    if (scoreSubtractTime < 0) {
      setFinalScore(0);
      return;
    }

    setFinalScore(scoreSubtractTime);
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
          <Link to="/Dog-Breed-Quiz/leaderboard">
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
