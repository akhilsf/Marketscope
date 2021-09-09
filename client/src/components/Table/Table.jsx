import React from 'react';
import styled from 'styled-components';
import TableEntry from './TableEntry';

const TableContainer = styled.table`
  margin: auto;
  border-collapse: collapse;
  width: 75%;
  font-weight: 400;
  font-size: 14px;
`;

const Title = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 75%;
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 10px;
`;

const Row = styled.tr`
  height: 50px;

  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;

const Header = styled.th`
  background-color: #6FB59F;
  text-align: left;
  padding: 8px;
`;

const Table = ({ savedLocations }) => {
  if (savedLocations.length === 0) {
    return (
      <Title>No Saved Locations Yet</Title>
    );
  }
  return (
    <>
      <Title>My Saved Locations</Title>
      <TableContainer>
        <Row>
          <Header>Location</Header>
          <Header>Population Growth</Header>
          <Header>Job Growth</Header>
          <Header>Income Growth</Header>
          {/* <Header>Crime Rate</Header> */}
        </Row>
        {savedLocations.map((entry, key) => (
          <TableEntry entry={entry} key={key} />
        ))}
      </TableContainer>
    </>
  );
};

export default Table;
