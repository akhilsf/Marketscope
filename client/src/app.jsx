/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Search from './components/Search.jsx';
import Table from './components/Table.jsx';

const App = () => {
  console.log('Connected');

  return (
    <>
      <Header />
      <Search />
      <Table />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
