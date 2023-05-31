import React from "react";
import './Notifications.css';
import imageIcon from '../../assets/close-icon.jpg';
import { getLatestNotification } from '../../utils/utils';
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';

function Notifications({ displayDrawer = false }) {
    const handleClick = () => {
        console.log('Close button has been clicked')
    };

    return (
        <>
            <div className="menuItem">
                Your notifications
            </div>
            {displayDrawer && (
                <div className="Notifications">
                    <button
                        style={{ float: 'right' }}
                        aria-label="Close"
                        onClick={handleClick}
                    >
                        <img height='5px' width='5px' src={imageIcon} alt="close"></img>
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        <NotificationItem type="default" value="New course available" />
                        <NotificationItem type="urgent" value="New resume available" />
                        <NotificationItem html={{ __html: getLatestNotification() }} />
                    </ul>
                </div>
            )}
        </>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
    displayDrawer: false,
};

export default Notifications;
