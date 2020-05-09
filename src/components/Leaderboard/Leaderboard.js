import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Leaderboard.css";

function Leaderboard() {
  const homeIcon = (
    <FontAwesomeIcon icon={faHome} size="3x" className="nav-icon" />
  );
  return (
    <div className="page-container">
      <nav className="nav-bar">
        <Link to="/">{homeIcon}</Link>
      </nav>
      <section className="leaderboard-main">
        <h1 className="title-text">high score</h1>
      </section>
    </div>
  );
}

export default Leaderboard;
