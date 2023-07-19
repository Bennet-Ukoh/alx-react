import { fromJS } from 'immutable';

// Create the initial Immutable Map
export const map = fromJS({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Create map2 by modifying the values of map
export const map2 = map.withMutations((mutableMap) => {
  mutableMap.setIn(['2'], 'Benjamin'); // Modifying the value at index 2 to 'Benjamin'
  mutableMap.setIn(['4'], 'Oliver');   // Modifying the value at index 4 to 'Oliver'
});
