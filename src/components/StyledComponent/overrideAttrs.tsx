import styled from 'styled-components';

const Input = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '1em',
}))`
  border: 2px solid red;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const PasswordInput = styled(Input).attrs((props) => ({
  type: 'password',
}))`
  border: 2px solid blue;
`;

const OverrideAttrs = () => {
  return (
    <div>
      <Input placeholder="big" size="2em" />
      <br />
      <PasswordInput placeholder="big" size="3em" />
    </div>
  );
};

export default OverrideAttrs;
