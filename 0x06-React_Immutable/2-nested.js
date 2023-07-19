import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  // Convert the plain object to an immutable Map object
  const immutableObject = fromJS(object);

  try {
    // Use the getIn method to access the value at the specified path
    const result = immutableObject.getIn(array);

    // Return the value if found
    return result;
  } catch (error) {
    // Handle the error (e.g., path not found)
    console.error('Error accessing path:', error.message);

    // Return undefined or any default value based on your use case
    return undefined;
  }
}
