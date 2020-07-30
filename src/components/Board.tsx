import React from 'react';
import Square from './Square';
import BoardStyles from './styles/BoardStyles';

export interface Props {
  makeMove: (index: number) => void;
}
const Board: React.FC<Props> = ({ makeMove }) => {
  return (
    <BoardStyles>
      <Square index={0} makeMove={makeMove} />
      <Square index={1} makeMove={makeMove} />
      <Square index={2} makeMove={makeMove} />
      <Square index={3} makeMove={makeMove} />
      <Square index={4} makeMove={makeMove} />
      <Square index={5} makeMove={makeMove} />
      <Square index={6} makeMove={makeMove} />
      <Square index={7} makeMove={makeMove} />
      <Square index={8} makeMove={makeMove} />
    </BoardStyles>
  );
};

export default Board;
