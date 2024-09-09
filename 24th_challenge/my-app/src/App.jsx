import React, { useState, useRef } from 'react';

import { Header } from './components/Header';
import Player from './components/Player';
import { AddPlayerForm } from './components/AddPlayerForm';

export function App() {
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      score: 0,
      id: 1
    },
    {
      name: "Treasure",
      score: 0,
      id: 2
    },
    {
      name: "Ashley",
      score: 0,
      id: 3
    },
    {
      name: "James",
      score: 0,
      id: 4
    }
  ]);

  // const [nextPlayerId, settNextPlayerId] = useState(5);

  const nextPlayerId = useRef(5);


  const handleRemovePlayer = (id) => {
    setPlayers(players.filter(player => player.id !== id));
  }

  const handleScoreChange = (id, delta) => {
    setPlayers(prevPlayers => prevPlayers.map(player => {
      if (player.id === id) {
        return {
          ...player,
          score: player.score + delta
        }
      }
      return player;
    }));
  }

  const handleAddPlayer = (name) => {
    setPlayers(prevPlayers => [
      ...prevPlayers,
      {
        name,
        score: 0,
        id: nextPlayerId.current++
      }
    ]);
    // settNextPlayerId(prevId => prevId + 1);
  }

  return (
    <div className='scoreboard'>
      <Header
        title='Scoteboard'
        players={players}
      />
      {players.map(player =>
        <Player
          key={player.id}
          id={player.id}
          name={player.name}
          score={player.score}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
        />
      )}
      <AddPlayerForm addPlayer={handleAddPlayer} />
    </div>
  )
}