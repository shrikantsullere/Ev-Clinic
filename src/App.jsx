import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Appointments from './pages/Appointments';
import Assessments from './pages/Assessments';
import Billing from './pages/Billing';

import Reports from './pages/Reports';
import PatientProfile from './pages/PatientProfile';
import BookingPage from './pages/BookingPage';
import ClinicSelection from './pages/ClinicSelection';
import Radiology from './pages/Radiology';
import ClinicDashboard from './pages/ClinicDashboard';
import DoctorAssessment from './pages/DoctorAssessment';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/select-clinic" element={<ClinicSelection />} />
        <Route path="/clinic-dashboard" element={<ClinicDashboard />} />
        <Route path="/doctor-assessment" element={<DoctorAssessment />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/:id" element={<PatientProfile />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/billing" element={<Billing />} />

          <Route path="/reports" element={<Reports />} />
          <Route path="/radiology" element={<Radiology />} />
          {/* Placeholder routes for other menu items to prevent errors */}
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
