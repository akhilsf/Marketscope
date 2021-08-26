/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
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
  const [savedLocations, setSavedLocations] = useState([]);
  const [currentDisplay, setCurrentDisplay] = useState();

  const updateDisplay = (info) => {
    setCurrentDisplay(info);
  };

  const updateSavedLocations = () => {
    axios.get('/savedlocations')
      .then((results) => {
        setSavedLocations(results.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    updateSavedLocations();
  }, []);

  return (
    <>
      <TopContainer>
        <Header />
        <Search updateDisplay={updateDisplay} />
        <SummaryDisplay
          currentDisplay={currentDisplay}
          updateSavedLocations={updateSavedLocations}
        />
      </TopContainer>
      <Table savedLocations={savedLocations} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
