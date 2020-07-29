import styled from 'styled-components';

const SquareStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 4px solid black;
  cursor: pointer;

  &:first-child,
  &:nth-child(2),
  &:nth-child(3) {
    border-top: none;
  }

  &:last-child,
  &:nth-child(8),
  &:nth-child(7) {
    border-bottom: none;
  }

  &:nth-child(3n + 1) {
    border-left: none;
  }

  &:nth-child(3n + 3) {
    border-right: none;
  }

  &.x:before,
  &.x:after {
    position: absolute;
    content: '';
    width: 10px;
    height: 80px;

    background: #000;
  }
  &.x:before {
    transform: rotate(45deg);
  }
  &.x:after {
    transform: rotate(-45deg);
  }

  &.o:before,
  &.o:after {
    position: absolute;
    content: '';
    border-radius: 50%;
  }
  &.o:before {
    width: 90px;
    height: 90px;
    background: #000;
  }
  &.o:after {
    width: 70px;
    height: 70px;
    background: #fff;
  }
`;

export default SquareStyle;
