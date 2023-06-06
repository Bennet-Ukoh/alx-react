import React from 'react';
import './Notifications.css';
import imageIcon from '../../assets/close-icon.jpg';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

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

  render() {
    const { displayDrawer, listNotifications } = this.props;
    const { prevListLength } = this.state;
    const showNotifications = displayDrawer && listNotifications.length > 0;

    return (
      <>
        {showNotifications && (
          <div>
            <div className="menuItem">Your notifications</div>
            <div className="Notifications">
              <button
                style={{ float: 'right' }}
                aria-label="Close"
                onClick={this.handleClick}
              >
                <img height="5px" width="5px" src={imageIcon} alt="close" />
              </button>
              <p>Here is the list of notifications</p>
              <ul>
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
          <p className="Notifications">No new notification for now</p>
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