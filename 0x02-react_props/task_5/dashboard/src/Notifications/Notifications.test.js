import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('renders correctly based on listNotifications and displayDrawer props', () => {
    // Test 1: Renders without crashing
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);

    // Test 2: Displays "No new notification for now" when listNotifications is empty
    wrapper.setProps({ displayDrawer: true, listNotifications: [] });
    expect(wrapper.find('.Notifications').text()).toContain('No new notification for now');

    // Test 3: Renders the list of notifications when listNotifications is not empty
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    wrapper.setProps({ displayDrawer: true, listNotifications });
    const notificationItems = wrapper.find('NotificationItem');

    expect(notificationItems).toHaveLength(listNotifications.length);
    expect(notificationItems.at(0).prop('value')).toEqual('New course available');
    expect(notificationItems.at(1).prop('type')).toEqual('urgent');

    // Test 4: Renders the Notifications div when displayDrawer is true
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find('.Notifications')).toHaveLength(1);

    // Test 5: Renders the correct message when listNotifications is empty
    wrapper.setProps({ displayDrawer: true, listNotifications: [] });
    expect(wrapper.find('.Notifications').text()).toContain('No new notification for now');

   

  });
});