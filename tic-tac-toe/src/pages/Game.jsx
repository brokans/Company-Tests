import React, { useContext, useEffect, useState } from "react";
import { Board } from "../components/Board";
import { ResetButton } from "../components/ResetButton";
import { ScoreBoard } from "../components/ScoreBoard";
import { GameContext } from "../store/GameContext";

function Game() {

  const { players, setPlayers } = useContext(GameContext);
  const [xPlaying, setXPlaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);
  const [scores, setScores] = useState({
    playerOneScore: 0,
    playerTwoScore: 0,
  });

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    const gamesData = JSON.parse(localStorage.getItem("games") || "[]");
    const currentPlayer = gamesData.find(
      (game) =>
        (game.playerOne === players.playerOne &&
          game.playerTwo === players.playerTwo) ||
        (game.playerOne === players.playerTwo &&
          game.playerTwo === players.playerOne)
    );
    if (currentPlayer) {
      setScores(currentPlayer.scores);
  
      if (currentPlayer.lastWinner === "X") {
        setXPlaying(true); 
      } else {
        setXPlaying(false);
      }
    }
  }, [players]);
  

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });

    setBoard(updatedBoard);

    const winner = checkWinner(updatedBoard);

    if (winner) {
      let updatedScores = { ...scores };

      if (winner === "O") {
        updatedScores.playerTwoScore += 1;
      } else {
        updatedScores.playerOneScore += 1;
      }

      setScores(updatedScores);

      const gamesData = JSON.parse(localStorage.getItem("games") || "[]");
      const currentPlayer = gamesData.find(
        (game) =>
          game.playerOne === players.playerOne &&
          game.playerTwo === players.playerTwo
      );
      if (currentPlayer) {
        currentPlayer.scores = updatedScores;
        currentPlayer.lastWinner = winner;
        localStorage.setItem("games", JSON.stringify(gamesData));
      }
    }

    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <div>
      <div>
        <ScoreBoard scores={scores} xPlaying={xPlaying} />
        <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
        <ResetButton resetBoard={resetBoard} />
      </div>
    </div>
  );
}

export default Game;
