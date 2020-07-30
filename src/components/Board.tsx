import React from 'react';
import Square from './Square';
import BoardStyles from './styles/BoardStyles';

export interface Props {
  player: string;
  winner?: boolean;
  makeMove: (index: number) => void;
}
const Board: React.FC<Props> = ({ player, winner, makeMove }) => {
  return (
    <BoardStyles>
      <Square val={0} player={player} makeMove={makeMove} />
      <Square val={1} player={player} makeMove={makeMove} />
      <Square val={2} player={player} makeMove={makeMove} />
      <Square val={3} player={player} makeMove={makeMove} />
      <Square val={4} player={player} makeMove={makeMove} />
      <Square val={5} player={player} makeMove={makeMove} />
      <Square val={6} player={player} makeMove={makeMove} />
      <Square val={7} player={player} makeMove={makeMove} />
      <Square val={8} player={player} makeMove={makeMove} />
    </BoardStyles>
  );
};

export default Board;
