const axios = require('axios');
const sorter = require('./helper');
const data = require('../data');

const censusKey = 'e355f4c0edc95d9f2129587c4fef064bdd87794c';

module.exports = {
  getCounty: (req, res) => {
    const reqCounty = req.params.county;
    const reqState = req.params.state
    const stateID = data.states[reqParam].FIPS;

    console.log(req.params);

    let output;
    let done = false;

    const latestYearGet = axios.get(`https://api.census.gov/data/2019/pep/population/?get=POP&for=county:${stateID}&key=${censusKey}`)
      .then((results) => {
        output = results.data[1][0];
        console.log(output);
      })
      .catch((error) => {
        res.status(500).send(error);
      });

    const priorYearGet = axios.get(`https://api.census.gov/data/2018/pep/population/?get=POP&for=state:${stateID}&key=${censusKey}`)
      .then((results) => {
        output = ((output / results.data[1][0]) - 1).toFixed(4);
        done = true;
      })
      .catch((error) => {
        res.status(500).send(error);
      });

    Promise.all([latestYearGet, priorYearGet])
      .then(() => {
        if (done) {
          res.status(200).send(output);
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send(error);
      });
  },

  getAll: (req, res) => {
    const { latestYear } = req.query;
    const { priorYear } = req.query;

    const output = {
      comparison: undefined,
      latestYearData: undefined,
      priorYearData: undefined,
    };

    const latestYearGet = axios.get(`https://api.census.gov/data/${latestYear}/pep/population/?get=NAME,POP&for=state:*&key=${key}`)
      .then((results) => {
        output.latestYearData = results.data;
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send('Error retrieving latest year data');
      });

    const priorYearGet = axios.get(`https://api.census.gov/data/${priorYear}/pep/population/?get=NAME,POP&for=state:*`)
      .then((results) => {
        output.priorYearData = results.data;
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send('Error retrieving latest year data');
      });

    Promise.all([latestYearGet, priorYearGet])
      .then(() => {
        if (output.latestYearData && output.priorYearData) {
          output.comparison = sorter(output.latestYearData, output.priorYearData);
          console.log(output.comparison);
          res.status(200).send(output);
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send(error);
      });
  },
};
