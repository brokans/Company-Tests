import "./App.css";
import React, { useRef, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Board } from "./components/Board";
import { ResetButton } from "./components/ResetButton";
import { ScoreBoard } from "./components/ScoreBoard";
import { GameContext } from "./store/GameContext";

// 1.Inital leht, kus saab sisestada mängijate nimesid ja nupp millega saab mängu alustada
// 2. Tee mängulaud lihtsa css'ga (x-punane, O-sinine)
// 3. salvesta praegune positsioon local state, kasutades useState'i
// 4. Salvesta kõikide mängude ajalugu kasutades global state useContext()'i
// 5. Kasutades React Router't tee navigatsioon mängulaualt punktitabelile ja tagasi.
// 6. Uut mängu mängides, puhasta ajalugu. Kui samad mängijad on varem mänginud, defineeri eelmine mängija Player1'ks
// tavana alustab järgmist mängu X.
// 7. Tee readme.md fail juhendiga app'i käivitamiseks.

function App() {
  const { index } = useParams();
  const { players, setPlayers } = useContext(GameContext);
  const nameRefOne = useRef();
  const nameRefTwo = useRef();

  const [xPlaying, setXPlaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({
    playerOneScore: 0,
    playerTwoScore: 0,
  });
  const [gameOver, setGameOver] = useState(false);

  function addPlayers() {
    const playerOne = nameRefOne.current.value;
    const playerTwo = nameRefTwo.current.value;

    const gamesData = JSON.parse(localStorage.getItem("games") || "[]");
    const gamesPlayed = gamesData.find(
      (game) => game.playerOne === playerOne && game.playerTwo === playerTwo
    );

    if (gamesPlayed) {
      setPlayers(gamesPlayed);
      setScores(gamesPlayed.scores);
    } else {
      const newGame = {
        playerOne,
        playerTwo,
        scores: { playerOneScore: 0, playerTwoScore: 0 },
      };
      gamesData.push(newGame);

      localStorage.setItem("games", JSON.stringify(gamesData));

      setScores({
        playerOneScore: 0,
        playerTwoScore: 0,
      });

      setPlayers(newGame);
    }
  }

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
      if (winner === "O") {
        let { playerTwoScore } = scores;
        playerTwoScore += 1;
        setScores({ ...scores, playerTwoScore });

        const gamesData = JSON.parse(localStorage.getItem("games") || "[]");
        const currentPlayer = gamesData.find(
          (game) =>
            game.playerOne === players.playerOne &&
            game.playerTwo === players.playerTwo
        );
        if (currentPlayer) {
          currentPlayer.scores.playerTwoScore = playerTwoScore;
          localStorage.setItem("games", JSON.stringify(gamesData));
        }
      } else {
        let { playerOneScore } = scores;
        playerOneScore += 1;
        setScores({ ...scores, playerOneScore });

        const gamesData = JSON.parse(localStorage.getItem("games") || "[]");
        const currentPlayer = gamesData.find(
          (game) =>
            game.playerOne === players.playerOne &&
            game.playerTwo === players.playerTwo
        );
        if (currentPlayer) {
          currentPlayer.scores.playerOneScore = playerOneScore;
          localStorage.setItem("games", JSON.stringify(gamesData));
        }
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
    <div className="App">
      <div className="start-page">
        <label htmlFor="">Player 1 </label> <br />
        <input ref={nameRefOne} type="text" /> <br /> <br />
        <label htmlFor="">Player 2 </label> <br />
        <input ref={nameRefTwo} type="text" /> <br />
        <Link to={"/game/" + index}>
          <button onClick={addPlayers}>Start</button>
        </Link>
      </div>
      <div>
        <div>
          <ScoreBoard scores={scores} xPlaying={xPlaying} />
          <Board
            board={board}
            onClick={gameOver ? resetBoard : handleBoxClick}
          />
          <ResetButton resetBoard={resetBoard} />
        </div>
      </div>
    </div>
  );
}

export default App;
