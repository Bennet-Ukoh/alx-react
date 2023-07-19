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
export const map2 = map
  .setIn(['2'], 'Benjamin')
  .setIn(['4'], 'Oliver');

// The map and map2 constants are now Immutable Maps with the desired values
