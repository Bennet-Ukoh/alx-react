import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom', () => {
  it('renders correctly with the BodySection component and props are passed correctly', () => {
    const props = {
      title: 'test title',
      children: <p>test children node</p>
    };

    const wrapper = shallow(<BodySectionWithMarginBottom {...props} />);

    // Check if the component renders the BodySection component
    expect(wrapper.find(BodySection)).toHaveLength(1);

    // Check if the props are passed correctly to the BodySection component
    const bodySectionProps = wrapper.find(BodySection).props();
    expect(bodySectionProps.title).toEqual(props.title);
    expect(bodySectionProps.children).toEqual(props.children);
  });
});