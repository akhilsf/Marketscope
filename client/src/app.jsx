/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Header from './components/Header.jsx';
import Search from './components/Search.jsx';
import Table from './components/Table.jsx';

const TopContainer = styled.div`
  background-image: url(./assets/background.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 625px;
`;

const App = () => {
  console.log('a;lsikdj;flaksd');

  return (
    <>
      <TopContainer>
        <Header />
        <Search />
      </TopContainer>
      <Table />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
