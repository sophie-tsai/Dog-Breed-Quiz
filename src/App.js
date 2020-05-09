import React from "react";
import { Route, Switch } from "react-router-dom";
// import AnswerContainer from "./AnswerContainer";
// import { FaArrowRight } from "react-icons/fa";
// import { IconContext } from "react-icons";
// import { MdFiberNew } from "react-icons/md";

import "./App.css";
import StartPage from "./components/StartPage/StartPage";
import GamePage from "./components/GamePage/GamePage";
import Leaderboard from "./components/Leaderboard/Leaderboard";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route exact path="/game">
          <GamePage />
        </Route>
        <Route exact path="/leaderboard">
          <Leaderboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
