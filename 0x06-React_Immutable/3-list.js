import { List } from 'immutable';

export function getListObject(array) {
  // Convert the plain array to an immutable List
  const immutableList = List(array);
  return immutableList;
}

export function addElementToList(list, element) {
  // Append the string element to the List
  const updatedList = list.push(element);
  return updatedList;
}
