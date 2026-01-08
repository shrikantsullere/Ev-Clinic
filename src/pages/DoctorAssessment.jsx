import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

const DoctorAssessment = () => {
  const [isVitalsModalOpen, setIsVitalsModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // New Modals State
  const [isNewPatientModalOpen, setIsNewPatientModalOpen] = useState(false);
  const [isNewAppointmentModalOpen, setIsNewAppointmentModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // Vitals State
  const [vitals, setVitals] = useState({
    bp: "118/78",
    hr: "72",
    temp: "98.4",
    weight: "142"
  });

  const handleSaveAssessment = () => {
    alert("Assessment saved successfully!");
  };

  const handleUpdateVitals = (e) => {
    e.preventDefault();
    setIsVitalsModalOpen(false);
    // In real app, update state from form
    alert("Vitals updated!");
  };

  const handleNewPatient = (e) => {
    e.preventDefault();
    setIsNewPatientModalOpen(false);
    alert("New Patient added successfully!");
  };

  const handleNewAppointment = (e) => {
    e.preventDefault();
    setIsNewAppointmentModalOpen(false);
    alert("Appointment scheduled!");
  };

  const handleUploadDocument = (e) => {
    e.preventDefault();
    setIsUploadModalOpen(false);
    alert("Document uploaded!");
  };
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased h-screen overflow-hidden flex transition-colors duration-200">

      {/* Mobile Overlay */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden" onClick={() => setIsMobileNavOpen(false)}></div>
      )}

      {/* Sidebar Navigation */}
      <aside className={`
          fixed inset-y-0 left-0 z-30 bg-white dark:bg-[#151f2b] border-r border-slate-200 dark:border-slate-800 flex flex-col h-full flex-shrink-0 transition-transform duration-300 lg:static lg:translate-x-0 w-64
          ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
        {/* Brand Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
              <span className="material-symbols-outlined text-[20px]">local_hospital</span>
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 dark:text-white leading-tight">EV Clinic</h1>
              <p className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">System</p>
            </div>
          </div>
          <button onClick={() => setIsMobileNavOpen(false)} className="lg:hidden text-slate-500 hover:text-slate-900">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1">
          <button
            onClick={() => { setActiveTab('dashboard'); setIsMobileNavOpen(false); }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group w-full text-left ${activeTab === 'dashboard' ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300' : 'text-slate-600 hover:bg-slate-50 hover:text-primary dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'}`}
          >
            <span className={`material-symbols-outlined ${activeTab === 'dashboard' ? 'fill-1' : ''}`}>dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => { setActiveTab('patients'); setIsMobileNavOpen(false); }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group w-full text-left ${activeTab === 'patients' ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300' : 'text-slate-600 hover:bg-slate-50 hover:text-primary dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'}`}
          >
            <span className={`material-symbols-outlined ${activeTab === 'patients' ? 'fill-1' : ''}`}>group</span>
            <span className="text-sm font-medium">Patients</span>
          </button>

          <button
            onClick={() => { setActiveTab('appointments'); setIsMobileNavOpen(false); }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group w-full text-left ${activeTab === 'appointments' ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300' : 'text-slate-600 hover:bg-slate-50 hover:text-primary dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'}`}
          >
            <span className={`material-symbols-outlined ${activeTab === 'appointments' ? 'fill-1' : ''}`}>calendar_month</span>
            <span className="text-sm font-medium">Appointments</span>
          </button>

          <button
            onClick={() => { setActiveTab('documents'); setIsMobileNavOpen(false); }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group w-full text-left ${activeTab === 'documents' ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300' : 'text-slate-600 hover:bg-slate-50 hover:text-primary dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'}`}
          >
            <span className={`material-symbols-outlined ${activeTab === 'documents' ? 'fill-1' : ''}`}>description</span>
            <span className="text-sm font-medium">Documents</span>
          </button>

          <div className="my-2 border-t border-slate-100 dark:border-slate-800"></div>

          <button
            onClick={() => { setActiveTab('settings'); setIsMobileNavOpen(false); }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group w-full text-left ${activeTab === 'settings' ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300' : 'text-slate-600 hover:bg-slate-50 hover:text-primary dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'}`}
          >
            <span className={`material-symbols-outlined ${activeTab === 'settings' ? 'fill-1' : ''}`}>settings</span>
            <span className="text-sm font-medium">Settings</span>
          </button>
        </nav>
        {/* User Profile */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors relative group">
            <div className="h-9 w-9 rounded-full bg-cover bg-center border border-slate-200 dark:border-slate-700" data-alt="Profile picture of Dr. Sarah Smith" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCz8XkdmKdRpo5C2eVVrqcRHUHCQqC-H9K8Mi275KRsC5EB8B_PHYvhFD74Q4r3xu-T9PLxyvdM5bgjHFQqYZcTZFJUsYXLtDe1BB7DhpxjUMN1Kz2C6sVUBiuohd_j-pliK992M8Rr2IyOFLIhwD83WAN-ltYwKp9UNFjuuZNIBROLaz0215fY0IFReViBdPQYO2Hfc_IV0d7-DLSND51ZnNuU8p6KUaeibnqVp0OjD7LfxBcKdIJeYTQ5ove8F4OTrlmsBYVAzEoa")' }}>
            </div>
            <div className="flex flex-col min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Dr. Sarah Smith</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">General Practitioner</p>
            </div>
            <Link to="/login" className="ml-auto text-slate-400 hover:text-red-500 transition-colors p-1 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20" title="Logout">
              <span className="material-symbols-outlined text-[20px]">logout</span>
            </Link>
          </div>
        </div>
      </aside>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative z-0">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-8 bg-white/80 dark:bg-[#101822]/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 z-10 sticky top-0 transition-colors duration-300">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setIsMobileNavOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            {/* Breadcrumbs */}
            <nav className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400">
              <a className="hover:text-primary transition-colors hidden sm:block" href="#">Home</a>
              <span className="mx-2 text-slate-300 dark:text-slate-600 hidden sm:block">/</span>
              <a className="hover:text-primary transition-colors hidden sm:block" href="#">Patients</a>
              <span className="mx-2 text-slate-300 dark:text-slate-600 hidden sm:block">/</span>
              <span className="text-slate-900 dark:text-white font-semibold">Assessment</span>
            </nav>
          </div>
          {/* Top Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              System Online
            </div>
            <button className="p-2 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-full transition-all dark:hover:bg-slate-800">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </header>
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 scroll-smooth">
          <div className="max-w-6xl mx-auto flex flex-col gap-6">
            {activeTab === 'dashboard' && (
              <>
                {/* Page Heading & Metadata */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Assessment for Sarah Jenkins</h1>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold uppercase tracking-wide dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800">In Progress</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px]">badge</span>
                        ID: #99281
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px]">cake</span>
                        Apr 12, 1985 (38y)
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                      <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-200 font-medium">
                        <span className="material-symbols-outlined text-[18px]">event</span>
                        Visit Date: Nov 14, 2023
                      </span>
                    </div>
                  </div>
                  {/* Quick Actions */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsHistoryModalOpen(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm font-medium shadow-sm hover:bg-slate-50 hover:text-primary transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700">
                      <span className="material-symbols-outlined text-[20px]">history</span>
                      Patient History
                    </button>
                  </div>
                </div>
                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Left Column: Assessment Form (2/3 width) */}
                  <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Vitals Bar */}
                    <div className="bg-white dark:bg-[#151f2b] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-center justify-between overflow-x-auto transition-all duration-300">
                      <div className="flex items-center gap-8 min-w-max px-2">
                        <div className="flex flex-col gap-1">
                          <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Blood Pressure</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-bold text-slate-900 dark:text-white">{vitals.bp}</span>
                            <span className="text-xs text-slate-500">mmHg</span>
                          </div>
                        </div>
                        <div className="w-px h-10 bg-slate-100 dark:bg-slate-800"></div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Heart Rate</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-bold text-slate-900 dark:text-white">{vitals.hr}</span>
                            <span className="text-xs text-slate-500">bpm</span>
                          </div>
                        </div>
                        <div className="w-px h-10 bg-slate-100 dark:bg-slate-800"></div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Temperature</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-bold text-slate-900 dark:text-white">{vitals.temp}</span>
                            <span className="text-xs text-slate-500">°F</span>
                          </div>
                        </div>
                        <div className="w-px h-10 bg-slate-100 dark:bg-slate-800"></div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Weight</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-bold text-slate-900 dark:text-white">{vitals.weight}</span>
                            <span className="text-xs text-slate-500">lbs</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsVitalsModalOpen(true)}
                        className="ml-4 p-2 text-slate-400 hover:text-primary rounded-full hover:bg-slate-50 dark:hover:bg-slate-800">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                    </div>
                    {/* Editor Card */}
                    <div className="flex flex-col bg-white dark:bg-[#151f2b] border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden flex-1 transition-all duration-300">
                      {/* Editor Toolbar */}
                      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                        <div className="flex items-center gap-1">
                          <button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white transition-colors" title="Bold">
                            <span className="material-symbols-outlined text-[20px]">format_bold</span>
                          </button>
                          <button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white transition-colors" title="Italic">
                            <span className="material-symbols-outlined text-[20px]">format_italic</span>
                          </button>
                          <button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white transition-colors" title="List">
                            <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
                          </button>
                          <div className="w-px h-5 bg-slate-300 dark:bg-slate-700 mx-2"></div>
                          <button className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-[16px]">add</span>
                            Template
                          </button>
                        </div>
                        <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Clinical Notes</span>
                      </div>
                      {/* Text Area */}
                      <div className="relative p-6 flex-1 min-h-[400px]">
                        <textarea className="w-full h-full min-h-[400px] resize-y border-none p-0 bg-transparent focus:ring-0 text-base leading-relaxed text-slate-700 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none" placeholder={`Enter detailed patient symptoms, diagnosis, and treatment plan here...

S (Subjective): Patient reports...
O (Objective): Vitals are stable...
A (Assessment): Probable diagnosis...
P (Plan): Prescribed...`}></textarea>
                      </div>
                      {/* Bottom Actions */}
                      <div className="bg-slate-50 dark:bg-[#111923] px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <span className="flex items-center gap-2 text-xs text-slate-400">
                          <span className="material-symbols-outlined text-[16px]">cloud_done</span>
                          Draft saved 2m ago
                        </span>
                        <div className="flex items-center gap-3">
                          <button className="px-5 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-sm transition-all dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 dark:hover:border-slate-700">
                            Cancel
                          </button>
                          <button
                            onClick={handleSaveAssessment}
                            className="px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:shadow-blue-500/40 active:translate-y-0.5 transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">save</span>
                            Save Assessment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Right Column: Sidebar (1/3 width) */}
                  <div className="flex flex-col gap-6">
                    {/* Previous Visits Widget */}
                    <div className="bg-white dark:bg-[#151f2b] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">Previous Visits</h3>
                        <a className="text-xs text-primary hover:underline" href="#">View All</a>
                      </div>
                      <div className="relative flex flex-col gap-0 border-l border-slate-100 dark:border-slate-700 ml-2">
                        {/* Visit Item 1 */}
                        <div className="group relative pl-6 pb-6">
                          <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-slate-200 border-2 border-white dark:border-[#151f2b] dark:bg-slate-600 group-hover:bg-primary transition-colors"></span>
                          <div className="flex flex-col gap-1 cursor-pointer p-2 -ml-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <span className="text-xs font-medium text-slate-400">Oct 24, 2023</span>
                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Follow-up Checkup</p>
                            <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">Patient reported improvement in symptoms. Continue current medication.</p>
                          </div>
                        </div>
                        {/* Visit Item 2 */}
                        <div className="group relative pl-6">
                          <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-slate-200 border-2 border-white dark:border-[#151f2b] dark:bg-slate-600 group-hover:bg-primary transition-colors"></span>
                          <div className="flex flex-col gap-1 cursor-pointer p-2 -ml-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <span className="text-xs font-medium text-slate-400">Sep 12, 2023</span>
                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Annual Physical</p>
                            <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">Routine blood work ordered. Vaccination updated.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Active Meds Widget */}
                    <div className="bg-white dark:bg-[#151f2b] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">Active Meds</h3>
                        <button className="text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[20px]">add_circle</span>
                        </button>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 dark:bg-slate-800/30 dark:border-slate-700/50">
                          <span className="material-symbols-outlined text-primary text-[24px]">pill</span>
                          <div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">Lisinopril</p>
                            <p className="text-xs text-slate-500">10mg • Once Daily</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 dark:bg-slate-800/30 dark:border-slate-700/50">
                          <span className="material-symbols-outlined text-primary text-[24px]">pill</span>
                          <div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">Metformin</p>
                            <p className="text-xs text-slate-500">500mg • With Meals</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Attachments Widget */}
                    <div className="bg-white dark:bg-[#151f2b] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">Recent Labs</h3>
                      </div>
                      <div className="flex flex-col gap-2">
                        <a className="flex items-center gap-3 p-2 rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group" href="#">
                          <div className="flex items-center justify-center w-8 h-8 rounded bg-red-50 text-red-500 dark:bg-red-900/20">
                            <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-sm font-medium text-slate-700 group-hover:text-primary dark:text-slate-300 dark:group-hover:text-white truncate">Blood_Panel_Oct24.pdf</span>
                            <span className="text-xs text-slate-400">2.4 MB • Oct 24</span>
                          </div>
                        </a>
                        <a className="flex items-center gap-3 p-2 rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group" href="#">
                          <div className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-blue-500 dark:bg-blue-900/20">
                            <span className="material-symbols-outlined text-[18px]">image</span>
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-sm font-medium text-slate-700 group-hover:text-primary dark:text-slate-300 dark:group-hover:text-white truncate">XRay_Chest_Sep12.jpg</span>
                            <span className="text-xs text-slate-400">1.8 MB • Sep 12</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'patients' && (
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Patients Directory</h2>
                  <button onClick={() => setIsNewPatientModalOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    New Patient
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <th className="p-3 text-sm font-semibold text-slate-500">Name</th>
                        <th className="p-3 text-sm font-semibold text-slate-500">ID</th>
                        <th className="p-3 text-sm font-semibold text-slate-500">Age</th>
                        <th className="p-3 text-sm font-semibold text-slate-500">Condition</th>
                        <th className="p-3 text-sm font-semibold text-slate-500">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                      <tr>
                        <td className="p-3 text-slate-900 dark:text-white font-medium">Sarah Jenkins</td>
                        <td className="p-3 text-slate-500">#99281</td>
                        <td className="p-3 text-slate-500">38</td>
                        <td className="p-3"><span className="px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold dark:bg-blue-900/30 dark:text-blue-300">Hypertension</span></td>
                        <td className="p-3"><button className="text-primary hover:underline font-medium">View</button></td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-900 dark:text-white font-medium">Michael Chen</td>
                        <td className="p-3 text-slate-500">#99282</td>
                        <td className="p-3 text-slate-500">45</td>
                        <td className="p-3"><span className="px-2 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold dark:bg-green-900/30 dark:text-green-300">Routine Checkup</span></td>
                        <td className="p-3"><button className="text-primary hover:underline font-medium">View</button></td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-900 dark:text-white font-medium">Emily Davis</td>
                        <td className="p-3 text-slate-500">#99283</td>
                        <td className="p-3 text-slate-500">29</td>
                        <td className="p-3"><span className="px-2 py-1 rounded-full bg-yellow-50 text-yellow-700 text-xs font-bold dark:bg-yellow-900/30 dark:text-yellow-300">Flu Symptoms</span></td>
                        <td className="p-3"><button className="text-primary hover:underline font-medium">View</button></td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-900 dark:text-white font-medium">Robert Wilson</td>
                        <td className="p-3 text-slate-500">#99284</td>
                        <td className="p-3 text-slate-500">52</td>
                        <td className="p-3"><span className="px-2 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold dark:bg-red-900/30 dark:text-red-300">Diabetes T2</span></td>
                        <td className="p-3"><button className="text-primary hover:underline font-medium">View</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'appointments' && (
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Upcoming Appointments</h2>
                  <button onClick={() => setIsNewAppointmentModalOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    New Appointment
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border rounded-lg dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">SJ</div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">Sarah Jenkins</p>
                        <p className="text-sm text-slate-500">General Checkup • 09:00 AM</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold dark:bg-blue-900/30 dark:text-blue-300">Today</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border rounded-lg dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">MC</div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">Michael Chen</p>
                        <p className="text-sm text-slate-500">Follow-up • 10:30 AM</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold dark:bg-green-900/30 dark:text-green-300">Confirmed</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border rounded-lg dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">ED</div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">Emily Davis</p>
                        <p className="text-sm text-slate-500">Consultation • 01:15 PM</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold dark:bg-yellow-900/30 dark:text-yellow-300">Pending</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border rounded-lg dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">RW</div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">Robert Wilson</p>
                        <p className="text-sm text-slate-500">Lab Review • 03:00 PM</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold dark:bg-green-900/30 dark:text-green-300">Confirmed</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Patient Documents</h2>
                  <button onClick={() => setIsUploadModalOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">upload</span>
                    Upload File
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                      <span className="material-symbols-outlined text-[24px]">picture_as_pdf</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Lab_Results_Oct2023.pdf</p>
                      <p className="text-xs text-slate-500">2.4 MB • Uploaded on Oct 24, 2023</p>
                    </div>
                  </div>
                  <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <span className="material-symbols-outlined text-[24px]">image</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">XRay_Chest_Sep2023.jpg</p>
                      <p className="text-xs text-slate-500">1.8 MB • Uploaded on Sep 12, 2023</p>
                    </div>
                  </div>
                  <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <span className="material-symbols-outlined text-[24px]">description</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Prescription_Nov2023.docx</p>
                      <p className="text-xs text-slate-500">0.5 MB • Uploaded on Nov 02, 2023</p>
                    </div>
                  </div>
                  <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <span className="material-symbols-outlined text-[24px]">dataset</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Holter_Monitor_Data.csv</p>
                      <p className="text-xs text-slate-500">4.2 MB • Uploaded on Aug 15, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 max-w-2xl">
                <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 text-primary rounded border-slate-300 focus:ring-primary" defaultChecked />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Email notifications for new appointments</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 text-primary rounded border-slate-300 focus:ring-primary" defaultChecked />
                        <span className="text-sm text-slate-700 dark:text-slate-300">SMS alerts for emergency cases</span>
                      </label>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Display</h3>
                    <div className="flex items-center gap-4">
                      <button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm font-medium">Light Mode</button>
                      <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium">Dark Mode</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* New Patient Modal */}
            <Modal
              isOpen={isNewPatientModalOpen}
              onClose={() => setIsNewPatientModalOpen(false)}
              title="Add New Patient"
            >
              <form onSubmit={handleNewPatient} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                  <input type="text" className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="e.g. John Doe" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Age</label>
                    <input type="number" className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="30" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Gender</label>
                    <select className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Condition/Reason</label>
                  <input type="text" className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="e.g. Routine Checkup" />
                </div>
                <div className="flex justify-end gap-3 mt-6">
                  <button type="button" onClick={() => setIsNewPatientModalOpen(false)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg dark:text-slate-400 dark:hover:bg-slate-800">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600">Add Patient</button>
                </div>
              </form>
            </Modal>

            {/* New Appointment Modal */}
            <Modal
              isOpen={isNewAppointmentModalOpen}
              onClose={() => setIsNewAppointmentModalOpen(false)}
              title="Schedule New Appointment"
            >
              <form onSubmit={handleNewAppointment} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Patient Name</label>
                  <input type="text" className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="Search patient..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Date</label>
                    <input type="date" className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
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
                    <option>Follow-up</option>
                    <option>Urgent Care</option>
                    <option>Lab Review</option>
                  </select>
                </div>
                <div className="flex justify-end gap-3 mt-6">
                  <button type="button" onClick={() => setIsNewAppointmentModalOpen(false)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg dark:text-slate-400 dark:hover:bg-slate-800">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600">Schedule</button>
                </div>
              </form>
            </Modal>

            {/* Upload Modal */}
            <Modal
              isOpen={isUploadModalOpen}
              onClose={() => setIsUploadModalOpen(false)}
              title="Upload Document"
            >
              <form onSubmit={handleUploadDocument} className="space-y-4">
                <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[48px] text-slate-400 mb-2">cloud_upload</span>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-500 mt-1">PDF, JPG, PNG or DOCX (MAX. 10MB)</p>
                  <input type="file" className="hidden" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Document Name (Optional)</label>
                  <input type="text" className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="e.g. Lab Results Sep 2023" />
                </div>
                <div className="flex justify-end gap-3 mt-6">
                  <button type="button" onClick={() => setIsUploadModalOpen(false)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg dark:text-slate-400 dark:hover:bg-slate-800">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600">Upload</button>
                </div>
              </form>
            </Modal>

            {/* Vitals Modal */}
            <Modal
              isOpen={isVitalsModalOpen}
              onClose={() => setIsVitalsModalOpen(false)}
              title="Update Patient Vitals"
            >
              <form onSubmit={handleUpdateVitals} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Blood Pressure</label>
                    <input type="text" defaultValue={vitals.bp} className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Heart Rate</label>
                    <input type="text" defaultValue={vitals.hr} className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Temperature</label>
                    <input type="text" defaultValue={vitals.temp} className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Weight</label>
                    <input type="text" defaultValue={vitals.weight} className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                  </div>
                </div>
                <div className="flex justify-end gap-3 mt-6">
                  <button type="button" onClick={() => setIsVitalsModalOpen(false)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg dark:text-slate-400 dark:hover:bg-slate-800">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600">Update</button>
                </div>
              </form>
            </Modal>

            {/* History Modal */}
            <Modal
              isOpen={isHistoryModalOpen}
              onClose={() => setIsHistoryModalOpen(false)}
              title="Patient History"
            >
              <div className="space-y-4">
                <div className="p-3 border rounded-lg dark:border-slate-700">
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-slate-900 dark:text-white">General Checkup</span>
                    <span className="text-sm text-slate-500">Oct 24, 2023</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Regular checkup. Patient reported good health.</p>
                </div>
                <div className="p-3 border rounded-lg dark:border-slate-700">
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-slate-900 dark:text-white">Flu Vaccine</span>
                    <span className="text-sm text-slate-500">Sep 12, 2023</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Administered annual flu shot.</p>
                </div>
                <div className="flex justify-end mt-4">
                  <button onClick={() => setIsHistoryModalOpen(false)} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300">Close</button>
                </div>
              </div>
            </Modal>

            {/* Footer Spacer */}
            <div className="h-10"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorAssessment;
