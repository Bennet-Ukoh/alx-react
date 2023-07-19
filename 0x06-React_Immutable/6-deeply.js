import { Map, List } from 'immutable';

// Function to merge deeply nested objects
export function mergeDeeplyElements(page1, page2) {
  // Convert the objects to Immutable Maps
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Merge the two Maps deeply, with page2 values taking precedence and combining duplicate values
  const mergedMap = map1.mergeDeep(map2);

  // Convert the merged Map values to an Immutable List
  const mergedList = mergedMap.toList();

  return mergedList;
}
