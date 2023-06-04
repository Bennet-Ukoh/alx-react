import React from 'react';
import PropTypes from 'prop-types'

const NotificationItem = ({ id, type, html, value, markAsRead }) => {
     const handleClick = () => {
      markAsRead(id)
     }

  if (html) {
    return (
      <li
       data-notification-type={type}
       dangerouslySetInnerHTML={html}
       onClick={handleClick}
       />
    );
  }

  return (
    <li data-notification-type={type} onClick={handleClick}>{value}</li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func
}
NotificationItem.defaultProps = {
  type: 'default',
 
}

export default NotificationItem;
