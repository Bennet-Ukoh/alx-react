export default function accessImmutableObject(object, array) {
  let result = object;

  // Traverse the object using the elements of the array (path)
  for (const key of array) {
    // Check if the current key exists in the result object
    if (result.hasOwnProperty(key)) {
      result = result[key];
    } else {
      // If the key is not found, return undefined
      return undefined;
    }
  }

  return result;
}
