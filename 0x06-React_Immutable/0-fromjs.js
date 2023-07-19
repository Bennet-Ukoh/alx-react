// Import the Immutable.js library
const { fromJS } = require('immutable');

// Define the getImmutableObject function
export const getImmutableObject = (object) => {
  // Convert the JavaScript object to an Immutable Map
  return fromJS(object);
};
