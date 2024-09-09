import React, { memo } from "react";
import PropTypes from 'prop-types';
import { Counter } from "./Counter"

function Player({ name, id, score, removePlayer, changeScore }) {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>

        {name}
      </span>

      <Counter
        score={score}
        id={id}
        changeScore={changeScore}
      />
    </div>
  );
}

const playerPropsAreEqual = (prevProps, nextProps) => {
  return prevProps.score === nextProps.score && prevProps.name === nextProps.name;
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  removePlayer: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired
};

export default memo(Player, playerPropsAreEqual);