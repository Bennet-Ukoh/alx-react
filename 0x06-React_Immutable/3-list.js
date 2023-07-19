import { List } from 'immutable';

export function getListObject(array: any[]): List<any> {
  // Convert the plain array to an immutable List
  const immutableList: List<any> = List(array);
  return immutableList;
}

export function addElementToList(list: List<any>, element: string): List<any> {
  // Append the string element to the List
  const updatedList: List<any> = list.push(element);
  return updatedList;
}
