import React, { useContext } from 'react';
import SquareStyle from './styles/SquareStyle';
import GameStateContext from '../GameStateContext';
import { Props } from './Board';

interface Square extends Props {
  index: number;
}

const Square: React.FC<Square> = ({ index, makeMove }) => {
  const [currentState] = useContext(GameStateContext);
  return (
    <SquareStyle current={currentState[index]} onClick={() => makeMove(index)}>
      <div>{}</div>
    </SquareStyle>
  );
};

export default Square;
