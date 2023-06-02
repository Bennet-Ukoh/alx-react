import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications.js';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  it('renders NotificationItem components', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the correct html in the first NotificationItem', () => {
    const wrapper = shallow(<Notifications />);
    const firstNotificationItem = wrapper.find(NotificationItem).first();
    const htmlProp = firstNotificationItem.prop('html');

    expect(htmlProp && htmlProp.__html).toEqual('New course available');
  });
});
