import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClinicSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-50 antialiased min-h-screen flex flex-col transition-colors duration-200">
      {/* Top Navigation Bar */}
      <header className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <div className="text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">local_hospital</span>
              </div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">EV Clinic System</h1>
            </div>
            {/* User/Logout Section */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[20px]">account_circle</span>
                <span>Dr. Sarah Mitchell</span>
              </div>
              <button
                onClick={() => navigate('/login')}
                className="flex items-center justify-center h-9 px-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full mx-auto space-y-10">
          {/* Page Heading */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Select Your Workspace
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Choose the dashboard you want to access.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Main Dashboard */}
            <div className="group relative flex flex-col bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                  <span className="material-symbols-outlined text-2xl">dashboard</span>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Main Dashboard</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Overview, Analytics & Reports</p>
              </div>
              <div className="mt-auto">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none dark:ring-offset-slate-900"
                >
                  Enter
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 2: Dashboard Screen */}
            <div className="group relative flex flex-col bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600 dark:text-purple-400">
                  <span className="material-symbols-outlined text-2xl">grid_view</span>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Dashboard Screen</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Daily Operations & Schedule</p>
              </div>
              <div className="mt-auto">
                <button
                  onClick={() => navigate('/clinic-dashboard')}
                  className="w-full flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none dark:ring-offset-slate-900"
                >
                  Enter
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 3: Doctor Assignment */}
            <div className="group relative flex flex-col bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg text-teal-600 dark:text-teal-400">
                  <span className="material-symbols-outlined text-2xl">clinical_notes</span>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Doctor Assignment</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Patient Checkups & Forms</p>
              </div>
              <div className="mt-auto">
                <button
                  onClick={() => navigate('/doctor-assessment')}
                  className="w-full flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none dark:ring-offset-slate-900"
                >
                  Enter
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer / Help */}
          <div className="flex flex-col items-center justify-center pt-8 border-t border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Can't find your workspace?</p>
            <a className="text-sm font-semibold text-primary hover:text-blue-600 flex items-center gap-1" href="#">
              Contact System Administrator
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClinicSelection;
