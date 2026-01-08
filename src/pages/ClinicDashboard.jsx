import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

const ClinicDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);

  // Patient Modal State
  const [isPatientModalOpen, setIsPatientModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Doctor Modal State
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  const handlePatientView = (patient) => {
    setSelectedPatient(patient);
    setIsPatientModalOpen(true);
  };

  const handleDoctorView = (doctor) => {
    setSelectedDoctor(doctor);
    setIsDoctorModalOpen(true);
  };

  const handleCreateInvoice = (e) => {
    e.preventDefault();
    alert("Invoice Created Successfully!");
    setIsInvoiceModalOpen(false);
  };

  const [scheduleData, setScheduleData] = useState([
    { id: 1, patientName: "Sarah Jenkins", patientId: "99281", doctor: "Dr. Smith", time: "09:00 AM", type: "General Checkup", status: "Confirmed", typeColor: "bg-blue-100 text-blue-700 border-blue-200", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1_tT-d18Xm-uB0Z39jG22tM6E9iJ9qN5fpZ7k8gS4w1b9xC3d6rE2yF5a4v0hB8i7lJ6m9n3o2p1q5r4s8t9u0v1w2x3y4z5a" },
    { id: 2, patientName: "Michael Ross", patientId: "99282", doctor: "Dr. Emily Chen", time: "10:30 AM", type: "Dental Cleaning", status: "Pending", typeColor: "bg-purple-100 text-purple-700 border-purple-200", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2_fG-h39Yn-vC1Z40kH33uN7F0jK0qP6gq8l9gT5x2c4d7e8f9g0h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z" },
    { id: 3, patientName: "Linda Walker", patientId: "99283", doctor: "Dr. Smith", time: "11:45 AM", type: "Prenatal Checkup", status: "Confirmed", typeColor: "bg-pink-100 text-pink-700 border-pink-200", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuE3_gH-i40Zo-wD2A51lI44vO8G1kL1rQ7hr9m0hU6y3d5e8f9g0h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z" },
    { id: 4, patientName: "David Kim", patientId: "99284", doctor: "Dr. House", time: "02:15 PM", type: "Diagnostics", status: "Confirmed", typeColor: "bg-orange-100 text-orange-700 border-orange-200", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuF4_hI-j51Ap-xE3B62mJ55wP9H2lM2sR8is0n1iV7z4e6f9g0h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z" },
  ]);

  const handleViewClick = (appointment) => {
    alert(`Viewing appointment for ${appointment.patientName}`);
  };

  const handleDeleteClick = (appointment) => {
    if (window.confirm(`Are you sure you want to delete the appointment for ${appointment.patientName}?`)) {
      setScheduleData(scheduleData.filter(item => item.id !== appointment.id));
    }
  };

  // Dummy Data for other views
  const patientsData = [
    { id: 1, name: "Sarah Jenkins", age: 32, gender: "Female", condition: "Hypertension", lastVisit: "Oct 24, 2023", status: "Active" },
    { id: 2, name: "Michael Ross", age: 45, gender: "Male", condition: "Diabetes Type 2", lastVisit: "Oct 22, 2023", status: "Active" },
    { id: 3, name: "Linda Walker", age: 28, gender: "Female", condition: "Pregnancy", lastVisit: "Oct 15, 2023", status: "Active" },
    { id: 4, name: "David Kim", age: 55, gender: "Male", condition: "Back Pain", lastVisit: "Sep 30, 2023", status: "Inactive" },
  ];

  const doctorsData = [
    { id: 1, name: "Dr. Smith", specialty: "Cardiology", patients: 154, experience: "12 years", img: "DS" },
    { id: 2, name: "Dr. Emily Chen", specialty: "Dentistry", patients: 98, experience: "8 years", img: "EC" },
    { id: 3, name: "Dr. House", specialty: "Diagnostics", patients: 45, experience: "20 years", img: "DH" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
            {/* Page Heading */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Dashboard</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">Monday, Oct 24, 2023</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-blue-500/20 transition-all">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  New Appointment
                </button>
              </div>
            </div>
            {/* KPI Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between h-40 relative group overflow-hidden transition-all duration-300">
                <div className="flex justify-between items-start z-10">
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Today Appointments</p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">12</h3>
                  </div>
                  <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">calendar_today</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-emerald-600 z-10">
                  <span className="material-symbols-outlined text-[18px]">trending_up</span>
                  <span>+2 from yesterday</span>
                </div>
                <div className="absolute -bottom-4 -right-4 size-24 bg-gradient-to-tr from-blue-50 to-transparent dark:from-blue-900/10 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
              </div>
              {/* Card 2 */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between h-40 relative group overflow-hidden transition-all duration-300">
                <div className="flex justify-between items-start z-10">
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Total Patients</p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">1,240</h3>
                  </div>
                  <div className="size-10 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600">
                    <span className="material-symbols-outlined">group</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-slate-400 z-10">
                  <span>Active patients on record</span>
                </div>
                <div className="absolute -bottom-4 -right-4 size-24 bg-gradient-to-tr from-purple-50 to-transparent dark:from-purple-900/10 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
              </div>
              {/* Card 3 */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between h-40 relative group overflow-hidden transition-all duration-300">
                <div className="flex justify-between items-start z-10">
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Today Revenue</p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">$3,450.00</h3>
                  </div>
                  <div className="size-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-slate-400 z-10">
                  <span className="material-symbols-outlined text-[16px] text-slate-400">lock</span>
                  <span>Visible to Admin</span>
                </div>
                <div className="absolute -bottom-4 -right-4 size-24 bg-gradient-to-tr from-emerald-50 to-transparent dark:from-emerald-900/10 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
              </div>
            </div>
            {/* Table Section */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden transition-all duration-300">
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Today's Schedule</h3>
                <button onClick={() => setActiveTab('schedule')} className="text-sm font-medium text-primary hover:text-blue-700 transition-colors">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Patient Name</th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Doctor</th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {scheduleData.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 bg-slate-200" style={{ backgroundImage: `url('${item.img}')` }}></div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.patientName}</p>
                              <p className="text-xs text-slate-500">ID: #{item.patientId}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <p className="text-sm text-slate-700 dark:text-slate-300">{item.doctor}</p>
                          <p className="text-xs text-slate-400">General</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                            <span className="material-symbols-outlined text-[18px] text-slate-400">schedule</span>
                            <span className="text-sm font-medium">{item.time}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-slate-600 dark:text-slate-400">{item.type}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${item.typeColor}`}>
                            <span className={`size-1.5 rounded-full ${item.status === 'Confirmed' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <button onClick={() => handleViewClick(item)} className="text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">visibility</span>
                          </button>
                          <button onClick={() => handleDeleteClick(item)} className="text-slate-400 hover:text-red-500 transition-colors ml-2">
                            <span className="material-symbols-outlined">delete</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'patients':
        return (
          <div className="max-w-[1200px] mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Patients List</h2>
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800">
                    <th className="px-6 py-4 font-semibold text-slate-500">Name</th>
                    <th className="px-6 py-4 font-semibold text-slate-500">Age/Gender</th>
                    <th className="px-6 py-4 font-semibold text-slate-500">Condition</th>
                    <th className="px-6 py-4 font-semibold text-slate-500">Last Visit</th>
                    <th className="px-6 py-4 font-semibold text-slate-500">Status</th>
                    <th className="px-6 py-4 font-semibold text-slate-500 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {patientsData.map(patient => (
                    <tr key={patient.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800">
                      <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{patient.name}</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{patient.age} / {patient.gender}</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{patient.condition}</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{patient.lastVisit}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">{patient.status}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-primary hover:underline font-medium" onClick={() => handlePatientView(patient)}>View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'doctors':
        return (
          <div className="max-w-[1200px] mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Doctors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {doctorsData.map(doctor => (
                <div key={doctor.id} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center text-center">
                  <div className="size-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold mb-4">
                    {doctor.img}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{doctor.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400">{doctor.specialty}</p>
                  <div className="mt-4 flex gap-4 text-sm text-slate-600 dark:text-slate-300">
                    <div><span className="font-bold">{doctor.patients}</span> Patients</div>
                    <div><span className="font-bold">{doctor.experience}</span> Exp.</div>
                  </div>
                  <button className="mt-6 w-full py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" onClick={() => handleDoctorView(doctor)}>View Profile</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'schedule':
        return (
          <div className="max-w-[1200px] mx-auto space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Full Schedule</h2>
              <button onClick={() => setIsAppointmentModalOpen(true)} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600">Add Appointment</button>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 dark:bg-slate-800">
                  <tr>
                    <th className="px-6 py-4">Time</th>
                    <th className="px-6 py-4">Patient</th>
                    <th className="px-6 py-4">Type</th>
                    <th className="px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.map(item => (
                    <tr key={item.id} className="border-b border-slate-100 dark:border-slate-800">
                      <td className="px-6 py-4">{item.time}</td>
                      <td className="px-6 py-4 font-medium">{item.patientName}</td>
                      <td className="px-6 py-4">{item.type}</td>
                      <td className="px-6 py-4">
                        <button className="text-primary hover:underline" onClick={() => handleViewClick(item)}>Manage</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'billing':
        return (
          <div className="max-w-[1200px] mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Billing & Invoices</h2>

            {/* Billing Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Revenue</p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$124,500</h3>
                </div>
                <div className="size-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
                  <span className="material-symbols-outlined">attach_money</span>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pending Payments</p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$3,200</h3>
                </div>
                <div className="size-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center">
                  <span className="material-symbols-outlined">pending</span>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Invoices Issued</p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">1,240</h3>
                </div>
                <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                  <span className="material-symbols-outlined">receipt</span>
                </div>
              </div>
            </div>

            {/* Invoices Table */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col">
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Invoices</h3>
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 text-sm font-medium" onClick={() => setIsInvoiceModalOpen(true)}>Create Invoice</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800">
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Invoice ID</th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Patient</th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Amount</th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Date</th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Status</th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {[
                      { id: '#INV-2023-001', patient: 'Sarah Jenkins', amount: '$150.00', date: 'Oct 24, 2023', status: 'Paid', statusColor: 'bg-emerald-100 text-emerald-700' },
                      { id: '#INV-2023-002', patient: 'Michael Ross', amount: '$350.00', date: 'Oct 22, 2023', status: 'Pending', statusColor: 'bg-orange-100 text-orange-700' },
                      { id: '#INV-2023-003', patient: 'Linda Walker', amount: '$75.00', date: 'Oct 20, 2023', status: 'Paid', statusColor: 'bg-emerald-100 text-emerald-700' },
                      { id: '#INV-2023-004', patient: 'David Kim', amount: '$200.00', date: 'Oct 18, 2023', status: 'Overdue', statusColor: 'bg-red-100 text-red-700' },
                    ].map((inv, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">{inv.id}</td>
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{inv.patient}</td>
                        <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">{inv.amount}</td>
                        <td className="px-6 py-4 text-sm text-slate-500">{inv.date}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${inv.statusColor}`}>{inv.status}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">download</span></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="max-w-[600px] mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Settings</h2>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-700 dark:text-slate-300">Dark Mode</span>
                <button
                  className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${document.documentElement.classList.contains('dark') ? 'bg-primary' : 'bg-slate-200'}`}
                  onClick={(e) => {
                    document.documentElement.classList.toggle('dark');
                    const isDark = document.documentElement.classList.contains('dark');
                    e.currentTarget.className = `w-12 h-6 rounded-full relative transition-colors duration-200 ${isDark ? 'bg-primary' : 'bg-slate-200'}`;
                    const span = e.currentTarget.querySelector('span');
                    span.style.transform = isDark ? 'translateX(24px)' : 'translateX(0px)';
                  }}
                >
                  <span
                    className="absolute left-1 top-1 size-4 bg-white rounded-full shadow-sm transition-transform duration-200"
                    style={{ transform: document.documentElement.classList.contains('dark') ? 'translateX(24px)' : 'translateX(0px)' }}
                  ></span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-700 dark:text-slate-300">Email Notifications</span>
                <button
                  className="w-12 h-6 bg-primary rounded-full relative transition-colors duration-200"
                  onClick={(e) => {
                    const span = e.currentTarget.querySelector('span');
                    const isChecked = span.style.transform === 'translateX(24px)';
                    if (isChecked) {
                      span.style.transform = 'translateX(0px)';
                      e.currentTarget.classList.remove('bg-primary');
                      e.currentTarget.classList.add('bg-slate-200');
                    } else {
                      span.style.transform = 'translateX(24px)';
                      e.currentTarget.classList.add('bg-primary');
                      e.currentTarget.classList.remove('bg-slate-200');
                    }
                  }}
                >
                  <span className="absolute left-1 top-1 size-4 bg-white rounded-full shadow-sm transition-transform duration-200" style={{ transform: 'translateX(24px)' }}></span>
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Profile Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                  <input type="text" className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" defaultValue="Dr. Alex Morgan" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                  <input type="email" className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" defaultValue="alex.morgan@evclinic.com" />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Security & Login</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Password Updated Successfully!"); }}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Current Password</label>
                  <input type="password" className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="••••••••" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">New Password</label>
                    <input type="password" className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Confirm Password</label>
                    <input type="password" className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="••••••••" />
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <button type="submit" className="px-5 py-2 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-sm">Update Password</button>
                </div>
              </form>
            </div>
          </div>
        );
      case 'help':
        return (
          <div className="max-w-[1000px] mx-auto space-y-8">
            <div className="text-center space-y-4 py-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">How can we help you?</h2>
              <div className="max-w-xl mx-auto relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                <input
                  type="text"
                  placeholder="Search for articles, guides..."
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Getting Started', icon: 'rocket_launch', desc: 'New to EV Clinic? Start here.', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
                { title: 'Billing Guide', icon: 'payments', desc: 'Manage invoices and payments.', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
                { title: 'Technical Support', icon: 'support_agent', desc: 'Solve technical issues.', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' }
              ].map((cat, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow cursor-pointer text-center group">
                  <div className={`size-14 mx-auto rounded-full ${cat.bg} ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{cat.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{cat.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  { q: "How do I reset my password?", a: "Go to Settings > Security and click on 'Change Password'. Follow the instructions sent to your email." },
                  { q: "Can I export patient data?", a: "Yes, you can export patient records from the Patients tab. Click on 'Export' in the top right corner." },
                  { q: "How do I contact support?", a: "You can reach our 24/7 support team via the 'Contact Support' button below or email support@evclinic.com." }
                ].map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-100 dark:border-slate-800 last:border-0 pb-4 last:pb-0">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">{faq.q}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center py-4">
              <p className="text-slate-500 dark:text-slate-400 text-sm">Still need help?</p>
              <button className="mt-2 text-primary font-bold hover:underline">Contact Support Team</button>
            </div>
          </div>
        );
      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased overflow-hidden h-screen flex transition-colors duration-200">
      {/* Mobile Overlay */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden" onClick={() => setIsMobileNavOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-full flex-shrink-0 transition-transform duration-300 lg:static lg:translate-x-0 w-64
        ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-8 bg-primary rounded-lg text-white">
              <span className="material-symbols-outlined text-[20px]">local_hospital</span>
            </div>
            <h1 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">EV Clinic</h1>
          </div>
          <button onClick={() => setIsMobileNavOpen(false)} className="lg:hidden text-slate-500 hover:text-slate-900">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
            { id: 'patients', label: 'Patients', icon: 'group' },
            { id: 'doctors', label: 'Doctors', icon: 'stethoscope' },
            { id: 'schedule', label: 'Schedule', icon: 'calendar_month' },
            { id: 'billing', label: 'Billing', icon: 'payments' },
            { id: 'settings', label: 'Settings', icon: 'settings' },
            { id: 'help', label: 'Help Center', icon: 'help' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setIsMobileNavOpen(false); }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors group ${activeTab === item.id
                ? 'bg-primary text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              <span className={`material-symbols-outlined text-[22px] ${activeTab !== item.id && 'group-hover:text-primary'}`}>{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-9 shrink-0" data-alt="Portrait of Dr. Alex Morgan" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBHBu3TX0IPgk2Y4HtTJQhBFoi0hm6mssv5nW0tSPgWpaPu91fwFkCOZmMg4VsUpMcvK08EdZwwuBLg87tQ-KppXg56deZfRXKWk_QKLEl-BJC_TdwAzFtVv9IHCWetV4Cy3bjSnyw1c7GUuT7ADdXRarqqSST_v-xgJDOChaTnXLul7ph9B-XtV_sghMbJkYjQkrCMgsj_laxUeGyBy5aOoFp_F9iqSMBjC-d2cJ5jx5Pg0oioljzKQuXQSEy1WS96d1ZcjOjzRg2l")' }}></div>
            <div className="flex flex-col overflow-hidden">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Dr. Alex Morgan</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Admin</p>
            </div>
            <Link to="/login" className="ml-auto text-slate-400 hover:text-red-500 transition-colors p-1 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20" title="Logout">
              <span className="material-symbols-outlined text-[20px]">logout</span>
            </Link>
          </div>
        </div>
      </aside>
      {/* Main Layout */}
      <div className="flex flex-col flex-1 h-full overflow-hidden relative">
        {/* Top Navbar */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 transition-colors duration-300">
          <button
            className="lg:hidden p-2 -ml-2 mr-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setIsMobileNavOpen(true)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="flex items-center gap-4 w-1/3">
            <label className="relative flex items-center w-full max-w-sm group">
              <span className="absolute left-3 text-slate-400 group-focus-within:text-primary transition-colors material-symbols-outlined text-[20px]">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 transition-all" placeholder="Search..." type="text" />
            </label>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:text-primary rounded-full transition-colors"><span className="material-symbols-outlined">notifications</span></button>
          </div>
        </header>
        {/* Content Scroll Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>

      <Modal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        title="New Appointment"
      >
        <form className="space-y-4" onSubmit={(e) => {
          e.preventDefault();
          alert("Appointment Created!");
          setIsAppointmentModalOpen(false);
        }}>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Patient Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="Enter patient name" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Doctor</label>
              <select className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                <option>Dr. Smith</option>
                <option>Dr. Emily Chen</option>
                <option>Dr. House</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Time</label>
              <input type="time" className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Appointment Type</label>
            <select className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white">
              <option>General Checkup</option>
              <option>Dental Cleaning</option>
              <option>Prenatal Checkup</option>
              <option>Diagnostics</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button type="button" onClick={() => setIsAppointmentModalOpen(false)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg dark:text-slate-400 dark:hover:bg-slate-800">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600">Create Appointment</button>
          </div>
        </form>
      </Modal>

      {/* Patient Modal */}
      <Modal
        isOpen={isPatientModalOpen}
        onClose={() => setIsPatientModalOpen(false)}
        title={selectedPatient ? `Patient Details: ${selectedPatient.name}` : 'Patient Details'}
        actions={<button onClick={() => setIsPatientModalOpen(false)} className="px-4 py-2 bg-primary text-white rounded-lg">Close</button>}
      >
        {selectedPatient && (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="size-16 rounded-full bg-slate-200 flex items-center justify-center text-2xl font-bold text-slate-500">
                {selectedPatient.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold dark:text-white">{selectedPatient.name}</h3>
                <p className="text-slate-500 text-sm">ID: #{selectedPatient.id}292</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase">Age / Gender</span>
                <span className="dark:text-slate-200">{selectedPatient.age} / {selectedPatient.gender}</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase">Status</span>
                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold">{selectedPatient.status}</span>
              </div>
              <div className="col-span-2">
                <span className="block text-xs font-bold text-slate-400 uppercase">Condition</span>
                <span className="dark:text-slate-200">{selectedPatient.condition}</span>
              </div>
              <div className="col-span-2">
                <span className="block text-xs font-bold text-slate-400 uppercase">Last Visit</span>
                <span className="dark:text-slate-200">{selectedPatient.lastVisit}</span>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Doctor Modal */}
      <Modal
        isOpen={isDoctorModalOpen}
        onClose={() => setIsDoctorModalOpen(false)}
        title={selectedDoctor ? `Doctor Profile: ${selectedDoctor.name}` : 'Doctor Profile'}
        actions={<button onClick={() => setIsDoctorModalOpen(false)} className="px-4 py-2 bg-primary text-white rounded-lg">Close</button>}
      >
        {selectedDoctor && (
          <div className="space-y-4 text-center">
            <div className="mx-auto size-24 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600 mb-4">
              {selectedDoctor.img}
            </div>
            <h3 className="text-2xl font-bold dark:text-white">{selectedDoctor.name}</h3>
            <p className="text-primary font-medium">{selectedDoctor.specialty}</p>

            <div className="grid grid-cols-2 gap-4 mt-6 text-left bg-slate-50 dark:bg-slate-800 p-4 rounded-xl">
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase">Patients</span>
                <span className="text-lg font-bold dark:text-white">{selectedDoctor.patients}</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase">Experience</span>
                <span className="text-lg font-bold dark:text-white">{selectedDoctor.experience}</span>
              </div>
            </div>
            <button className="w-full py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700">View Full Schedule</button>
          </div>
        )}
      </Modal>

      {/* Invoice Modal */}
      <Modal
        isOpen={isInvoiceModalOpen}
        onClose={() => setIsInvoiceModalOpen(false)}
        title="Create New Invoice"
      >
        <form onSubmit={handleCreateInvoice} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Patient Name</label>
              <input type="text" placeholder="Search patient..." className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary px-3 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Amount</label>
              <input type="number" placeholder="0.00" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Description</label>
            <textarea rows="3" placeholder="Enter invoice details" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary px-3 py-2"></textarea>
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <button type="button" onClick={() => setIsInvoiceModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Cancel</button>
            <button type="submit" className="px-4 py-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm">Issue Invoice</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ClinicDashboard;
