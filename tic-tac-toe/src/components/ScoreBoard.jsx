import React, { useContext } from 'react'
import { GameContext } from "../store/GameContext";
// import { useGameContext } from "../store/GameContext";
import "./ScoreBoard.css"

export const ScoreBoard = ({ scores, xPlaying }) => {
  const { playerOneScore, playerTwoScore } = scores;
  const { players, setPlayers } = useContext(GameContext);
  // const { gamesHistory, addGameToHistory } = useGameContext();

  


  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>{players.playerOne} - {playerOneScore}</span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>{players.playerTwo} - {playerTwoScore}</span>
    </div>
  )
}

// function addPlayers() {
//   const playerOne = nameRefOne.current.value;
//   const playerTwo = nameRefTwo.current.value;

//   const gamesData = JSON.parse(localStorage.getItem("games") || "[]");
//   const gamesPlayed = gamesData.find(
//     (game) => game.playerOne === playerOne && game.playerTwo === playerTwo
//   );

//   if (gamesPlayed) {
//     setPlayers(gamesPlayed);
//   } else {
//     const newGame = {
//       playerOne,
//       playerTwo,
//       scores: { playerOneScore: 0, playerTwoScore: 0 },
//     };
//     gamesData.push(newGame);

//     localStorage.setItem("games", JSON.stringify(gamesData));

//     // Reset the scores in the state
//     setScores({
//       playerOneScore: 0,
//       playerTwoScore: 0,
//     });

//     setMessage("Have a good Game!");
//     setPlayers(newGame);
//   }
// }

// function addPlayers() {
//   const playerOne = nameRefOne.current.value;
//   const playerTwo = nameRefTwo.current.value;

//   const gamesData = JSON.parse(localStorage.getItem("games") || "[]");
//   const gamesPlayed = gamesData.find(
//     (game) => game.playerOne === playerOne && game.playerTwo === playerTwo
//   );

//   if (gamesPlayed) {
//     // Players have played before, set their scores from previous games
//     setPlayers(gamesPlayed);
//     setScores(gamesPlayed.scores);
//   } else {
//     const newGame = {
//       playerOne,
//       playerTwo,
//       scores: { playerOneScore: 0, playerTwoScore: 0 },
//     };
//     gamesData.push(newGame);

//     localStorage.setItem("games", JSON.stringify(gamesData));

//     // Reset the scores in the state
//     setScores({
//       playerOneScore: 0,
//       playerTwoScore: 0,
//     });

//     setMessage("Have a good Game!");
//     setPlayers(newGame);
//   }
// }

