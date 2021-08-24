import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.table`
  margin: auto;
  margin-top: 100px;
  border-collapse: collapse;
  width: 75%;
  font-weight: 400;
  font-size: 12px;
`;

const Row = styled.tr`
  background-color: white;

  &:nth-child(even) {
    background-color: #f2f2f2
  }
`;

const Header = styled.th`
  background-color: #04AA6D;
  text-align: left;
  padding: 8px;
`;

const Entry = styled.td`
  text-align: left;
  padding: 8px;
  color: grey;
`;

const Table = () => (
  <TableContainer>
    <Row>
      <Header>Marketscope Rank</Header>
      <Header>Location</Header>
      <Header>Population Growth</Header>
      <Header>Job Growth</Header>
      <Header>Crime Rate</Header>
      <Header>Useful Links</Header>
    </Row>
    <Row>
      <Entry>1</Entry>
      <Entry>San Francisco</Entry>
      <Entry>1,000%</Entry>
      <Entry>-500%</Entry>
      <Entry>1,000,000%</Entry>
      <Entry>google.com</Entry>
    </Row>
    <Row>
      <Entry>2</Entry>
      <Entry>San Diego</Entry>
      <Entry>500%</Entry>
      <Entry>0%</Entry>
      <Entry>0%</Entry>
      <Entry>google.com</Entry>
    </Row>
  </TableContainer>
);

export default Table;
