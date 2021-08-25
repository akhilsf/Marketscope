import React from 'react';
import styled from 'styled-components';
import TableEntry from './TableEntry';

const TableContainer = styled.table`
  margin: auto;
  border-collapse: collapse;
  width: 75%;
  font-weight: 400;
  font-size: 16px;
`;

const Title = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 75%;
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 10px
`;

const Row = styled.tr`
  background-color: white;

  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;

const Header = styled.th`
  background-color: #04AA6D;
  text-align: left;
  padding: 8px;
`;

const Table = ({ summaryData }) => (
  <>
    <Title>Trending cities</Title>
    <TableContainer>
      <Row>
        <Header>Marketscope Rank</Header>
        <Header>Location</Header>
        <Header>Average House Value</Header>
        <Header>Population Growth</Header>
        <Header>Job Growth</Header>
        <Header>Crime Rate</Header>
        <Header>Useful Links</Header>
      </Row>
      {summaryData.map((entry, key) => <TableEntry entry={entry} key={key} />)}
    </TableContainer>
  </>
);

export default Table;
