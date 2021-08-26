/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import SummaryDisplay from './components/SummaryDisplay';
import Table from './components/Table/Table';

const TopContainer = styled.div`
  background-image: url(./assets/background.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 625px;
`;

const App = () => {
  // const [populationData, setPopulationData] = useState();
  const [summaryData, setSummaryData] = useState([]);
  const [currentDisplay, setCurrentDisplay] = useState();

  useEffect(() => {
    setSummaryData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }, []);

  const updateSummary = (info) => {
    setCurrentDisplay(info);
  };

  return (
    <>
      <TopContainer>
        <Header />
        <Search updateSummary={updateSummary} />
        <SummaryDisplay summaryInfo={currentDisplay} />
      </TopContainer>
      <Table summaryData={summaryData} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
