import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Leaderboard.css";
import scoreRef from "../../firebaseRef";
import HighScore from "./HighScore";

function Leaderboard(props) {
  const { handleHomeClick } = props;
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const unsubscribe = scoreRef
      .orderBy("score", "desc")
      .limit(10)
      .onSnapshot((querySnapshot) => {
        const scores = [];
        querySnapshot.forEach((doc) => {
          scores.push(doc.data());
        });
        setHighScores(scores);
      });

    return () => unsubscribe();
  }, []);

  const displayHighScores = highScores.map((element) => (
    <HighScore data={element} key={`${element.name}${element.score}`} />
  ));

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
        <Link to="/Dog-Breed-Quiz/">{homeIcon}</Link>
      </nav>
      <h1 className="title-text">high score</h1>
      <section className="leaderboard-main">{displayHighScores}</section>
    </div>
  );
}

export default Leaderboard;
