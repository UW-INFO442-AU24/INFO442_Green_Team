import React from 'react';

const EditProfile = () => {
    return (
        <div className="content-wrapper">
            <div className="profile-container">
                <div className="user-info">
                    <img src="/assets/profile.webp" alt="profile-photo" className="profile-photo" />
                    <h3>Jimmy J.</h3>

                    <div className="star-rating">
                        <span className="rating-number">4.0</span>
                        <span className="star-amount">★★★★☆</span>
                        <span className="reviews">10 Reviews</span>
                    </div>
                </div>

                <div className="edit-profile-section">
                    <h3>Profile</h3>

                    <p><strong>First Name:</strong> Jimmy</p>
                    <p><strong>Last Name:</strong> Jacobson</p>
                    <p><strong>Bio:</strong> Junior majoring in Computer Science.</p>
                    <p><strong>Interests:</strong> Traveling, Eating, Walking.</p>
                    <p><strong>Clubs/Sports/Extracurricular:</strong> Coding Club, Soccer, Basketball</p>
                    <p><strong>Year:</strong> Junior</p>
                    <p><strong>Address:</strong> 4516 Elliot Ave</p>
                    <p><strong>City:</strong> Seattle</p>
                    <p><strong>State:</strong> WA</p>
                    <p><strong>Schedule:</strong> Monday, Wednesday, Thursday</p>
                    <p><strong>Start Time:</strong> 10:30 AM</p>
                    <p><strong>End Time:</strong> 3:30 PM</p>
                    <p><strong>Driver's License #:</strong> WDL3431B3214</p>

                    <button className="edit-profile-button">Edit Profile</button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
