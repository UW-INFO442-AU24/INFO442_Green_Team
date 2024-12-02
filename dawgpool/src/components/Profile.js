import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { ref, get, set } from "firebase/database";
import { CreateProfileModal } from './CreateProfileModal';
import { formatTimeToRegular } from '../utils/timeUtils';

function Profile({ user, database, onLogout }) {
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [showCreateProfileModal, setShowCreateProfileModal] = useState(false);

    useEffect(() => {
        if (user) {
            const profileRef = ref(database, `profiles/${user.uid}`);
            get(profileRef).then((snapshot) => {
                if (snapshot.exists()) {
                    setProfile(snapshot.val());
                } else {
                    setProfile(null);
                }
            });
        }
    }, [user, database]);

    const handleCreateProfile = (formData) => {
        const profileRef = ref(database, `profiles/${user.uid}`);
        set(profileRef, formData)
            .then(() => {
                setProfile(formData);
                setShowCreateProfileModal(false);
            })
            .catch(error => console.error("Error saving profile:", error));
    };

    if (!user) {
        return (
            <div className="content-wrapper">
                <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
                    <div className="row text-center">
                        <h2>You are not logged in</h2>
                    </div>
                    <div className="row mt-3">
                        <Button onClick={() => navigate('/login')} className="btn btn-primary">
                            Go to Login
                        </Button>
                    </div>
                    <div className="row mt-3">
                        <Link to="/" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                            Continue browsing main page
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    return (
        <div className="content-wrapper p-4">
            {profile ? (
                <div className="profile-container d-flex flex-column align-items-start">
                    <h2 className="mb-4 text-center w-100">Profile Information</h2>

                    <div className="mb-3">
                        <h5><strong>Name:</strong> {profile.firstName} {profile.lastName}</h5>
                    </div>
                    <div className="mb-3">
                        <p><strong>Year:</strong> {profile.year}</p>
                    </div>
                    <div className="mb-3">
                        <p><strong>Hobbies:</strong> {profile.hobbies}</p>
                    </div>
                    <div className="mb-3">
                        <p><strong>Address:</strong> {profile.address}</p>
                    </div>
                    <div className="mb-3">
                        <p><strong>City:</strong> {profile.region}</p>
                    </div>
                    <div className="mb-3">
                        <p><strong>Driver Status:</strong> {profile.isDriver ? "Driver" : "Passenger"}</p>
                    </div>
                    {profile.isDriver && (
                        <div className="mb-3">
                            <p><strong>Driver's License:</strong> {profile.driverLicense}</p>
                        </div>
                    )}

                    <h4 className="mt-4">Schedule</h4>
                    <Table bordered className="mt-2">
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Go to School</th>
                                <th>Back Home</th>
                            </tr>
                        </thead>
                        <tbody>
                            {daysOfWeek.map((day) => (
                                <tr key={day}>
                                    <td><strong>{day}</strong></td>
                                    <td>{formatTimeToRegular(profile.schedule[day]?.goToSchool)}</td>
                                    <td>{formatTimeToRegular(profile.schedule[day]?.goToSchool)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <div className="mt-4 d-flex">
                        <Button variant="primary" onClick={() => setShowCreateProfileModal(true)}>Edit Profile</Button>
                        <Button variant="danger" onClick={onLogout} className="ms-2">Log Out</Button>
                    </div>
                </div>
            ) : (
                <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
                    <div className="row text-center">
                        <h2>You have not created a profile yet</h2>
                    </div>
                    <div className="row mt-3">
                        <Button variant="primary" onClick={() => setShowCreateProfileModal(true)}>Create Profile</Button>
                        <Button variant="danger" className="mt-3" onClick={() => navigate('/login')}>Log Out</Button>
                    </div>
                </div>
            )}

            <CreateProfileModal
                show={showCreateProfileModal}
                onHide={() => setShowCreateProfileModal(false)}
                onSave={handleCreateProfile}
                initialData={profile}
            />
        </div>
    );
}

export default Profile;
