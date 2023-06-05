import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection', () => {
  it('renders correctly with the children and h2 element', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Check if the component renders an h2 element with the correct title
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual('test title');

    // Check if the component renders a p element with the correct children
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
});