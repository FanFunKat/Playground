import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function Stopwatch() {
  const [isRuning, setIsRuning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let id;
    if (isRuning) {
      id = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
      return () => clearInterval(id);
    }
  }, [isRuning])

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{elapsedTime}</span>
      <button onClick={() => setIsRuning((prevValue) => !prevValue)}>
        {isRuning ? "Stop" : "Start"}
      </button>
      <button onClick={() => setElapsedTime(0)}>Reset</button>
    </div>
  );
}

Stopwatch.propTypes = {
  elapsedTime: PropTypes.number,
  isRuning: PropTypes.bool,
  setElapsedTime: PropTypes.func,
  setIsRuning: PropTypes.func
};