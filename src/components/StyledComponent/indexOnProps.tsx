import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* 基于props属性配置样式 */
  background: ${(props: { primary?: boolean }) => (props.primary ? 'red' : 'white')};
  color: ${(props: { primary?: boolean }) => (props.primary ? 'white' : 'red')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`;

const IndexOnProps = () => {
  return (
    <div>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </div>
  );
};

export default IndexOnProps;
