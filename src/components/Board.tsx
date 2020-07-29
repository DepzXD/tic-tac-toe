import React from 'react';
import Square from './Square';
import BoardStyles from './styles/BoardStyles';

export interface Props {
  player: boolean;
  currentState: any[];
  winner: boolean;
}
const Board: React.FC<Props> = ({ player, currentState, winner }) => {
  return (
    <BoardStyles>
      <Square val={0} currentState={currentState} />
      <Square val={1} currentState={currentState} />
      <Square val={2} currentState={currentState} />
      <Square val={3} currentState={currentState} />
      <Square val={4} currentState={currentState} />
      <Square val={5} currentState={currentState} />
      <Square val={6} currentState={currentState} />
      <Square val={7} currentState={currentState} />
      <Square val={8} currentState={currentState} />
    </BoardStyles>
  );
};

export default Board;
