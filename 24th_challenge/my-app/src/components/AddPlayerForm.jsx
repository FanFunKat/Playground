import React from 'react';

export function AddPlayerForm() {
  return (
    <form>
      <input
        type="text"
        placeholder="Enter a player's name"
      />
      <input
        type="submit"
        value="Add Player"
      />
    </form>
  );
}