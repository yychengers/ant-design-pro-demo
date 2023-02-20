import React from 'react';
import styled from 'styled-components';

const Link = ({ className, children }: any) => {
  return <a className={className}>{children}</a>;
};

const StyledLink = styled(Link)`
  color: red;
  font-weight: bold;
`;

const StyleComponents = () => {
  return (
    <div>
      <Link>unstyled, boring link</Link>
      <StyledLink>styled, exciting link</StyledLink>
    </div>
  );
};

export default StyleComponents;
