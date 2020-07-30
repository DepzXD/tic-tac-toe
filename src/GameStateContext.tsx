import { createContext } from 'react';

const GameStateContext = createContext<
  [string[], (currentState: string[]) => void]
>([['', '', '', '', '', '', '', '', ''], () => {}]);

export default GameStateContext;
