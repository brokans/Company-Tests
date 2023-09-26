import "./App.css";
import React, { useRef, useState, useContext } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import Game from "./pages/Game";
import StartPage from "./pages/StartPage";

// 1.Inital leht, kus saab sisestada mängijate nimesid ja nupp millega saab mängu alustada
// 2. Tee mängulaud lihtsa css'ga (x-punane, O-sinine)
// 3. salvesta praegune positsioon local state, kasutades useState'i
// 4. Salvesta kõikide mängude ajalugu kasutades global state useContext()'i
// 5. Kasutades React Router't tee navigatsioon mängulaualt punktitabelile ja tagasi.
// 6. Uut mängu mängides, puhasta ajalugu. Kui samad mängijad on varem mänginud, defineeri eelmine mängija Player1'ks
// tavana alustab järgmist mängu X.
// 7. Tee readme.md fail juhendiga app'i käivitamiseks.

function App() {
  

  // const [xPlaying, setXPlaying] = useState(true);
  // const [board, setBoard] = useState(Array(9).fill(null));
  

  

  // const WIN_CONDITIONS = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [2, 4, 6],
  // ];

  // const handleBoxClick = (boxIdx) => {
  //   const updatedBoard = board.map((value, idx) => {
  //     if (idx === boxIdx) {
  //       return xPlaying ? "X" : "O";
  //     } else {
  //       return value;
  //     }
  //   });

  //   setBoard(updatedBoard);

  //   const winner = checkWinner(updatedBoard);

  //   if (winner) {
  //     if (winner === "O") {
  //       let { playerTwoScore } = scores;
  //       playerTwoScore += 1;
  //       setScores({ ...scores, playerTwoScore });

  //       const gamesData = JSON.parse(localStorage.getItem("games") || "[]");
  //       const currentPlayer = gamesData.find(
  //         (game) =>
  //           game.playerOne === players.playerOne &&
  //           game.playerTwo === players.playerTwo
  //       );
  //       if (currentPlayer) {
  //         currentPlayer.scores.playerTwoScore = playerTwoScore;
  //         localStorage.setItem("games", JSON.stringify(gamesData));
  //       }
  //     } else {
  //       let { playerOneScore } = scores;
  //       playerOneScore += 1;
  //       setScores({ ...scores, playerOneScore });

  //       const gamesData = JSON.parse(localStorage.getItem("games") || "[]");
  //       const currentPlayer = gamesData.find(
  //         (game) =>
  //           game.playerOne === players.playerOne &&
  //           game.playerTwo === players.playerTwo
  //       );
  //       if (currentPlayer) {
  //         currentPlayer.scores.playerOneScore = playerOneScore;
  //         localStorage.setItem("games", JSON.stringify(gamesData));
  //       }
  //     }
  //   }

  //   setXPlaying(!xPlaying);
  // };

  // const checkWinner = (board) => {
  //   for (let i = 0; i < WIN_CONDITIONS.length; i++) {
  //     const [x, y, z] = WIN_CONDITIONS[i];

  //     if (board[x] && board[x] === board[y] && board[y] === board[z]) {
  //       setGameOver(true);
  //       return board[x];
  //     }
  //   }
  // };

  // const resetBoard = () => {
  //   setGameOver(false);
  //   setBoard(Array(9).fill(null));
  // };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="game/" element={<Game />} />
      </Routes>

     
    </div>
  );
}

export default App;
