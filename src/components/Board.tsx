import React from 'react';
import Square from './Square';
import BoardStyles from './styles/BoardStyles';

export interface Props {
  makeMove: (index: number) => void;
  nextPlayer: string;
}
const Board: React.FC<Props> = ({ makeMove, nextPlayer }) => {
  return (
    <BoardStyles>
      <Square index={0} makeMove={makeMove} nextPlayer={nextPlayer} />
      <Square index={1} makeMove={makeMove} nextPlayer={nextPlayer} />
      <Square index={2} makeMove={makeMove} nextPlayer={nextPlayer} />
      <Square index={3} makeMove={makeMove} nextPlayer={nextPlayer} />
      <Square index={4} makeMove={makeMove} nextPlayer={nextPlayer} />
      <Square index={5} makeMove={makeMove} nextPlayer={nextPlayer} />
      <Square index={6} makeMove={makeMove} nextPlayer={nextPlayer} />
      <Square index={7} makeMove={makeMove} nextPlayer={nextPlayer} />
      <Square index={8} makeMove={makeMove} nextPlayer={nextPlayer} />
    </BoardStyles>
  );
};

export default Board;
