import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './nav';
import MyFooter from './MyFooter';


function Login() {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Validate student ID and PIN
    if (!/^\d{8}$/.test(studentId)) {
      setError('Student ID must be 8 numbers');
      return;
    }

    if (!/^\d{5}$/.test(pin)) {
      setError('PIN must be 5 numbers');
      return;
    }

    // You can implement authentication logic here
    console.log('Logging in with Student ID:', studentId, 'and PIN:', pin);
    setError('');
  };

  return (
    <div>

      <MyNavbar />
      <MyFooter />
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Student Login</h3>
              {error && <div className="alert alert-danger">{error}</div>}
              <form>
                <div className="mb-3">
                  <label htmlFor="studentId" className="form-label">Student ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentId"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pin" className="form-label">PIN</label>
                  <input
                    type="password"
                    className="form-control"
                    id="pin"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button type="button" className="btn btn-primary" onClick={handleLogin}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
