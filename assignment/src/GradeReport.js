import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import MyNavbar from './nav';
import MyFooter from './MyFooter';

const allGrades = [
  { course: 'DCIT 101', grade: 'A', semester: 'First 2022', creditHours: 3 },
    { course: 'DCIT 103', grade: 'A', semester: 'First 2022' , creditHours: 3},
    { course: 'MATH 121', grade: 'B', semester: 'First 2022' , creditHours: 3},
    { course: 'MATH 123', grade: 'A', semester: 'First 2022', creditHours: 3 },
    { course: 'STAT 111', grade: 'A', semester: 'First 2022' , creditHours: 3 },
    { course: 'UGRC 150', grade: 'A', semester: 'First 2022' , creditHours: 3 },
    { course: 'DCIT 102', grade: 'A', semester: 'Second 2022', creditHours: 3 },
    { course: 'DCIT 104', grade: 'C', semester: 'Second 2022' , creditHours: 3},
    { course: 'MATH 122', grade: 'A', semester: 'Second 2022', creditHours: 3 },
    { course: 'MATH 126', grade: 'A', semester: 'Second 2022', creditHours: 3 },
    { course: 'STAT 112', grade: 'A', semester: 'Second 2022', creditHours: 3 },
    { course: 'UGRC 110', grade: 'N/A', semester: 'Second 2022', creditHours: 3 },
    { course: 'DCIT 201', grade: 'A', semester: 'First 2023' , creditHours: 3},
    { course: 'DCIT 203', grade: 'A', semester: 'First 2023', creditHours: 3 },
    { course: 'DCIT 205', grade: 'A', semester: 'First 2023' , creditHours: 3},
    { course: 'DCIT 207', grade: 'B', semester: 'First 2023', creditHours: 3 },
    { course: 'MATH 223', grade: 'A', semester: 'First 2023', creditHours: 3 },
    { course: 'CBAS 210', grade: 'B+', semester: 'First 2023', creditHours: 3 },
];

const GradeReportPage = () => {
  const [selectedSemester, setSelectedSemester] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredGrades = allGrades.filter(
    (grade) =>
      (selectedSemester === 'All' || grade.semester === selectedSemester) &&
      (selectedYear === 'All' || grade.semester.includes(selectedYear))
  );

  const calculateGPA = () => {
    // Simple GPA calculation based on grades (you may need a more sophisticated algorithm)
    const gradePoints = {
      'A': 4.0,
      'B+': 3.5,
      'B': 3.0,
      'C+': 2.0,
      'C':1.5,
      'D+': 1.0,
      D: 1.0,
      E: 0.0,
      F: 0.0,
    };

    const totalGradePoints = filteredGrades.reduce(
      (total, grade) => total + gradePoints[grade.grade],
      0
    );

    const averageGPA = totalGradePoints / filteredGrades.length || 0;
    return averageGPA.toFixed(2);
  };

  return (
    <div>
      <MyNavbar />
      <MyFooter />

    <Container className="mt-4">
      <h2 className="mb-4">Grade Report</h2>

     
      <Form className="mb-4">
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="semesterFilter">
              <Form.Label>Filter by Semester</Form.Label>
              <Form.Control as="select" value={selectedSemester} onChange={handleSemesterChange}>
                <option value="All">All Semesters</option>
                <option value="First 2022">First 2022</option>
                <option value="Second 2022">Second 2022</option>
                <option value="First 2023">First 2023</option>
               
              </Form.Control>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="yearFilter">
              <Form.Label>Filter by Year</Form.Label>
              <Form.Control as="select" value={selectedYear} onChange={handleYearChange}>
                <option value="All">All Years</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                {/* Add more year options as needed */}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {/* GPA Calculation */}
        <Row>
          <Col md={6}>
            
            <div>
              <strong>Average GPA:</strong> {calculateGPA()}
            </div>
          </Col>
        </Row>
      </Form>

      {/* Grade Cards */}
      <Row>
        {filteredGrades.map((grade) => (
          <Col key={grade.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{grade.course}</Card.Title>
                <Card.Text>
                  <strong>Grade:</strong> {grade.grade}
                  <br />
                  <strong>Semester:</strong> {grade.semester}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default GradeReportPage;