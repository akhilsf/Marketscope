/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  margin: auto;
  margin-top: 50px;
  width: 60%;
  justify-content: center;
  align-items: center;
`;

const SearchField = styled.input`
  display: inline-block;
  margin: auto;
  padding: 2px 10px;
  width: 100%;
  height: 50px;
  border-radius: 50px;
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

const Search = () => (
  <SearchContainer>
    <SearchField
      type="text"
      placeholder="Search city..."
    />
    <SearchButton>
      <SearchAlt size="24px" />
    </SearchButton>
  </SearchContainer>
);

export default Search;
