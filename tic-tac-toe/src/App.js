import { useState } from 'react';
import './App.css';
import { Game } from './components/Game';

function App() {
  const [visibleGame, setVisibleGame] = useState(false);
  const [valuePlayer1, setValuePlayer1] = useState("");
  const [valuePlayer2, setValuePlayer2] = useState("");

  const handleSubmit = () => {
    setVisibleGame(true);
  }

  const handleChange = (e) => {
    const eventValue = e.target.value;
    const name = e.target.name;

    if (!isNaN(eventValue)) {
      throw new Error(`${name} field cannot be a number`);
    }

    if (!eventValue) {
      throw new Error(`${name} field cannot be empty`);
    }

    if (name === "player1") {
      setValuePlayer1(eventValue);
    } else {
      setValuePlayer2(eventValue);
    }
  };

  return (
    <div className="App">
      {!visibleGame && (
        <form className="Form" onSubmit={handleSubmit}>
          <label htmlFor="player1">Player 1: </label>
          <input type="text" id="player1" value={valuePlayer1} name="player1" placeholder="Player 1" onChange={handleChange} required />
          <br />
          <label htmlFor="player2">Player 2: </label>
          <input type="text" id="player2" value={valuePlayer2} name="player2" placeholder="Player 2" onChange={handleChange} required />
          <br />
          <button type="submit">Start game</button>
        </form>
      )}
      {visibleGame && <Game player1={valuePlayer1} player2={valuePlayer2} />}
    </div>
  );
}

export default App;