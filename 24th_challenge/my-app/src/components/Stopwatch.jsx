import React, { useState, useEffect } from 'react';

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