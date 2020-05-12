import React from "react";
import "./Leaderboard.css";

function HighScore(props) {
  const { name, score } = props.data;
  return (
    <div className="high-score-single">
      <span className="high-score-name">{name}</span>
      <span className="high-score-score">{score}</span>
    </div>
  );
}

export default HighScore;
