import React, { useEffect, useState } from "react";
import "./Score.css";

function Score(props) {
  const { score } = props;
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    setFinalScore(score * 100);
  }, []);

  return (
    <div className="score-container">
      <h1 className="final-score">score: {finalScore}</h1>
    </div>
  );
}

export default Score;
