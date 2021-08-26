import React, { useState } from 'react';
import styled from 'styled-components';

const Row = styled.tr`
  height: 50px;
  background-color: white;
  cursor: pointer;
  border-bottom: 1px solid #8E8E90;
`;

const ExtraRows = styled.tr`
  background-color: #E3E3E7;
  transition: height .75s;
`;

const Entry = styled.td`
  text-align: left;
  padding: 8px;
  color: rgb(50, 50, 50);
`;

const ExtraEntry = styled.td`
  text-align: left;
  padding-left: 24px;
  color: rgb(50, 50, 50);
`;

const Table = ({ entry }) => {
  const [selected, setSelected] = useState(false);

  const onRowClick = () => {
    setSelected(!selected);
  };

  return (
    <>
      <Row onClick={onRowClick}>
        <Entry>{entry.county}</Entry>
        <Entry>{entry.popGrowth}</Entry>
        <Entry>{entry.jobGrowth}</Entry>
        <Entry>{entry.householdIncome}</Entry>
        <Entry>{entry.crimeRate}</Entry>
      </Row>
      <ExtraRows style={{
        height: selected ? '40px' : '0',
        fontSize: selected ? '14px' : '0px',
        padding: selected ? '8px' : '0px !important',
      }}
      >
        <ExtraEntry>5 Year Statistic</ExtraEntry>
        <ExtraEntry>--</ExtraEntry>
        <ExtraEntry>--</ExtraEntry>
        <ExtraEntry>--</ExtraEntry>
        <ExtraEntry>--</ExtraEntry>
      </ExtraRows>
      <ExtraRows style={{
        height: selected ? '40px' : '0',
        fontSize: selected ? '14px' : '0px',
        padding: selected ? '8px' : '0px !important',
      }}
      >
        <ExtraEntry>10 Year Statistic</ExtraEntry>
        <ExtraEntry>--</ExtraEntry>
        <ExtraEntry>--</ExtraEntry>
        <ExtraEntry>--</ExtraEntry>
        <ExtraEntry>--</ExtraEntry>
      </ExtraRows>
    </>
  );
};

export default Table;
