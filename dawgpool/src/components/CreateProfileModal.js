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
            const convertTo12HourFormat = (time) => {
                if (!time) return '';
                const [hourMinute, period] = time.split(' ');
                const [hour, minute] = hourMinute.split(':').map(Number);
                return `${hour}:${minute.toString().padStart(2, '0')} ${period}`;
            };

            const convertScheduleTo12Hour = (schedule) => {
                const convertedSchedule = {};
                for (const day in schedule) {
                    convertedSchedule[day] = {
                        goToSchool: convertTo12HourFormat(schedule[day]?.goToSchool),
                        backHome: convertTo12HourFormat(schedule[day]?.backHome),
                    };
                }
                return convertedSchedule;
            };

            setFormData({
                ...initialData,
                schedule: convertScheduleTo12Hour(initialData.schedule),
            });
        }
    }, [initialData]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleScheduleChange = (day, field, value) => {
        const newSchedule = { ...formData.schedule[day] };

        if (field.includes('Hour') || field.includes('Minute') || field.includes('Period')) {
            newSchedule[field] = value;

            if (
                newSchedule.goToSchoolHour &&
                newSchedule.goToSchoolMinute &&
                newSchedule.goToSchoolPeriod
            ) {
                newSchedule.goToSchool = `${newSchedule.goToSchoolHour}:${newSchedule.goToSchoolMinute.padStart(2, '0')} ${newSchedule.goToSchoolPeriod}`;
            }

            if (
                newSchedule.backHomeHour &&
                newSchedule.backHomeMinute &&
                newSchedule.backHomePeriod
            ) {
                newSchedule.backHome = `${newSchedule.backHomeHour}:${newSchedule.backHomeMinute.padStart(2, '0')} ${newSchedule.backHomePeriod}`;
            }
        } else {
            newSchedule[field] = value;
        }

        setFormData({
            ...formData,
            schedule: {
                ...formData.schedule,
                [day]: newSchedule,
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
                                <div>
                                    <select
                                        value={formData.schedule[day]?.goToSchoolHour || ''}
                                        onChange={(e) =>
                                            handleScheduleChange(day, 'goToSchoolHour', e.target.value)
                                        }
                                    >
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        value={formData.schedule[day]?.goToSchoolMinute || ''}
                                        onChange={(e) =>
                                            handleScheduleChange(day, 'goToSchoolMinute', e.target.value)
                                        }
                                    >
                                        {Array.from({ length: 60 }, (_, i) => (
                                            <option key={i} value={i.toString().padStart(2, '0')}>
                                                {i.toString().padStart(2, '0')}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        value={formData.schedule[day]?.goToSchoolPeriod || 'AM'}
                                        onChange={(e) =>
                                            handleScheduleChange(day, 'goToSchoolPeriod', e.target.value)
                                        }
                                    >
                                        <option value="AM">AM</option>
                                        <option value="PM">PM</option>
                                    </select>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <select
                                        value={formData.schedule[day]?.backHomeHour || ''}
                                        onChange={(e) =>
                                            handleScheduleChange(day, 'backHomeHour', e.target.value)
                                        }
                                    >
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        value={formData.schedule[day]?.backHomeMinute || ''}
                                        onChange={(e) =>
                                            handleScheduleChange(day, 'backHomeMinute', e.target.value)
                                        }
                                    >
                                        {Array.from({ length: 60 }, (_, i) => (
                                            <option key={i} value={i.toString().padStart(2, '0')}>
                                                {i.toString().padStart(2, '0')}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        value={formData.schedule[day]?.backHomePeriod || 'AM'}
                                        onChange={(e) =>
                                            handleScheduleChange(day, 'backHomePeriod', e.target.value)
                                        }
                                    >
                                        <option value="AM">AM</option>
                                        <option value="PM">PM</option>
                                    </select>
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
