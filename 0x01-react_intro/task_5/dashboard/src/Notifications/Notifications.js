import React from "react";
import './Notifications.css';
import imageIcon from '../assets/close-icon.jpg';
import { getLatestNotification } from '../utils/utils'

export function Notifications() {
    const handleClick = () => {
        console.log('Close button has been clicked')
    };
    return (
        <div className="Notifications">
            <button
                style={{ float: 'right' }}
                aria-label="Close"
                onClick={handleClick}
            >
                <img height='10px' width='10px' src={imageIcon} alt="close"></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    );
}

export default Notifications;