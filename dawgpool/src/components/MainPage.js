import React from 'react';
import { useState, useEffect } from 'react';
import { ProfileCard } from './ProfileCard';
import { Modal, Button } from 'react-bootstrap';
import { ref, get } from "firebase/database";

function MainPage({ user, database }) {
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const profilesRef = ref(database, 'profiles');
        get(profilesRef).then((snapshot) => {
            if (snapshot.exists()) {
                setProfiles(Object.values(snapshot.val()));
            }
        });
    }, [database]);

    const handleCloseLoginPrompt = () => {
        setShowLoginPrompt(false);
    };

    const handleSearch = (event) => {
      event.preventDefault();
      const searchValue = event.target.search.value;
      console.log("Search for:", searchValue);
    };
  
    return (
        <div className="content-wrapper">
            <div className="container-fluid">
                <header className="text-center mb-4 d-flex justify-content-center align-items-center">
                    <img src="assets/dawgprint.png" alt="dawgprint" className="heading-logo me-2" />
                    <h1><strong>Find your Carpool Dawg!</strong></h1>
                </header>

                <form className="d-flex justify-content-center" onSubmit={handleSearch}>
                    <div className="input-group search-group">
                        <input 
                            type="text" 
                            className="form-control search-input" 
                            placeholder="Search by region" 
                            aria-label="Search Bar" 
                            name="search" 
                        />
                        <button className="btn btn-outline-secondary search-button" type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </form>

                <div className="row row-cols-1 row-cols-md-2 g-5">
                    {profiles.map((profile, index) => (
                        <ProfileCard user={user} key={index} profile={profile} />
                    ))}
                </div>
            </div>

            <Modal show={showLoginPrompt} onHide={handleCloseLoginPrompt} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Login Required</Modal.Title>
                </Modal.Header>
                <Modal.Body>You need to log in to access this feature.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLoginPrompt}>Close</Button>
                    <Button variant="primary" onClick={() => window.location.href = '/login'}>Go to Login</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MainPage;
