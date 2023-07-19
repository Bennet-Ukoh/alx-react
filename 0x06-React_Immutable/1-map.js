// Import the 'Map' class from Immutable.js
import { Map } from 'immutable';

// Define the function 'getImmutableObject'
const getImmutableObject = (object) => {
  // Create a new Map instance and set its values using the input object
  const immutableMap = Map(object);
  return immutableMap;
};

// Export the function to make it accessible from other files
export default getImmutableObject;
