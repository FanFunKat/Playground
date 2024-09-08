import { useState } from 'react';
import { Header } from './components/Header';
import { Player } from './components/Player';

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
    setPlayers(prevPlayers => prevPlayers.filter(player => player.id !== id));
  }

  return (
    <div className='grocery-list'>
      <Header
        title='Scoteboard'
        playerTotal={players.length}
      />
      {players.map(player =>
        <Player
          key={player.id}
          id={player.id}
          name={player.name}
          removeplayer={handleRemoveplayer}
          score={player.score}
        />
      )}
    </div>
  )
}