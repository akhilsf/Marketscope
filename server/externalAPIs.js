const axios = require('axios');
const sorter = require('./helper');

const populationRetrieval = (req, res) => {
  const { latestYear } = req.query;
  const { priorYear } = req.query;

  const output = {
    comparison: undefined,
    latestYearData: undefined,
    priorYearData: undefined,
  };

  const latestYearGet = axios.get(`https://api.census.gov/data/${latestYear}/pep/population/?get=POP&for=place:*`)
    .then((results) => {
      output.latestYearData = results.data;
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Error retrieving latest year data');
    });

  const priorYearGet = axios.get(`https://api.census.gov/data/${priorYear}/pep/population/?get=POP&for=place:*`)
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
};

module.exports = {
  populationRetrieval,
};
