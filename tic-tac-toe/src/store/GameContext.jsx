import React, { createContext, useContext, useState } from 'react';

export const GameContext = createContext();


// siin peaks toimuma mängijate tulemuste võrdlemine
//GPT
// export const useGameContext = () => useContext(GameContext);



export function GameContextProvider({ children }) {
  // GPT
  // const [gamesHistory, setGamesHistory] = useState([]);
  const initialPlayers = JSON.parse(localStorage.getItem("games") || "[]");

  const [players, setPlayers] = useState(initialPlayers)

  //GPT
  // const addGameToHistory = (newGame) => {
  //   setGamesHistory((prevHistory) => [...prevHistory, newGame]);
  // };
  
  
  return (
    <GameContext.Provider value={{ players, setPlayers }}>
      {children}
    </GameContext.Provider>
  );
}