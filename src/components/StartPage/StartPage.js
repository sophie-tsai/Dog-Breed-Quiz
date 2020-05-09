import React from "react";
import "./StartPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function StartPage() {
  const trophyIcon = (
    <FontAwesomeIcon icon={faTrophy} size="3x" className="nav-icon" />
  );

  return (
    <div className="page-container">
      <nav className="nav-bar">
        <Link to="/leaderboard">{trophyIcon}</Link>
      </nav>

      <section className="start-page-main">
        <div className="title">
          <h1 className="title-text">so you think you know </h1>
          <h1 className="title-text">dog breeds?</h1>
        </div>
        <div className="start-CTA">
          <Link to="/game">
            <button className="start-button">start</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default StartPage;
