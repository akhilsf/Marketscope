const axios = require('axios');
const statesData = require('../statesData');
const config = require('../config');

module.exports = {
  getCounty: (req, res) => {
    const reqState = req.params.state;
    const stateID = statesData.states[reqState].FIPS;
    let countyID;
    let output;

    axios.get(`https://api.census.gov/data/2019/pep/population/?get=NAME&for=county:*&in=state:${stateID}&key=${config.censusKey}`)
      .then((results) => {
        results.data.forEach((entry) => {
          if (entry[0].includes(req.params.county)) {
            // eslint-disable-next-line prefer-destructuring
            countyID = entry[2];
          }
        });
      })
      .then(() => {
        axios.get(`https://api.census.gov/data/2019/pep/population/?get=POP&for=county:${countyID}&in=state:${stateID}&key=${config.censusKey}`)
          .then((results) => {
            // eslint-disable-next-line prefer-destructuring
            output = results.data[1][0];
          })
          .then(() => {
            axios.get(`https://api.census.gov/data/2018/pep/population/?get=POP&for=county:${countyID}&in=state:${stateID}&key=${config.censusKey}`)
              .then((results) => {
                output = ((output / results.data[1][0]) - 1).toFixed(4);
                res.status(200).send(output);
              });
          });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
};