import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

const Button = styled.button({
  color: 'red',
});

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const StyledComponent = () => {
  return (
    <Wrapper>
      <Title>hello world</Title>
      <Button>点我呢</Button>
    </Wrapper>
  );
};

export default StyledComponent;
