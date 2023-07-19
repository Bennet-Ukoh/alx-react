import { Map, is } from 'immutable';

// Function to check if two Immutable Maps are equal
export function areMapsEqual(map1, map2) {
  // Use the `is` method to check if the Maps are equal
  return is(map1, map2);
}
