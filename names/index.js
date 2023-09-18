const namesList = require("../country/state/city/index.js");
const firstNamesList = require("../utilities/utils/index.js");

const getPeopleInCity = (namesList) => {
  return firstNamesList(namesList);
};

module.exports = getPeopleInCity;
