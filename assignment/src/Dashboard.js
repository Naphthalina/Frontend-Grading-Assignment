import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './Dashboard.css'; // Create this file to add custom styles if needed
import { Navbar, Container, Nav, Card, Row, Col, Table } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import MyNavbar from './nav';
import MyFooter from './MyFooter';

function Dashboard() {
  // Placeholder data
  const courses = [
    { name: 'Programming I', code: 'DCIT 201' },
    { name: 'Digital and Logic SYstem', code: 'DCIT 203' },
    { name: 'Web Design and Development', code: 'DCIT 205' },
    { name: 'Computer Architecture and Organization', code: 'DCIT 207' },
    { name: 'E- Business Architecture', code: 'DCIT 209' },
    { name: 'Academic Writing II', code: 'CBAS 210' },
    
  ];

  const grades = [
    { course: 'DCIT 102', grade: 'A' },
    { course: 'DCIT 104', grade: 'A' },
    { course: 'MATH 122', grade: 'A' },
    { course: 'STAT 112', grade: 'A' },
    { course: 'ECON 102', grade: 'A' },
    { course: 'UGRC150', grade: 'B' },
    
  ];

  const starStudents = [
    { name: 'Gaal Dornick', grade: 'A', image: `${process.env.PUBLIC_URL}/images/lou.jpg` },
    { name: 'Mike Ross', grade: 'A', image:`${process.env.PUBLIC_URL}/images/mike.webp` },
    {name: 'Walter O Brien', grade: 'A', image:`${process.env.PUBLIC_URL}/images/walter.jpg`},
  
  ];

  const studentActivities = [
    { activity: 'Hackathon', date: '2024-05-15' },
    { activity: 'Science Fair', date: '2024-06-02' },
  
  ];

  return (
    <div main >
      <MyNavbar />
      <MyFooter />

     

      <Container fluid className="mt-4">
        <Row>
          <Col md={2} className="sidebar">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="#courses">Courses</Nav.Link>
              <Nav.Link href="#grades">Grades</Nav.Link>
              <Nav.Link href="#starStudents">Star Students</Nav.Link>
              <Nav.Link href="#activities">Student Activities</Nav.Link>
            </Nav>
          </Col>

          <Col md={10} className="content">
            <h2>Welcome to the Dashboard</h2>


            <Row className="mb-4">
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title>Courses</Card.Title>
                    <ul>
                      {courses.map((course, index) => (
                        <li key={index}>{`${course.name} (${course.code})`}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title>Grades</Card.Title>
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>Course</th>
                          <th>Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {grades.map((grade, index) => (
                          <tr key={index}>
                            <td>{grade.course}</td>
                            <td>{grade.grade}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Star Students */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Star Students</Card.Title>
                <Row>
                  {starStudents.map((student, index) => (
                    <Col md={4} key={index} className="mb-3">
                      <Card>
                        <Card.Img variant="top" src={student.image} alt={`Image of ${student.name}`} />
                        <Card.Body>
                          <Card.Title>{student.name}</Card.Title>
                          <Card.Text>Grade: {student.grade}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>

            <div main style={{marginBottom: "70px"}}>
            <Card>
              <Card.Body>
                <Card.Title>Student Activities</Card.Title>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Activity</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentActivities.map((activity, index) => (
                      <tr key={index}>
                        <td>{activity.activity}</td>
                        <td>{activity.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;