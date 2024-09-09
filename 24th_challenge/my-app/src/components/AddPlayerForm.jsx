import React, { useState } from 'react';

export function AddPlayerForm() {
  const [value, setValue] = useState("");

  return (
    <form>
      <input
        type="text"
        value={value}
        placeholder="Enter a player's name"
        onChange={event => setValue(event.target.value)}
      />
      <input
        type="submit"
        value="Add Player"
      />
    </form>
  );
}