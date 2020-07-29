import React from 'react';
import SquareStyle from './styles/SquareStyle';
// import { Props } from './Board';

const Square: React.FC<{ val: number; currentState: any[] }> = ({
  val,
  currentState,
}) => {
  return (
    <SquareStyle current={currentState[val]}>
      <div>{}</div>
    </SquareStyle>
  );
};

export default Square;
