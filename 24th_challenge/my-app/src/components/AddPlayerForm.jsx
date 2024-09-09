import React, { useRef } from 'react';

export function AddPlayerForm({ addPlayer }) {
  // const [value, setValue] = useState("");
  const playerInput = useRef();

  const handlerSubmit = event => {
    event.preventDefault();
    addPlayer(playerInput.current.value);
    // setValue("");
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={event => handlerSubmit(event)}>
      <input
        type="text"
        ref={playerInput}
        // value={value}
        placeholder="Enter a player's name"
      // onChange={event => setValue(event.target.value)}
      />
      <input
        type="submit"
        value="Add Player"
      />
    </form>
  );
}