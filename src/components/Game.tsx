import React, { useState } from 'react';
import Board from './Board';

const Game: React.FC = () => {
  const [player, setPlayer] = useState<boolean>(true);
  const [currentState, setCurrentState] = useState<any>([
    '',
    '',
    '',
    '',
    'X',
    'O',
    '',
    '',
    '',
  ]);
  const [winner, setWinner] = useState<boolean>(false);

  function resetState() {
    setPlayer(true);
    setCurrentState(Array(9).fill(null));
    setWinner(false);
  }
  return (
    <div>
      <Board player={player} currentState={currentState} winner={winner} />
    </div>
  );
};

export default Game;
