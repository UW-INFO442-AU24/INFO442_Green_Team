import React from 'react';

export function ProfileCard(props) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="card-body d-flex">
          <div className="profile-section me-3">
            <img 
              src="https://via.placeholder.com/80" 
              alt="Profile" 
              className="profile-pic mb-3" 
            />
            <h5 className="card-title mb-1">someone</h5>
            <p className="school-year text-muted mb-1">Class of 2025</p>
            <div className="stars">
              <span>★ ★ ★ ★ ☆</span>
            </div>
          </div>
          <div className="schedule-section">
            <h6 className="schedule-title fw-bolder text-decoration-underline">Schedule</h6>
            <ul className="list-unstyled mb-1">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => {
                return(
                  <li className="d-flex justify-content-between" key={day}>
                    <strong>{day}:</strong> <span>some time</span>
                  </li>
                )})}
            </ul>
            <p><strong>Living Region:</strong> Downtown Seattle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

