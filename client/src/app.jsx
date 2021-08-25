/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
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
  const [populationData, setPopulationData] = useState();

  useEffect(() => {
    axios.get('/census', {
      params: {
        latestYear: 2019,
        priorYear: 2018,
      },
    })
      .then((results) => {
        setPopulationData({
          comparison: results.data.comparison,
          latestYearData: results.data.latestYearData,
          priorYearData: results.data.priorYearData,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <TopContainer>
        <Header />
        <Search />
      </TopContainer>
      <Table populationData={populationData} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
