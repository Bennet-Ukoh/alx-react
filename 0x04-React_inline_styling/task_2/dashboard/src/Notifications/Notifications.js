import React from 'react';
import imageIcon from '../../assets/close-icon.jpg';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevListLength: props.listNotifications.length,
    };
    this.handleClick = this.handleClick.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  handleClick() {
    console.log('Close button has been clicked');
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    const { listNotifications } = this.props;
    return nextProps.listNotifications.length > listNotifications.length;
  }

  componentDidUpdate(prevProps) {
    const { listNotifications } = this.props;
    if (listNotifications.length > prevProps.listNotifications.length) {
      this.setState({ prevListLength: listNotifications.length });
    }
  }

  styles = StyleSheet.create({
    notifications: {
      padding: '4px',
      border: '1px dashed red',
      float: 'right',
    },
    defaultNotification: {
      color: 'blue',
    },
    notification: {
      color: 'red',
    },
    menuItem: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '10px 0 10px 10px',
    },
  });
  

  render() {
    const { displayDrawer, listNotifications } = this.props;
    const { prevListLength } = this.state;
    const showNotifications = displayDrawer && listNotifications.length > 0;

    return (
      <>
        {showNotifications && (
          <div>
            <div className={css(this.styles.menuItem)}>Your notifications</div>
            <div className={css(this.styles.notifications)}>
              <button
                style={{ float: 'right' }}
                aria-label="Close"
                onClick={this.handleClick}
              >
                <img height="5px" width="5px" src={imageIcon} alt="close" />
              </button>
              <p>Here is the list of notifications</p>
              <ul className={css(this.styles.notification)}>
                {listNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={this.markAsRead}
                    id={notification.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
        {!showNotifications && prevListLength === 0 && (
          <p className={css(this.styles.notifications)}>No new notification for now</p>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;