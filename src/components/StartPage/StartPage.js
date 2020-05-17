import React from "react";
import "./StartPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function StartPage(props) {
  const { imagesLoaded, setStartTime } = props;
  const trophyIcon = (
    <FontAwesomeIcon icon={faTrophy} size="3x" className="nav-icon" />
  );

  function handleStartTime() {
    const date = new Date();
    const startTimeStamp = date.getTime();
    setStartTime(startTimeStamp);
  }

  return (
    <div className="page-container">
      <nav className="nav-bar">
        <Link to="/Dog-Breed-Quiz/leaderboard">{trophyIcon}</Link>
      </nav>

      <section className="start-page-main">
        <div className="title">
          <h1 className="title-text">so you think you know </h1>
          <h1 className="title-text">dog breeds?</h1>
        </div>
        <div className="start-CTA">
          <Link to="/Dog-Breed-Quiz/game">
            {imagesLoaded ? (
              <button className="start-button" onClick={handleStartTime}>
                start
              </button>
            ) : (
              <button className="start-button" disabled>
                loading...
              </button>
            )}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default StartPage;
