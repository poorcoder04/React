import { useState } from 'react';

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <div>
      {isPlayerA ? (
        <Counter person="Taylor" key="Taylor"/>
      ) : (
        <Counter person="Sarah" key="Sarah"/>
      )}
      <button onClick={() => setIsPlayerA(!isPlayerA)}>
        Next player
      </button>
    </div>
  );
}

function Counter({ person }) {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h1>{person}'s score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>Increment</button>
    </div>
  );
}