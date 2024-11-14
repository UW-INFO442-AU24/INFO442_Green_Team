import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { formatTimeToRegular } from '../utils/timeUtils';

export function CreateProfileModal({ show, onHide, onSave, initialData }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        hobbies: '',
        year: 'Freshman',
        address: '',
        region: '',
        schedule: {
            Monday: { goToSchool: '', backHome: '' },
            Tuesday: { goToSchool: '', backHome: '' },
            Wednesday: { goToSchool: '', backHome: '' },
            Thursday: { goToSchool: '', backHome: '' },
            Friday: { goToSchool: '', backHome: '' }
        },
        isDriver: false,
        driverLicense: '',
        profilePhoto: null
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleScheduleChange = (day, field, value) => {
        setFormData({
            ...formData,
            schedule: {
                ...formData.schedule,
                [day]: { ...formData.schedule[day], [field]: value }
            }
        });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profilePhoto: e.target.files[0] });
    };

    const handleDriverCheckbox = () => {
        setFormData({ ...formData, isDriver: !formData.isDriver });
    };

    const handleSave = () => {
        onSave(formData);
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide} centered dialogClassName="wide-modal">
            <Modal.Header closeButton>
                <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group controlId="isDriver" className="mt-3">
                        <Form.Check
                            type="checkbox"
                            label="Are you a driver?"
                            checked={formData.isDriver}
                            onChange={handleDriverCheckbox}
                        />
                    </Form.Group>
                    
                    {formData.isDriver && (
                        <Form.Group controlId="driverLicense" className="mt-3">
                            <Form.Label>Driver's License Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="driverLicense"
                                value={formData.driverLicense}
                                onChange={handleChange}
                                placeholder="Driver's License Number"
                            />
                        </Form.Group>
                    )}

                    <Form.Group controlId="year" className="mt-3">
                        <Form.Label>Year (Select)</Form.Label>
                        <Form.Control
                            as="select"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                        >
                            <option>Freshman</option>
                            <option>Sophomore</option>
                            <option>Junior</option>
                            <option>Senior</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="address" className="mt-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Address"
                        />
                    </Form.Group>

                    <Form.Group controlId="region" className="mt-3">
                        <Form.Label>Region</Form.Label>
                        <Form.Control
                            type="text"
                            name="region"
                            value={formData.region}
                            onChange={handleChange}
                            placeholder="Region"
                        />
                    </Form.Group>

                    <h5 className="mt-4">Schedule</h5>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                        <Row key={day} className="mt-2">
                            <Col>
                                <Form.Label>{day}</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    type="time"
                                    value={formData.schedule[day].goToSchool}
                                    onChange={(e) => handleScheduleChange(day, 'goToSchool', e.target.value)}
                                />
                                <small>{formatTimeToRegular(formData.schedule[day]?.goToSchool)}</small> {/* Preview */}
                            </Col>
                            <Col>
                                <Form.Control
                                    type="time"
                                    value={formData.schedule[day].backHome}
                                    onChange={(e) => handleScheduleChange(day, 'backHome', e.target.value)}
                                />
                                <small>{formatTimeToRegular(formData.schedule[day]?.backHome)}</small> {/* Preview */}
                            </Col>
                        </Row>                    
                    ))}

                    <Form.Group controlId="hobbies" className="mt-3">
                        <Form.Label>Hobbies</Form.Label>
                        <Form.Control
                            type="text"
                            name="hobbies"
                            value={formData.hobbies}
                            onChange={handleChange}
                            placeholder="Hobbies"
                        />
                    </Form.Group>

                    <Form.Group controlId="profilePhoto" className="mt-4">
                        <Form.Label>Profile Photo</Form.Label>
                        <Form.Control type="file" onChange={handleFileChange} />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSave}>Save</Button>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
