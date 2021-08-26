import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 75%;
  margin: auto;
  margin-top: 35px;
  border-radius: 20px;
  height: 350px;
  background-color: rgba(0, 0, 0, .5);
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
    background: #161661;
  }
`;

const Data = styled.div`
  position: relative;
  padding: 0 30px;
  margin-top: 35px;
  margin-bottom: 30px;
  font-size: 18px;
`;

const SummaryDisplay = ({ summaryInfo }) => {
  if (summaryInfo) {
    return (
      <Box>
        <Location>{summaryInfo.county}</Location>
        <Save>Save Location</Save>
        <Data>{summaryInfo.popGrowth}</Data>
        <Data>{summaryInfo.jobGrowth}</Data>
        <Data>{summaryInfo.householdIncome}</Data>
        <Data>{summaryInfo.crimeRate}</Data>
      </Box>
    );
  }
  return (
    <Box style={{
      opacity: '0',
    }}
    />
  );
};

export default SummaryDisplay;