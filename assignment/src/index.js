import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import InstructorContact from './InstructorContact';
import Login from './Login';
import MissingGradeForm from './MissingGradeForm';
import Dashboard from './Dashboard';
import GradeReport from './GradeReport';
import HelpAndSupport from './HelpAndSupport';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/InstructorContact' element={<InstructorContact />} />
        <Route path='/MissingGradeForm' element={<MissingGradeForm />} />
        <Route path='/GradeReport' element={<GradeReport />} />
        <Route path='/HelpAndSupport' element={<HelpAndSupport />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
