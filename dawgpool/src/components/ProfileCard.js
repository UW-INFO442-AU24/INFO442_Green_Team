import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ProfileDetailModal } from './ProfileDetailModal'; 
import { formatTimeToRegular } from '../utils/timeUtils';

export function ProfileCard({ user, profile, onShowLoginPrompt }) {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const driverImage = "/assets/driverimage.png";
    const passengerImage = "/assets/passengerimage.png";

    const profileImage = profile.isDriver ? driverImage : passengerImage;
    const handleProfileClick = () => {
        if (!user) {
            onShowLoginPrompt();
        } else {
            setShowModal(true);
        }
    };

    const handleMessageClick = () => {
        if (!user) {
            onShowLoginPrompt();
        } else {
            navigate('/message');
        }
    };

    return (
        <div>
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body d-flex">
                        <div className="profile-section me-3">
                            <img 
                                src={profile.profilePhoto || profileImage} 
                                alt="Profile" 
                                className="profile-pic mb-3" 
                            />
                            <h5 className="card-title mb-1">{profile.firstName} {profile.lastName}</h5>
                            <p className="school-year text-muted mb-1">{profile.year}</p>
                            <p className="driver-status text-muted text-nowrap"><strong>
                                {profile.isDriver ? "Driver" : "Passenger"}
                            </strong></p>
                            <div className="stars">
                                <span>★ ★ ★ ★ ☆</span>
                            </div>
                            <div className="row mt-2">
                                <Button variant="outline-secondary" onClick={handleProfileClick} className="mt-1">Profile</Button>
                                <Button variant="outline-secondary" onClick={handleMessageClick} className="mt-2">Message</Button>
                            </div>
                        </div>

                        <div className="profile-schedule-section">
                            <h4 className="schedule-title">Schedule</h4>
                            <table className="table table-borderless text-center">
                                <thead>
                                    <tr className="fw-bold">
                                        <th>Go to School</th>
                                        <th>Day</th>
                                        <th>Back Home</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                                        <tr key={day}>
                                            <td className="schedule-time">{formatTimeToRegular(profile.schedule[day]?.goToSchool)}</td>
                                            <td className="schedule-day fw-bold">{day}</td>
                                            <td className="schedule-time">{formatTimeToRegular(profile.schedule[day]?.backHome)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="mt-1"><strong>Living City:</strong> {profile.region || 'N/A'}</p>
                        </div>
                    </div>
                </div>
            </div>

            <ProfileDetailModal 
                show={showModal} 
                onHide={() => setShowModal(false)} 
                profile={profile} 
            />
        </div>
    );
}

