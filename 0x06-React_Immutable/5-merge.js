import { List, Map } from 'immutable';

// Function to concatenate elements from two arrays
export function concatElements(page1, page2) {
  // Convert the arrays to Lists
  const list1 = List(page1);
  const list2 = List(page2);

  // Concatenate the two Lists
  const concatenatedList = list1.concat(list2);

  return concatenatedList;
}

// Function to merge elements from two objects
export function mergeElements(page1, page2) {
  // Convert the objects to Maps
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Merge the two Maps, with page2 values taking precedence
  const mergedMap = map1.merge(map2);

  // Convert the merged Map values to a List
  const mergedList = mergedMap.toList();

  return mergedList;
}
