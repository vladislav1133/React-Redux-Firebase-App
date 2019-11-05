import React from 'react';
import moment from "moment";

const Notifications = (props) => {
    const { notifications } = props;
    const notificationList = [];

    if(notifications) {
        for (let key in notifications) {
            notificationList.push(
                <li key={key}>
                    <span className="pink-text">{notifications[key].user} </span>
                    <span>{notifications[key].content}</span>
                    <div className="grey-text note-date">
                        {moment(notifications[key].time.toDate()).fromNow()}
                    </div>
                </li>
            )
        }
    }

    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        { notificationList }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Notifications;
