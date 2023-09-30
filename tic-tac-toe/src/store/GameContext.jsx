import React, { createContext, useState } from "react";

export const GameContext = createContext();

export function GameContextProvider({ children }) {
  const initialPlayers =  useState([])
  // JSON.parse(localStorage.getItem("games") || "[]");

  const [players, setPlayers] = useState(initialPlayers);

  return (
    <GameContext.Provider value={{ players, setPlayers }}>
      {children}
    </GameContext.Provider>
  );
}
