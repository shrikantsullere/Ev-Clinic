import React from 'react';

const BookingPage = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-2xl">local_hospital</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">EV Clinic System</span>
            </div>
            <button className="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              <span className="material-symbols-outlined mr-2 text-lg">call</span>
              <span>Clinic Contact</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6">
        <div className="w-full max-w-2xl">
          {/* Booking Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700">
            {/* Card Header */}
            <div className="relative h-32 bg-primary/10 dark:bg-primary/5 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-white dark:bg-slate-700 p-1 shadow-sm flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined text-4xl text-primary">medical_services</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">Dr. Smith's Family Practice</h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium flex items-center mt-1">
                      <span className="material-symbols-outlined text-sm mr-1">location_on</span>
                      Downtown Medical Center, Suite 402
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-8">
              <div className="text-center sm:text-left border-b border-slate-100 dark:border-slate-700 pb-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">New Appointment</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Please fill out the form below to schedule your visit.</p>
              </div>
              {/* Form */}
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Personal Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <label className="block group">
                    <span className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Full Name</span>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <span className="material-symbols-outlined text-xl">person</span>
                      </span>
                      <input className="block w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white pl-10 focus:border-primary focus:ring-primary sm:text-sm h-11 transition-shadow" placeholder="Jane Doe" type="text" />
                    </div>
                  </label>
                  <label className="block group">
                    <span className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Phone Number</span>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <span className="material-symbols-outlined text-xl">phone</span>
                      </span>
                      <input className="block w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white pl-10 focus:border-primary focus:ring-primary sm:text-sm h-11 transition-shadow" placeholder="(555) 123-4567" type="tel" />
                    </div>
                  </label>
                </div>
                {/* Date Selection */}
                <div>
                  <span className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Select Date</span>
                  <div className="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700/30 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <button className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-500 dark:text-slate-400">
                        <span className="material-symbols-outlined">chevron_left</span>
                      </button>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">October 2023</span>
                      <button className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-500 dark:text-slate-400">
                        <span className="material-symbols-outlined">chevron_right</span>
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center mb-2">
                      {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                        <span key={day} className="text-xs font-medium text-slate-400 dark:text-slate-500 py-1">{day}</span>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {/* Empty days */}
                      <span className="py-2"></span>
                      <span className="py-2"></span>
                      {/* Days */}
                      <button className="py-2 rounded-lg text-sm text-slate-400 hover:bg-slate-50 dark:text-slate-500 dark:hover:bg-slate-600 disabled cursor-not-allowed">1</button>
                      <button className="py-2 rounded-lg text-sm text-slate-400 hover:bg-slate-50 dark:text-slate-500 dark:hover:bg-slate-600 disabled cursor-not-allowed">2</button>
                      <button className="py-2 rounded-lg text-sm text-slate-700 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-primary/20">3</button>
                      <button className="py-2 rounded-lg text-sm text-slate-700 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-primary/20">4</button>
                      <button className="py-2 rounded-lg text-sm text-slate-400 hover:bg-slate-50 dark:text-slate-500 dark:hover:bg-slate-600 disabled cursor-not-allowed">5</button>
                      <button className="py-2 rounded-lg text-sm text-slate-400 hover:bg-slate-50 dark:text-slate-500 dark:hover:bg-slate-600 disabled cursor-not-allowed">6</button>
                      <button className="py-2 rounded-lg text-sm text-slate-700 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-primary/20">7</button>
                      <button className="py-2 rounded-lg text-sm text-slate-700 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-primary/20">8</button>
                      <button className="py-2 rounded-lg text-sm text-slate-700 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-primary/20">9</button>
                      <button className="py-2 rounded-lg text-sm bg-primary text-white shadow-md shadow-primary/30 font-semibold">10</button>
                      <button className="py-2 rounded-lg text-sm text-slate-700 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-primary/20">11</button>
                      <button className="py-2 rounded-lg text-sm text-slate-700 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-primary/20">12</button>
                    </div>
                  </div>
                </div>
                {/* Time Selection */}
                <div>
                  <span className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Select Time</span>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    <button className="px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:border-primary transition-all bg-white dark:bg-slate-700/30" type="button">09:00 AM</button>
                    <button className="px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:border-primary transition-all bg-white dark:bg-slate-700/30" type="button">09:30 AM</button>
                    <button className="px-4 py-2.5 rounded-lg bg-primary text-white shadow-md shadow-primary/25 border border-primary text-sm font-medium transition-all" type="button">10:00 AM</button>
                    <button className="px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:border-primary transition-all bg-white dark:bg-slate-700/30" type="button">10:30 AM</button>
                    <button className="px-4 py-2.5 rounded-lg border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-medium text-slate-400 dark:text-slate-600 cursor-not-allowed decoration-slice line-through" disabled type="button">11:00 AM</button>
                    <button className="px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:border-primary transition-all bg-white dark:bg-slate-700/30" type="button">11:30 AM</button>
                    <button className="px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:border-primary transition-all bg-white dark:bg-slate-700/30" type="button">01:00 PM</button>
                    <button className="px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:border-primary transition-all bg-white dark:bg-slate-700/30" type="button">01:30 PM</button>
                  </div>
                </div>
                {/* Submit Button Area */}
                <div className="pt-4">
                  <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-4 px-6 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-blue-600 transition-colors focus:outline-none focus:ring-4 focus:ring-primary/20" type="submit">
                    <span>Book Appointment</span>
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </button>
                  <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    <span>Your data is distinctively secure and encrypted.</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
        <div className="container mx-auto px-4">
          <p>© 2023 EV Clinic System. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-primary transition-colors" href="#">Help Center</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookingPage;
