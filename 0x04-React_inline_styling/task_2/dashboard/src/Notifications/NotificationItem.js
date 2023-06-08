import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  defaultItem: {
    color: 'blue',
  },
  urgentItem: {
    color: 'red'
  }
})

class NotificationItem extends React.PureComponent {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  };

  render() {
    const { type, html, value } = this.props;

    const itemStyle = type === 'urgent' ?
      styles.urgentItem : styles.defaultItem

    if (html) {
      return (
        <li
          className={css(itemStyle)}
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          onClick={this.handleClick} />
      );
    }

    return (
      <li
        className={(css(itemStyle))}
        data-notification-type={type}
        onClick={this.handleClick}>
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;