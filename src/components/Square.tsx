import React, { useContext } from 'react';
import SquareStyle from './styles/SquareStyle';
import GameStateContext from '../GameStateContext';
import { Props } from './Board';

interface Square extends Props {
  val: number;
}

const Square: React.FC<Square> = ({ val, player, makeMove }) => {
  const [currentState, setCurrentState] = useContext(GameStateContext);
  // const makeMove = () => {
  //   let temp = currentState;
  //   temp[val] = player;
  //   setCurrentState(temp);
  //   console.log(currentState);
  // };

  return (
    <SquareStyle current={currentState[val]} onClick={() => makeMove(val)}>
      <div>{}</div>
    </SquareStyle>
  );
};

export default Square;
