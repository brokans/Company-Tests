import "../App.css";
import React, { useContext, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GameContext } from "../store/GameContext";
import { Link } from 'react-router-dom';


function StartPage() {
    const { index } = useParams();
  const { players, setPlayers } = useContext(GameContext);
  const nameRefOne = useRef();
  const nameRefTwo = useRef();
    
  const [scores, setScores] = useState({
    playerOneScore: 0,
    playerTwoScore: 0,
  });

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
  

  return (
    <div>
         <div className="start-page">
        <label htmlFor="">Player 1 </label> <br />
        <input ref={nameRefOne} type="text" /> <br /> <br />
        <label htmlFor="">Player 2 </label> <br />
        <input ref={nameRefTwo} type="text" /> <br />
        <Link 
            scores={scores} 
            setScores={setScores} 
            to={"/game/"}
            >
          <button onClick={addPlayers}>Start</button>
        </Link>
      </div>
    </div>
  )
}

export default StartPage