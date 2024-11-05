import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

export function ProfileDetailModal({ show, onHide, profile }) {
    if (!profile) return null;

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{profile.firstName} {profile.lastName}'s Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>Year:</strong> {profile.year}</p>
                <p><strong>Hobbies:</strong> {profile.hobbies}</p>
                <p><strong>Address:</strong> {profile.address}</p>
                <p><strong>Region:</strong> {profile.region}</p>
                {profile.isDriver}

                <h5 className="mt-4">Schedule</h5>
                <Table bordered className="mt-2">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Go to School</th>
                            <th>Back Home</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(profile.schedule).map(([day, times]) => (
                            <tr key={day}>
                                <td><strong>{day}</strong></td>
                                <td>{times.goToSchool || 'N/A'}</td>
                                <td>{times.backHome || 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}