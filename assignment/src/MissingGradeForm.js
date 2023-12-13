import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import MyNavbar from './nav';
import MyFooter from './MyFooter';

const MissingGradeForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to submit the form data (e.g., API call)
    setShowConfirmation(true);
  };

  return (
    <div>
      <MyNavbar />
      <MyFooter />
    <Container className="mt-4">
      <h2 className="mb-4">Missing Grade Form</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="courseName">
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            placeholder="Enter course name"
            required
          />
        </Form.Group>

        <Form.Group controlId="instructorName">
          <Form.Label>Instructor Name</Form.Label>
          <Form.Control
            type="text"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleChange}
            placeholder="Enter instructor name"
            required
          />
        </Form.Group>

        <Form.Group controlId="expectedGrade">
          <Form.Label>Expected Grade</Form.Label>
          <Form.Control
            type="text"
            name="expectedGrade"
            value={formData.expectedGrade}
            onChange={handleChange}
            placeholder="Enter expected grade"
            required
          />
        </Form.Group>

        <Form.Group controlId="explanation">
          <Form.Label>Explanation</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="explanation"
            value={formData.explanation}
            onChange={handleChange}
            placeholder="Enter explanation"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Report Missing Grade
        </Button>
      </Form>

      {showConfirmation && (
        <Alert variant="success" className="mt-3">
          Missing grade reported successfully! Thank you for your submission.
        </Alert>
      )}
    </Container>
    </div>
  );
};

export default MissingGradeForm;
