import React, { useState, useEffect } from 'react';
import { ProfileCard } from './ProfileCard';
import { Modal, Button } from 'react-bootstrap';
import { ref, get } from "firebase/database";

function MainPage({ user, database }) {
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [profiles, setProfiles] = useState([]);
    const [availability, setAvailability] = useState([]);
    const [matchedProfiles, setMatchedProfiles] = useState([]);
    const [searchRegion, setSearchRegion] = useState('');
    const [isFilterApplied, setIsFilterApplied] = useState(false);

    useEffect(() => {
        // Fetch all profiles from the database
        const profilesRef = ref(database, 'profiles');
        get(profilesRef).then((snapshot) => {
            if (snapshot.exists()) {
                const profilesData = Object.values(snapshot.val());
                setProfiles(profilesData);
                setMatchedProfiles(profilesData);
            }
        });
    }, [database]);

    const onShowLoginPrompt = () => {
        setShowLoginPrompt(true);
    };

    const handleShowInfoModal = () => setShowInfoModal(true);
    const handleCloseInfoModal = () => setShowInfoModal(false);


    // Function to convert time string
    const timeStringToMinutes = (timeString) => {
        const [time, modifier] = timeString.split(" ");
        let [hours, minutes] = time.split(":").map(Number);

        if (modifier === "PM" && hours !== 12) {
            hours += 12;
        }
        if (modifier === "AM" && hours === 12) {
            hours = 0;
        }

        return hours * 60 + minutes;
    };

    // Check if availability slots overlap
    const hasOverlap = (userSchedule, profileSchedule) => {
        return userSchedule.some(slot => {
            const daySchedule = profileSchedule[slot.day]; // Get the schedule for the specific day
            if (!daySchedule || !daySchedule.goToSchool || !daySchedule.backHome) {
                return false;
            }
            
            // Convert `goToSchool` and `backHome` to minutes for comparison
            const profileStart = timeStringToMinutes(daySchedule.goToSchool);
            const profileEnd = timeStringToMinutes(daySchedule.backHome);
            
            // Convert user availability times to minutes
            const userStart = timeStringToMinutes(slot.start);
            const userEnd = timeStringToMinutes(slot.end);

            // Debugging output
            console.log(`Comparing times for ${slot.day}:`);
            console.log(`User: ${userStart} - ${userEnd}`);
            console.log(`Profile: ${profileStart} - ${profileEnd}`);

            if (profileStart >= userStart && profileEnd <= userEnd) {
                console.log("Overlap found!");
            }
            
            // Check for overlap
            return profileStart >= userStart && profileEnd <= userEnd;
        });
    };

    // Filter profiles based on overlap
    const filterSchedules = () => {
        const matched = profiles.filter(profile => 
            profile.schedule && hasOverlap(availability, profile.schedule)
        );
        setMatchedProfiles(matched);

        // Debugging information
        console.log("User's availability:", availability);
        console.log("Profiles data from Firebase:", profiles);
        console.log("Matched profiles:", matched);
    };

    // Handle form submission for availability filtering
    const handleAvailabilitySubmit = (event) => {
        event.preventDefault();
        setIsFilterApplied(true);
        filterSchedules();
    };

    // Handle adding a new time slot to availability
    const handleAddAvailability = () => {
        setAvailability([...availability, { day: '', start: '', end: '' }]);
    };

    const handleAvailabilityChange = (index, field, value) => {
        const newAvailability = [...availability];
        newAvailability[index][field] = value; // Directly store the value in 24-hour format
        setAvailability(newAvailability);
    };

    // Handle search bar input change
    const handleSearchChage = (e) => {
        setSearchRegion(e.target.value);
        setIsFilterApplied(true);
        // Filter profiles by region
        const filterdProfiles = profiles.filter(profile =>
            profile.region.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setMatchedProfiles(filterdProfiles);
    }

    return (
        <div className="content-wrapper">
            <div className="container-fluid">
                <header className="text-center mb-4 d-flex justify-content-center align-items-center">
                    <img src="assets/dawgprint.png" alt="dawgprint" className="heading-logo me-2 mb-3" />
                    <h1 className="mb-3"><strong>Find your Carpool Dawg!</strong></h1>
                </header>

                {/* Search Bar */}
                <div className="search-bar mb-4">
                    <label>
                        Search by city:
                        <input
                        type="text"
                        value={searchRegion}
                        onChange={handleSearchChage}
                        placeholder="Enter city..."
                        />
                    </label>
                    <Button
                        aria-label="Information Button"
                        variant="btn btn-outline-secondary"
                        className="ms-4"
                        onClick={handleShowInfoModal}
                    >
                        ℹ️
                    </Button>
                </div>

                {/* Availability Form */}
                <h2>Set Your Preferred Commute Time</h2>
                <form onSubmit={handleAvailabilitySubmit}>
                    {availability.map((slot, index) => (
                        <div key={index} className="availability-slot">
                            <label>
                                Day:
                                <select
                                    value={slot.day}
                                    onChange={(e) => handleAvailabilityChange(index, 'day', e.target.value)}
                                >
                                    <option value="">Select Day</option>
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                    <option value="Sunday">Sunday</option>
                                </select>
                            </label>
                            <label>
                                Start Time:
                                <input
                                    type="time"
                                    value={slot.start}
                                    onChange={(e) => handleAvailabilityChange(index, 'start', e.target.value)}
                                />
                            </label>
                            <label>
                                End Time:
                                <input
                                    type="time"
                                    value={slot.end}
                                    onChange={(e) => handleAvailabilityChange(index, 'end', e.target.value)}
                                />
                            </label>
                        </div>
                    ))}
                    <Button onClick={handleAddAvailability} className="mt-2">Add Time Slot</Button>
                    <Button type="submit" className="mt-2 ms-2">Find Matches</Button>
                </form>

                {/* Matched Profiles Display */}
                <div>
                    <h2 className="mt-4 mb-3">Matched Profiles Based on Preferred Commute Time</h2>
                    {!isFilterApplied ? (
                        <p className="text-muted mb-5">You haven't selected your matched information yet.</p>
                    ) : matchedProfiles.length > 0 ? (
                        <div className="row row-cols-1 row-cols-md-2 g-5">
                            {matchedProfiles.map((profile, index) => (
                                <ProfileCard user={user} key={index} profile={profile} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-muted mb-5">No matching profiles found.</p>
                    )}
                </div>

                {/* All Profiles Display */}
                <h2 className="mt-4">All Profiles</h2>
                <div className="row row-cols-1 row-cols-md-2 g-5">
                    {profiles.map((profile, index) => (
                        <ProfileCard user={user} key={index} profile={profile}  onShowLoginPrompt={onShowLoginPrompt}/>
                    ))}
                </div>
            </div>

            <Modal show={showLoginPrompt} onHide={() => setShowLoginPrompt(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Login Required</Modal.Title>
                </Modal.Header>
                <Modal.Body>You need to log in to access this feature.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowLoginPrompt(false)}>Close</Button>
                    <Button variant="primary" onClick={() => window.location.href = '/login'}>Go to Login</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showInfoModal} onHide={handleCloseInfoModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>How to Use DAWGPOOL</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <p>Welcome to DAWGPOOL! Here’s how to use the website:</p>
                        <ol>
                            <li>Search for carpool profiles by entering your city in the search bar.</li>
                            <li>Set your preferred commute time by adding time slots for your availability.</li>
                            <li>Click "Find Matches" to view profiles with overlapping schedules.</li>
                            <li>Browse through all available profiles to find your ideal carpool buddy.</li>
                            <li>Log in to access additional features like contacting profiles.</li>
                        </ol>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseInfoModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
        
    );
}

export default MainPage;
