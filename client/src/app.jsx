/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
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

  // useEffect(() => {
  //   axios.get('/census', {
  //     params: {
  //       latestYear: 2019,
  //       priorYear: 2018,
  //     },
  //   })
  //     .then((results) => {
  //       setPopulationData({
  //         comparison: results.data.comparison,
  //         latestYearData: results.data.latestYearData,
  //         priorYearData: results.data.priorYearData,
  //       });
  //       console.log(results.data);
  //       setSummaryData(results.data.comparison.slice(1, 11));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    setSummaryData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }, []);

  return (
    <>
      <TopContainer>
        <Header />
        <Search />
      </TopContainer>
      <Table summaryData={summaryData} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
