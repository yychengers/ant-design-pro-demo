import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props: { inputColor?: string }) => props.inputColor || 'blud'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const PassProps = () => {
  return (
    <div>
      <Input defaultValue="some txt" type="text"></Input>
      <Input defaultValue="other txt" type="text" inputColor="purple"></Input>
    </div>
  );
};

export default PassProps;
