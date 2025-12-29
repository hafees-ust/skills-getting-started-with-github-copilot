import React from 'react';
import './Activities.css';

const Activities = ({ activities }) => {
  return (
    <div className="activities-list">
      {activities.map(activity => (
        <div key={activity.id} className="activity-card">
          <h3 className="activity-title">{activity.title}</h3>
          <p className="activity-description">{activity.description}</p>
          <h4>Participants:</h4>
          <ul className="participants-list">
            {activity.participants && activity.participants.length > 0 ? (
              activity.participants.map((participant, idx) => (
                <li key={idx} className="participant-item">
                  {participant}
                </li>
              ))
            ) : (
              <li className="participant-item none">No participants registered</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Activities;