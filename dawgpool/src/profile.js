import React from 'react';
import { useState } from 'react';
import './profile.css';
import image from './profile.webp';

function Profile() {
    const [form, setForm] = useState({
        bio: '',
        interests: '',
        clubs: '',
        firstName: '',
        lastName: '',
        year: '',
        address: '',
        city: '',
        state: '',
        schedule: '',
        startTime: '',
        endTime: '',
        license: ''
    });


    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
    }

  return (
    <div className="profile-container">
            <div className="user-info">
                <img src={image} alt="profile-photo" className="profile-photo" />
                <h3>Jimmy J.</h3>

                <div className="star-rating">
                    <span className="rating-number">4.0</span>
                    <span className="star-amount">★★★★☆</span>
                    <span className="reviews">10 Reviews</span>
                </div>
            </div>

            <div className="form-information">
                <h3>Create Your Profile</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-item">
                        <label htmlFor="bio">Your Bio:</label>
                        <textarea
                            id="bio"
                            name="bio"
                            value={form.bio}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="form-item">
                        <label htmlFor="interests">Interests:</label>
                        <textarea
                            id="interests"
                            name="interests"
                            value={form.interests}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="form-item">
                        <label htmlFor="clubs">Clubs/Sports/Extracurricular:</label>
                        <textarea
                            id="clubs"
                            name="clubs"
                            value={form.clubs}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="form-item">
                        <label htmlFor="firstName">Your Name:</label>
                        <input
                            type="text"
                            id="first-name"
                            name="firstName"
                            placeholder="First"
                            value={form.firstName}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            id="last-name"
                            name="lastName"
                            placeholder="Last"
                            value={form.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="year">Year:</label>
                        <select
                            id="year"
                            name="year"
                            value={form.year}
                            onChange={handleChange}
                        >
                            <option value="">Select Year</option>
                            <option value="freshman">Freshman</option>
                            <option value="sophomore">Sophomore</option>
                            <option value="junior">Junior</option>
                            <option value="senior">Senior</option>
                        </select>
                    </div>
                    <div className="form-item">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Address"
                            value={form.address}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="City"
                            value={form.city}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            id="state"
                            name="state"
                            placeholder="State"
                            value={form.state}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="schedule">Schedule:</label>
                        <select
                            id="schedule"
                            name="schedule"
                            value={form.schedule}
                            onChange={handleChange}
                        >
                            <option value="">Select Weekday</option>
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                            <option value="friday">Friday</option>
                        </select>
                        <input
                            type="time"
                            id="start-time"
                            name="startTime"
                            value={form.startTime}
                            onChange={handleChange}
                        />
                        <input
                            type="time"
                            id="end-time"
                            name="endTime"
                            value={form.endTime}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="driversLicense">Driver's License #:</label>
                        <input
                            type="number"
                            id="drivers-license"
                            name="driversLicense"
                            value={form.driversLicense}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="submit">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    
  );
};

export default Profile;