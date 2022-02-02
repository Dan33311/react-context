import React from "react";

import GameContext from "./context/GameContext";
import Game from "./components/Game";


// TODO: add by comments the step by step
const App01 = () => {

  const gameData = {
    title: 'KOF95',
    year: 1995
  }

  return (
    <>
      <h1>App 01 working</h1>
      <GameContext.Provider value={gameData}>
        <Game />
      </GameContext.Provider>
    </>
  )
}

export default App01;