import React, { useState } from 'react';
import GameStateContext from '../GameStateContext';
import Board from './Board';

const Game: React.FC = () => {
  const [player, setPlayer] = useState<string>('X');
  const [currentState, setCurrentState] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState<boolean>(false);

  function resetState(): void {
    setPlayer('X');
    setCurrentState(Array(9).fill(''));
    setWinner(false);
  }
  function MakeMove(index: number): void {
    if (currentState[index] !== '') {
      return;
    }
    const newState: string[] = [...currentState];
    newState[index] = player;
    setCurrentState(newState);
    setPlayer(player === 'X' ? 'O' : 'X');
  }
  return (
    <GameStateContext.Provider value={[currentState, setCurrentState]}>
      <Board player={player} winner={winner} makeMove={MakeMove} />
    </GameStateContext.Provider>
  );
};

export default Game;
