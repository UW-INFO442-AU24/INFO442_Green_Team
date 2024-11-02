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
            <div className="row mt-2">
              <button className="btn btn-sm btn-outline-secondary mt-1" onClick={() => console.log("Display Profile")}>Profile</button>
              <button className="btn btn-sm btn-outline-secondary mt-2" onClick={() => console.log("Message")}>Message</button>
            </div>
          </div>

          <div className="schedule-section">
            <h4 className="schedule-title fw-bolder text-decoration-underline mb-3">Schedule</h4>
            <div className="schedule-container d-flex">
              <div className="flex-column go-to-school me-3">
                <strong>Go to School</strong>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                  <div key={day} className="schedule-time mb-1">some time</div>
                ))}
              </div>
              <div className="flex-column days me-3 mb-3">
                <div className="placeholder"></div>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                  <div key={day} className="schedule-day fw-bold mb-1">{day}</div>
                ))}
              </div>
              <div className="flex-column back-home mb-3">
                <strong>Back Home</strong>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                  <div key={day} className="schedule-time mb-1">some time</div>
                ))}
              </div>
            </div>
            <p className="mt-1"><strong>Living Region:</strong> Downtown Seattle</p>
          </div>        
        </div>
      </div>
    </div>
);
};