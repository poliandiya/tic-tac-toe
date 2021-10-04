import React, { useState } from 'react';
import { calcWinner } from './calcWinner';
import Board from './Board';
import './Game.css';

export const Game = ({ player1, player2 }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xISNext, setXIsNext] = useState(true);
  // const [player1Stats, setPlayer1Stats] = useState(0);
  // const [player2Stats, setPlayer2Stats] = useState(0);

  const winner = calcWinner(board);

  const handleClick = (e) => {
    const boardCopy = [...board];

    if (winner || boardCopy[e]) return;

    boardCopy[e] = xISNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xISNext);
  };

  const whoIsNext = () => {
    if (winner) {
      return "Winner: " + winner;
    } else if (board.every(elem => elem !== null) && !winner) {
      return "Draw!";
    } else {
      return "Next player: " + (xISNext ? "X" : "O");
    }
  };

  return (
    <div className="Game">
      <Board squares={board} onClick={handleClick} />
      <div className="Game__info">
        {/* <div className="Game__stats">
          <p className="stats-player1">{`${player1}: ${player1Stats}`}</p>
          <p className="stats-player2">{`${player2}: ${player2Stats}`}</p>
        </div> */}
        <div className="Win">
          <p>{whoIsNext()}</p>
          <div className="buttons">
            <button type="button" onClick={() => setBoard(Array(9).fill(null))}>
              Play again
            </button>
            <button type="button" onClick={() => window.location.reload()}>
              Reset game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};