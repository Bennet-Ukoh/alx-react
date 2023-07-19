// Import the 'fromJS' function from Immutable.js
import { fromJS } from 'immutable';

// Define the function 'getImmutableObject'
const getImmutableObject = (object) => {
  // Convert the input object into an immutable Map using 'fromJS'
  const immutableMap = fromJS(object);
  return immutableMap;
};

// Export the function to make it accessible from other files
export default getImmutableObject;
