import React from 'react';
import styled from 'styled-components';

const Row = styled.tr`
  background-color: white;

  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;

const Entry = styled.td`
  text-align: left;
  padding: 8px;
  color: rgb(50, 50, 50);
`;

const Table = ({ entry, key }) => {
  console.log(key);

  return (
    <>
      <Row>
        <Entry>{entry}</Entry>
        <Entry>--</Entry>
        <Entry>--</Entry>
        <Entry>--</Entry>
        <Entry>--</Entry>
        <Entry>--</Entry>
        <Entry>--</Entry>
      </Row>
    </>
  );
};

export default Table;
