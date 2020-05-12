import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import StartPage from "./components/StartPage/StartPage";
import GamePage from "./components/GamePage/GamePage";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import preloadTenDogs from "./utils/preloadingApi";

function App() {
  const [dogImages, setDogImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [resetGame, setResetGame] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  useEffect(() => {
    setImagesLoaded(false);
    const selectedDogImages = preloadTenDogs();
    selectedDogImages.then((value) => setDogImages(value));
    setResetGame(false);
  }, [resetGame]);

  function handleHomeClick() {
    setResetGame(true);
  }

  useEffect(() => {
    if (dogImages.length === 10) {
      setImagesLoaded(true);
    }
  }, [dogImages]);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <StartPage imagesLoaded={imagesLoaded} setStartTime={setStartTime} />
        </Route>
        <Route exact path="/game">
          {imagesLoaded && (
            <GamePage
              dogImages={dogImages}
              imagesLoaded={imagesLoaded}
              setResetGame={setResetGame}
              handleHomeClick={handleHomeClick}
              setEndTime={setEndTime}
              startTime={startTime}
              endTime={endTime}
            />
          )}
        </Route>
        <Route exact path="/leaderboard">
          <Leaderboard handleHomeClick={handleHomeClick} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
