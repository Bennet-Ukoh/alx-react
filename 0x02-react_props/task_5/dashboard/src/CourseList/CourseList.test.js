import React from "react";
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { shallow } from "enzyme";

describe('CourseList', () => {
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(3);
  });

  it('renders correctly when listCourses is empty', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    const table = wrapper.find('#CourseList');
    expect(table.exists()).toBe(true);
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(3);
    expect(rows.at(2).prop('textFirstCell')).toBe('No course available yet');
    expect(rows.at(2).prop('isHeader')).toBe(false);
  });

  it('renders the listCourses correctly', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    const table = wrapper.find('#CourseList');
    expect(table.exists()).toBe(true);
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(listCourses.length + 2);
    expect(rows.at(2).prop('textFirstCell')).toBe('ES6');
    expect(rows.at(2).prop('textSecondCell')).toBe(60);
    expect(rows.at(2).prop('isHeader')).toBe(false);
    expect(rows.at(3).prop('textFirstCell')).toBe('Webpack');
    expect(rows.at(3).prop('textSecondCell')).toBe(20);
    expect(rows.at(3).prop('isHeader')).toBe(false);
    expect(rows.at(4).prop('textFirstCell')).toBe('React');
    expect(rows.at(4).prop('textSecondCell')).toBe(40);
    expect(rows.at(4).prop('isHeader')).toBe(false);
  });
});