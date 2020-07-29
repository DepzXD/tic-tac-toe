import styled, { css } from 'styled-components';

const SquareStyle = styled.div<{ current: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 4px solid #092532;
  border-radius: 7%;
  cursor: pointer;

  ${(props) =>
    props.current === 'X' &&
    css`
      &:before,
      &:after {
        position: absolute;
        content: '';
        width: 10px;
        height: 80px;
        background: #24a19c;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    `}

  ${(props) =>
    props.current === 'O' &&
    css`
      &:before,
      &:after {
        position: absolute;
        content: '';
        border-radius: 50%;
      }
      &:before {
        width: 80px;
        height: 80px;
        background: #393e46;
      }
      &:after {
        width: 60px;
        height: 60px;
        background: #b7efcd;
      }
    `}

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
`;

export default SquareStyle;
