import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  top: 0;
  left: 0;
  padding: 30px 50px 30px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 36px;
  letter-spacing: 2px;
`;

const Saved = styled.span`
  margin-right: 30px;
  padding: 10px 20px;
  border-radius: 20px;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    background: rgb(255, 255, 255, .5);
  }
`;

const Header = () => (
  <HeaderContainer>
    <Title>MARKETSCOPE</Title>
    <Saved>Saved Locations</Saved>
  </HeaderContainer>
);

export default Header;
