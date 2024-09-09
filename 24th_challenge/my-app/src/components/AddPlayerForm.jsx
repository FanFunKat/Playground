import React, { useState } from 'react';

export function AddPlayerForm(props) {
  const [value, setValue] = useState("");

  const handlerSubmit = event => {
    event.preventDefault();
    props.addPlayer(value);
    setValue("");
  };

  return (
    <form onSubmit={event => handlerSubmit(event)}>
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