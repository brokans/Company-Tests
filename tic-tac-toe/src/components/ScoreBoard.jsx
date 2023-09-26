import React, { useContext } from 'react'
import { GameContext } from "../store/GameContext";
import "./ScoreBoard.css"

export const ScoreBoard = ({ scores, xPlaying }) => {
  const { playerOneScore, playerTwoScore } = scores;
  const { players, setPlayers } = useContext(GameContext);

  


  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>{players.playerOne} - {playerOneScore}</span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>{players.playerTwo} - {playerTwoScore}</span>
    </div>
  )
}





