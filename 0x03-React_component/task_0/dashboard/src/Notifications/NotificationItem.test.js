import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem value="New course available" />);
  });

  it('renders the correct html based on type and value props', () => {
    const type = 'default';
    const value = 'New course available';
    const wrapper = shallow(<NotificationItem type={type} value={value} />);
    expect(wrapper.find('li').prop('data-notification-type')).toEqual(type);
    expect(wrapper.find('li').text()).toEqual(value);
  });

  it('renders the correct html based on the html prop', () => {
    const htmlProp = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={htmlProp} />);
    expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual(htmlProp);
  });

  /**it('calls the markAsRead function with the right ID argument when clicked', () => {
    const mockMarkAsRead = jest.fn();
    const id = 1;
    const wrapper = shallow(<NotificationItem id={id} markAsRead={mockMarkAsRead} />);
    wrapper.find('li').simulate('click');
    expect(mockMarkAsRead).toHaveBeenCalledWith(id);
  }); **/
})