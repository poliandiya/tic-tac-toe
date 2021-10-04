import React, { useState } from 'react';
import { calcWinner } from '../calcWinner';
import Board from '../Board/Board';
import './Game.css';

export const Game = ({ player1, player2 }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState("X");
  const [xIsNext, setXIsNext] = useState(true);
  const [player1Stats, setPlayer1Stats] = useState(0);
  const [player2Stats, setPlayer2Stats] = useState(0);

  const winner = calcWinner(board);

  const handleClick = (e) => {
    const boardCopy = [...board];

    if (winner || boardCopy[e]) return;

    boardCopy[e] = xIsNext ? "X" : "O";

    if (xIsNext) {
      setIsNext("O");
    } else {
      setIsNext("X");
    }

    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const reset = () => {
    if (winner) {
      if (winner === "X") {
        setPlayer1Stats(player1Stats + 1);
        setIsNext("X");
        setXIsNext(true);
      } else {
        setPlayer2Stats(player2Stats + 1);
        setIsNext("O");
        setXIsNext(!xIsNext);
      }
    }

    setBoard(Array(9).fill(null));
  };

  const whoIsNext = () => {
    if (winner) {
      return ("Winner: " + winner);
    } else if (board.every(elem => elem !== null) && !winner) {
      return "Draw!";
    } else {
      return "Next player: " + isNext;
    }
  };

  const score = () => {
    if (player1Stats === 0 && player2Stats === 0) {
      return "Start the game";
    } else if (player1Stats > player2Stats) {
      return `${player1} is winning!`;
    } else if (player1Stats < player2Stats) {
      return `${player2} is winning!`;
    } else if (player1Stats === player2Stats) {
      return `It's a DRAW ... for now`;
    }
  };

  return (
    <div className="Game">
      <Board squares={board} onClick={handleClick} />
      <div className="Game__info">
        <h3>{score()}</h3>
        <div className="Game__stats">
          <p className="stats-player1">{`${player1}: ${player1Stats}`}</p>
          <p className="stats-player2">{`${player2}: ${player2Stats}`}</p>
        </div>
        <div className="Win">
          <p>{whoIsNext()}</p>
          <div className="buttons">
            <button type="button" onClick={reset}>
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
