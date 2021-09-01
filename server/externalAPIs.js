const axios = require('axios');
const statesData = require('../statesData');
const config = require('../config');
const controllers = require('../database/controllers/Fips');

module.exports = {
  getPop_Income: (fips) => axios.get(`https://apps.bea.gov/api/data?UserID=${config.beaKey}&GeoFIPS=${fips}&TableName=CAINC1&LineCode=All&METHOD=GetData&Datasetname=Regional`),

  getJobs: (fips) => axios.get(`https://apps.bea.gov/api/data?UserID=${config.beaKey}&GeoFIPS=${fips}&TableName=CAEMP25N&LineCode=All&METHOD=GetData&Datasetname=Regional`),

  getCounty: (req, res) => {
    const reqState = req.params.state;
    const stateID = statesData.states[reqState].FIPS;
    let fips;
    let countyID;
    let populationGrowth;
    let incomeGrowth;
    let jobGrowth;

    const getAggregate = () => {
      module.exports.getPop_Income(fips)
        .then((results) => {
          const dataSet = results.data.BEAAPI.Results.Data;
          incomeGrowth = (Number(dataSet[4].DataValue.replace(/,/g, '')) / Number(dataSet[3].DataValue.replace(/,/g, '')) - 1);
          populationGrowth = (Number(dataSet[dataSet.length - 1].DataValue.replace(/,/g, '')) / Number(dataSet[dataSet.length - 2].DataValue.replace(/,/g, '')) - 1);
        })
        .then(() => {
          module.exports.getJobs(fips)
            .then((results) => {
              const dataSet = results.data.BEAAPI.Results.Data;
              jobGrowth = (Number(dataSet[4].DataValue.replace(/,/g, '')) / Number(dataSet[3].DataValue.replace(/,/g, '')) - 1);
              res.status(200).send({ populationGrowth, incomeGrowth, jobGrowth });
            });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send(error);
        });
    };

    // caching system that I made using a mongoDB database
    controllers.get(`${req.params.county} County, ${reqState}`)
      .then((code) => {
        if (!code) {
          axios.get(`https://api.census.gov/data/2019/pep/population/?get=NAME&for=county:*&in=state:${stateID}&key=${config.censusKey}`)
            .then((results) => {
              results.data.forEach((entry) => {
                controllers.add({
                  county: entry[0],
                  fips: entry[2],
                });
                if (entry[0].includes(req.params.county)) {
                // eslint-disable-next-line prefer-destructuring
                  countyID = entry[2];
                  fips = `${stateID}${countyID}`;
                  getAggregate();
                }
              });
            })
            .catch((error) => console.log(error));
        } else {
          countyID = code.fips;
          fips = `${stateID}${code.fips}`;
          getAggregate();
        }
      });
  },
};
