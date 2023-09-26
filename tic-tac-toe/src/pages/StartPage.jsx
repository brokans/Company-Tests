import "../App.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../store/GameContext";
import { Link } from "react-router-dom";

function StartPage() {
  const { players, setPlayers } = useContext(GameContext);
  const nameRefOne = useRef();
  const nameRefTwo = useRef();

  const [scores, setScores] = useState({
    playerOneScore: 0,
    playerTwoScore: 0,
  });

  useEffect(() => {
    const gamesData = JSON.parse(localStorage.getItem("games") || "[]");
    const lastGame = gamesData[gamesData.length - 1];
    if (lastGame && lastGame.lastWinner) {
      const firstPlayer =
        lastGame.lastWinner === "X" ? lastGame.playerOne : lastGame.playerTwo;
      setPlayers({
        playerOne: firstPlayer,
        playerTwo:
          firstPlayer === lastGame.playerOne
            ? lastGame.playerTwo
            : lastGame.playerOne,
      });
    }
  }, [setPlayers]);

  function addPlayers() {
    const playerOne = nameRefOne.current.value;
    const playerTwo = nameRefTwo.current.value;

    const gamesData = JSON.parse(localStorage.getItem("games") || "[]");
    const gamesPlayed = gamesData.find(
      (game) =>
        (game.playerOne === playerOne && game.playerTwo === playerTwo) ||
        (game.playerOne === playerTwo && game.playerTwo === playerOne)
    );

    if (gamesPlayed) {
      setPlayers({
        playerOne: gamesPlayed.playerOne,
        playerTwo: gamesPlayed.playerTwo,
      });
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

      setPlayers({
        playerOne,
        playerTwo,
      });
    }
  }

  return (
    <div>
      <div className="start-page">
        <label htmlFor="">Player 1 </label> <br />
        <input ref={nameRefOne} type="text" /> <br /> <br />
        <label htmlFor="">Player 2 </label> <br />
        <input ref={nameRefTwo} type="text" /> <br /> <br />
        <Link scores={scores} setScores={setScores} to={"/game/"}>
          <button onClick={addPlayers}>Start</button>
        </Link>
      </div>
    </div>
  );
}

export default StartPage;
