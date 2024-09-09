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
  name: PropTypes.string,
  id: PropTypes.number,
  score: PropTypes.number,
  removePlayer: PropTypes.func,
  changeScore: PropTypes.func
};

export default memo(Player, playerPropsAreEqual);