import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const StyledComponent = () => {
  return (
    <Wrapper>
      <Title>hello world</Title>
    </Wrapper>
  );
};

export default StyledComponent;
