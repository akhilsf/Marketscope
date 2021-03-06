import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  top: 0;
  left: 0;
  padding: 30px 50px 30px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, .2);
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
  transition: all .4s;
  cursor: pointer;
  background: rgb(255, 255, 255, .2);

  &:hover {
    background: #4F8172;
  }
`;

const Header = () => {
  const onButtonClick = () => {
    window.scrollTo({
      top: 625,
      behavior: 'smooth',
    });
  };

  return (
    <HeaderContainer>
      <Title>MARKETSCOPE</Title>
      <Saved onClick={onButtonClick}>My Locations</Saved>
    </HeaderContainer>
  );
};

export default Header;
