import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900/50 p-6 md:p-10 overflow-y-auto">
      <div className="mx-auto max-w-4xl w-full flex flex-col gap-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Settings</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your application preferences and account settings.</p>
        </div>

        {/* General Settings */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-700">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">General Preferences</h2>
          </div>
          <div className="p-6 flex flex-col gap-6">
            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Dark Mode</h3>
                <p className="text-xs text-slate-500">Enable dark theme for the application.</p>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${darkMode ? 'bg-primary' : 'bg-slate-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="w-full h-px bg-slate-100 dark:bg-slate-700"></div>

            {/* Notifications Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Push Notifications</h3>
                <p className="text-xs text-slate-500">Receive alerts for new appointments and updates.</p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${notifications ? 'bg-primary' : 'bg-slate-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="w-full h-px bg-slate-100 dark:bg-slate-700"></div>

            {/* Email Alerts Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Email Alerts</h3>
                <p className="text-xs text-slate-500">Receive summaries and reports via email.</p>
              </div>
              <button
                onClick={() => setEmailAlerts(!emailAlerts)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${emailAlerts ? 'bg-primary' : 'bg-slate-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${emailAlerts ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>


          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-700">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Account Info</h2>
          </div>
          <div className="p-6 flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                <input type="text" defaultValue="Dr. Sarah Smith" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm focus:ring-primary focus:border-primary px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                <input type="email" defaultValue="sarah.smith@evclinic.com" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm focus:ring-primary focus:border-primary px-3 py-2" />
              </div>
            </div>
            <button className="mt-2 w-max px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors">Update Account</button>
          </div>
        </div>

        {/* Security / Password Reset */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden mb-10">
          <div className="p-6 border-b border-slate-100 dark:border-slate-700">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Security & Login</h2>
          </div>
          <div className="p-6">
            <form className="max-w-md flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert("Password updated successfully!"); }}>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Current Password</label>
                <input type="password" placeholder="••••••••" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm focus:ring-primary focus:border-primary px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">New Password</label>
                <input type="password" placeholder="Enter new password" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm focus:ring-primary focus:border-primary px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Confirm New Password</label>
                <input type="password" placeholder="Confirm new password" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm focus:ring-primary focus:border-primary px-3 py-2" />
              </div>
              <div className="flex items-center gap-4 mt-2">
                <button type="submit" className="px-4 py-2 bg-slate-900 dark:bg-slate-600 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-500 transition-colors">Update Password</button>
                <a href="#" className="text-sm text-primary hover:underline">Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>

      </div >
    </div >
  );
};

export default Settings;
