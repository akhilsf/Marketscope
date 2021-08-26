/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';
import axios from 'axios';

const SearchContainer = styled.form`
  display: flex;
  position: relative;
  margin: auto;
  margin-top: 50px;
  width: 60%;
  justify-content: center;
  align-items: center;
`;

const SearchCounty = styled.input`
  display: inline-block;
  margin: auto;
  padding: 2px 10px;
  width: 100%;
  height: 50px;
  border-radius: 50px 0 0 50px;
  border: none;
  background: white;
  color: rgb(50, 50, 50);
  font-size: 16px;
  outline: none;
  transition: all 0.4s;
  box-shadow: 0 0 5px grey;

  &:hover {
    box-shadow: 0 0 5px;
  }
`;

const SearchState = styled.input`
  display: inline-block;
  margin: auto;
  padding: 2px 10px;
  width: 100%;
  height: 50px;
  border-radius: 0 50px 50px 0;
  border: none;
  background: white;
  color: rgb(50, 50, 50);
  font-size: 16px;
  outline: none;
  transition: all 0.4s;
  box-shadow: 0 0 5px grey;

  &:hover {
    box-shadow: 0 0 5px;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 5px;
  margin: 2px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  background: #161661;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const Search = ({ updateSummary }) => {
  const handleLookup = (e) => {
    e.preventDefault();
    const searchCounty = document.getElementById('lookupCounty').value;
    const searchState = document.getElementById('lookupState').value;

    axios.get(`/census/${searchCounty}&${searchState}`)
      .then((results) => {
        updateSummary({
          county: `${searchCounty} County, ${searchState}`,
          popGrowth: `Population Growth (YoY): ${(results.data * 100).toFixed(2)}%`,
          jobGrowth: `Job Growth: xx%`,
          householdIncome: `Average Household Income: $xxxx`,
          crimeRate: `Average Crime Rate: xx%`,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SearchContainer onSubmit={handleLookup}>
      <SearchCounty
        type="text"
        placeholder="Search county"
        id="lookupCounty"
        required
      />
      <SearchState
        type="text"
        placeholder="Search state"
        id="lookupState"
        required
      />
      <SearchButton>
        <SearchAlt size="24px" />
      </SearchButton>
    </SearchContainer>
  );
};

export default Search;
