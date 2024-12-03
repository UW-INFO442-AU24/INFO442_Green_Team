import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

export function CreateProfileModal({ show, onHide, onSave, initialData }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        hobbies: '',
        year: 'Freshman',
        address: '',
        city: '',
        schedule: {
            Monday: { goToSchool: '', backHome: '' },
            Tuesday: { goToSchool: '', backHome: '' },
            Wednesday: { goToSchool: '', backHome: '' },
            Thursday: { goToSchool: '', backHome: '' },
            Friday: { goToSchool: '', backHome: '' },
        },
        isDriver: false,
        driverLicense: ''
    });

    useEffect(() => {
        if (initialData) {
            const completeSchedule = {
                Monday: { goToSchool: '', backHome: '' },
                Tuesday: { goToSchool: '', backHome: '' },
                Wednesday: { goToSchool: '', backHome: '' },
                Thursday: { goToSchool: '', backHome: '' },
                Friday: { goToSchool: '', backHome: '' },
                ...initialData.schedule,
            };
            const updatedFormData = {
                ...initialData,
                schedule: completeSchedule,
            };
            setFormData(updatedFormData);
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
                [day]: {
                    ...formData.schedule[day],
                    [field]: value,
                },
            },
        });
    };    

    const handleDriverCheckbox = () => {
        setFormData({ ...formData, isDriver: !formData.isDriver });
    };

    const handleSave = () => {
        onSave(formData);
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide} centered dialogClassName="modal-dialog modal-xl">
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
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            name="region"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City"
                        />
                    </Form.Group>

                    <h5 className="mt-4">Schedule</h5>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                        <Row key={day} className="mt-3 mx-4">
                            <Col>
                                <Form.Label>{day}</Form.Label>
                            </Col>
                            <Col>
                                <Row><p>Go to School</p></Row>
                                <div>
                                    <input
                                        type="time"
                                        value={formData.schedule[day]?.goToSchool || ''}
                                        onChange={(event) => handleScheduleChange(day, 'goToSchool', event.target.value)}
                                    />
                                </div>             
                            </Col>
                            <Col>
                                <Row><p>Back Home</p></Row>
                                <div>
                                    <input
                                        type="time"
                                        value={formData.schedule[day]?.backHome || ''}
                                        onChange={(event) => handleScheduleChange(day, 'backHome', event.target.value)}
                                    />
                                </div>
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
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSave}>
                    Save
                </Button>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
