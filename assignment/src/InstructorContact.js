import React, { useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import MyNavbar from './nav';
import MyFooter from './MyFooter';

const InstructorContact = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleSelectInstructor = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleEmailInstructor = () => {
    alert('Email sent to ' + selectedInstructor.name);
  };

  const instructors = [
    { name: 'Instructor 1', email: 'instructor1@email.com', phone: '123-456-7890', image: '/images/harvey.jpeg',officeHours: 'Monday 10:00 AM - 12:00 PM', socialMedia: 'https://linkedin.com/in/instructor1', officeLocation: 'Building A, Room 101' },
    { name: 'Instructor 2', email: 'instructor2@email.com', phone: '234-567-8901', image: '/images/hari.jpeg', officeHours: 'Wednesday 2:00 PM - 4:00 PM', socialMedia: 'https://linkedin.com/in/instructor2', officeLocation: 'Building B, Room 202' },
    { name: 'Annalise Keating', email: 'annalisekeating@email.com', phone: '345-678-9012', image: '/images/annalise.jpg', officeHours: 'Friday 1:00 PM - 3:00 PM', socialMedia: 'https://linkedin.com/in/instructor3', officeLocation: 'Building C, Room 303' },
  ];

  return (
    <div>
      < MyNavbar />
      <MyFooter />
      <Container>
      <h1 className="text-center">Instructor Contact Page</h1>
      <Row className="justify-content-center">
        {instructors.map((instructor, index) => (
          <Col key={index} md={4} xs={12} className="mx-auto mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={instructor.image}
                alt={instructor.name}
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
              <Card.Body className="text-center">
                <Card.Title>{instructor.name}</Card.Title>
                <Card.Text>Email: {instructor.email}</Card.Text>
                <Card.Text>Phone: {instructor.phone}</Card.Text>
                <Card.Text>Office Hours: {instructor.officeHours}</Card.Text>
                <Button variant="primary" onClick={() => handleSelectInstructor(instructor)}>
                  Select
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedInstructor && (
        <div>
          <h2>Selected Instructor: {selectedInstructor.name}</h2>
          <Button variant="primary" onClick={handleEmailInstructor}>
            Email {selectedInstructor.name}
          </Button>
          <div>
            <h3>Office Hours:</h3>
            <p>{selectedInstructor.officeHours}</p>
          </div>
          <div>
            <h3>Social Media:</h3>
            <p><a href={selectedInstructor.socialMedia} target="_blank" rel="noopener noreferrer">{selectedInstructor.socialMedia}</a></p>
          </div>
          <div>
            <h3>Office Location:</h3>
            <p>{selectedInstructor.officeLocation}</p>
          </div>
        </div>
      )}
    </Container>
    </div>
  );
};

export default InstructorContact;
