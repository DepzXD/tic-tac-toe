import React, { useState, useEffect } from 'react';
import GameStateContext from '../GameStateContext';
import Board from './Board';

const Game: React.FC = () => {
  const [playerX, setPlayerX] = useState<boolean>(false);
  const [currentState, setCurrentState] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState<boolean>(false);

  useEffect(() => {
    const who: boolean = checkWinner(currentState);
    if (who) {
      setWinner(who);
      console.log(`yay!! ${playerX ? 'X' : 'O'} is Winner`);
      resetState();
    }
    setPlayerX(!playerX);
  }, [currentState, setCurrentState]);

  function resetState(): void {
    setPlayerX(true);
    setCurrentState(Array(9).fill(''));
    setWinner(false);
  }
  function MakeMove(index: number): void {
    if (currentState[index] !== '') {
      return;
    }
    const newState: string[] = [...currentState];
    newState[index] = playerX ? 'X' : 'O';
    setCurrentState(newState);
  }

  return (
    <GameStateContext.Provider value={[currentState, setCurrentState]}>
      <Board makeMove={MakeMove} />
    </GameStateContext.Provider>
  );
};
const checkWinner = (currentState: string[]): boolean => {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < rows.length; i++) {
    const [a, b, c] = rows[i];
    if (
      currentState[a] &&
      currentState[a] === currentState[b] &&
      currentState[b] === currentState[c]
    ) {
      return true;
    }
  }

  return false;
};

export default Game;
