import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header" />
    );
    const thElement = wrapper.find('th');

    expect(thElement).toHaveLength(1);
    expect(thElement.prop('colSpan')).toEqual(2);
    expect(thElement.text()).toEqual('Header');
  });

  it('renders two cells when textSecondCell is present and isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Header 1"
        textSecondCell="Header 2"
      />
    );
    const thElements = wrapper.find('th');

    expect(thElements).toHaveLength(2);
    expect(thElements.at(0).text()).toEqual('Header 1');
    expect(thElements.at(1).text()).toEqual('Header 2');
  });

  it('renders two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="Value 1"
        textSecondCell="Value 2"
      />
    );
    const trElement = wrapper.find('tr');
    const tdElements = wrapper.find('td');

    expect(trElement).toHaveLength(1);
    expect(tdElements).toHaveLength(2);
    expect(tdElements.at(0).text()).toEqual('Value 1');
    expect(tdElements.at(1).text()).toEqual('Value 2');
  });
});