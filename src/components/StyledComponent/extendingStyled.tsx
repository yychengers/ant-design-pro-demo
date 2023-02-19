import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: red;
  font-size: 1em;
  margin: 1em;
  padding: 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const ExtendingStyled = () => {
  return (
    <div>
      <Button>normal button</Button>
      <TomatoButton>Tomato button</TomatoButton>
    </div>
  );
};

export default ExtendingStyled;
