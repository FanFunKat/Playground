import React, { useState } from 'react';

export function Stopwatch() {
  const [isRuning, setIsRuning] = useState(false);

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">0</span>
      <button onClick={() => setIsRuning((prevValue) => !prevValue)}>
        {isRuning ? "Stop" : "Start"}
      </button>
      <button>Reset</button>
    </div>
  );
}