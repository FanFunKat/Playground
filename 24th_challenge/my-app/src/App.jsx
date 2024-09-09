import React, { useState } from 'react';

import { Header } from './components/Header';
import { Player } from './components/Player';
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

  const handleRemoveplayer = (id) => {
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
          removeplayer={handleRemoveplayer}
          changeScore={handleScoreChange}
        />
      )}
      <AddPlayerForm />
    </div>
  )
}