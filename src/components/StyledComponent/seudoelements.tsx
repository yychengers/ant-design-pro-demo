import styled from 'styled-components';

const Thing = styled.div.attrs((props: { tabIndex: string }) => {
  return {
    tabIndex: props.tabIndex || 1,
  };
})`
  color: blue;
  &:hover {
    color: red;
  }
  & ~ & {
    background: tomato;
  }
  & + & {
    background: lime;
  }
  &.something {
    background: orange;
  }
`;

const SeudoElements = () => {
  return (
    <div>
      <Thing tabIndex="2">Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div>
    </div>
  );
};

export default SeudoElements;
