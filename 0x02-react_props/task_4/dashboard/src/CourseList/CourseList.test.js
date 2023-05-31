import React from "react";
import CourseList from './CourseList';
import { shallow } from "enzyme";

describe('CourseList', () => {
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  }) 
  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find('CourseListRow');
    expect(rows).toHaveLength(5);
  })
})