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

  useEffect(() => {
    setImagesLoaded(false);
    const selectedDogImages = preloadTenDogs();
    selectedDogImages.then((value) => setDogImages(value));
    setResetGame(false);

    return () => selectedDogImages;
  }, [resetGame]);

  useEffect(() => {
    if (dogImages.length === 10) {
      setImagesLoaded(true);
    }
  }, [dogImages]);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <StartPage imagesLoaded={imagesLoaded} />
        </Route>
        <Route exact path="/game">
          {imagesLoaded && (
            <GamePage
              dogImages={dogImages}
              imagesLoaded={imagesLoaded}
              setResetGame={setResetGame}
            />
          )}
        </Route>
        <Route exact path="/leaderboard">
          <Leaderboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
