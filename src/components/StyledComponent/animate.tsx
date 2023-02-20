import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2em;
  font-size: 16px;
`;

const Animate = () => {
  return <Rotate>&lt; 💅🏾 &gt;</Rotate>;
};

export default Animate;
