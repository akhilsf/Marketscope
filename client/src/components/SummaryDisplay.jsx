import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles.js';

const config = require('../../../config');

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 75%;
  margin: auto;
  margin-top: 35px;
  height: 350px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, .6);
  transition: all 1s;
`;

const Location = styled.div`
  position: relative;
  padding: 30px;
  padding-bottom: 15px;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 24px;
`;

const Save = styled.span`
  position: relative;
  top: 0;
  right: 0;
  margin-left: 30px;
  padding: 10px 20px;
  border-radius: 20px;
  transition: all .4s;
  cursor: pointer;
  background: rgb(255, 255, 255, .2);

  &:hover {
    background: #4F8172;
  }
`;

const Data = styled.div`
  position: relative;
  padding: 0 30px;
  margin-top: 35px;
  margin-bottom: 30px;
  font-size: 18px;
`;

const Map = styled.div`
  padding-right: 30px;
  height: 90%;
  width: 40%;
`;

const SummaryDisplay = ({ currentDisplay, coordinates, updateSavedLocations }) => {
  const handleSave = () => {
    axios.post('/savedlocations', {
      county: currentDisplay.county,
      popGrowth: currentDisplay.popGrowth,
      jobGrowth: currentDisplay.jobGrowth,
      householdIncome: currentDisplay.householdIncome,
      crimeRate: currentDisplay.crimeRate,
    })
      .then((results) => {
        console.log(results);
      })
      .then(() => {
        updateSavedLocations();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (currentDisplay) {
    return (
      <Container>
        <div>
          <Location>{currentDisplay.county}</Location>
          <Save onClick={handleSave}>Save Location</Save>
          <Data>
            Population Growth:&nbsp;
            {currentDisplay.popGrowth}
          </Data>
          <Data>
            Job Growth:&nbsp;
            {currentDisplay.jobGrowth}
          </Data>
          <Data>
            Income Growth:&nbsp;
            {currentDisplay.householdIncome}
          </Data>
          <Data>
            Crime Rate:&nbsp;
            {currentDisplay.crimeRate}
          </Data>
        </div>
        <Map>
          <GoogleMapReact
            bootstrapURLKeys={{ key: config.apiKey }}
            center={coordinates}
            defaultZoom={12}
            options={{ styles: mapStyles.vintage }}
          />
        </Map>
      </Container>
    );
  }
  return (
    <div style={{
      opacity: '0',
    }}
    />
  );
};

export default SummaryDisplay;
