import React from "react";
import './Notifications.css';
import imageIcon from '../../assets/close-icon.jpg';
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';
import NotificationItemShape from "./NotificationItemShape";

function Notifications({ displayDrawer = false, listNotifications = [] }) {
    const handleClick = () => {
        console.log('Close button has been clicked')
    };

    return (
        <>
          {displayDrawer && (
            <div >
              {listNotifications.length === 0 ? (
                <p className="Notifications">No new notification for now</p>
              ) : (
                <>

                  <div className="menuItem">
                    Your notifications
                  </div>
                
                 
                  <div className="Notifications">
                  <button
                    style={{ float: 'right' }}
                    aria-label="Close"
                    onClick={handleClick}
                  >
                    <img height='5px' width='5px' src={imageIcon} alt="close" />
                  </button>
                  <p>Here is the list of notifications</p>
                  <ul>
                    {listNotifications.map(notification => (
                      <NotificationItem
                        key={notification.id}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}
                      />
                    ))}
                  </ul>
                  </div>
                  
                </>
              )}
            </div>
          )}
        </>
      );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

export default Notifications;
