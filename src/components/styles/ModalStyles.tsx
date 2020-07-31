import styled from 'styled-components';

const ModalStyles = styled.div`
  position: absolute;
  display: flex;
  width: 200vh;
  height: 100vh;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  background: rgba(0, 15, 26, 0.15);
  z-index: 100;
  div {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.45);
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    padding: 3rem;
    background: #fff;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 4rem;
      line-height: 1.2;
      color: #092532;
      margin: 0;
      margin-bottom: 2rem;
    }
    h2 {
      margin: 0;
    }
    button {
      color: #092532;
      background: none;
      border-radius: 10px;
      border: 4px solid #092532;
      width: 50%;
      padding: 0.6rem;
      font-size: 2rem;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
export default ModalStyles;
