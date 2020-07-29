import React from 'react';
import Square from './Square';
import BoardStyles from './styles/BoardStyles';

const Board = () => {
  return (
    <BoardStyles>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </BoardStyles>
  );
};

export default Board;
