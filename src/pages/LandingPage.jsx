import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import evLogo from '../assets/ev_clinic_logo.png';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Booking Logic
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [selectedClinic, setSelectedClinic] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedCheckup, setSelectedCheckup] = useState("");

  const clinics = ["Downtown Medical Center", "Sunrise Health Clinic", "Westside Family Care", "City Central Hospital"];
  const doctors = ["Dr. Sarah Smith (General)", "Dr. John Doe (Cardiology)", "Dr. Emily White (Dentist)", "Dr. Michael Brown (Pediatrics)"];
  const checkupTypes = ["General Consultation", "Dental Checkup", "Cardiology Screening", "Annual Physical", "Follow-up", "Lab Testing"];

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => {
    const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return day === 0 ? 6 : day - 1; // Adjust for Monday start
  };

  const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const daysInMonth = getDaysInMonth(currentDate);
  const startingDayIndex = getFirstDayOfMonth(currentDate);

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM"
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <img src={evLogo} alt="EV Clinic System" className="h-8 w-auto object-contain" />
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">EV Clinic System</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors" href="#">Home</a>
            <button onClick={() => setIsBookingModalOpen(true)} className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">Book Appointment</button>
            <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors" href="#features">Features</a>
            <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors" href="#about">About</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden md:flex h-9 items-center justify-center rounded-lg border border-primary bg-transparent px-4 text-sm font-bold text-primary hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
              Login
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-4 shadow-lg absolute w-full left-0 top-16 z-50 animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-4">
              <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors" href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors" href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors" href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              <Link to="/login" className="flex h-10 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-auto">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="flex flex-col gap-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary w-fit mx-auto lg:mx-0">
                  <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  Now supporting telemedicine
                </div>
                <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl leading-[1.1]">
                  All-in-One Clinic &amp; <br className="hidden lg:block" /> Hospital System
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
                  Streamline your medical facility operations. Manage patients, appointments, doctors, and billing in one seamless, secure platform designed for modern healthcare.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <button onClick={() => setIsBookingModalOpen(true)} className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                    Book Appointment
                  </button>
                  <Link to="/login" className="flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700 px-8 text-base font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    Clinic Login
                  </Link>
                </div>
                <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 dark:text-slate-500">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    <span>14-day free trial</span>
                  </div>
                </div>
              </div>
              <div className="relative lg:h-auto w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700" data-alt="Dashboard interface showing medical charts and patient data statistics">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                {/* Decorative Abstract UI placeholder */}
                <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpbmljfGVufDB8fDB8fHww')" }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-16 bg-background-secondary-light dark:bg-background-secondary-dark" id="features">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Our Services</h2>
              <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">Comprehensive Healthcare Modules</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Tailored solutions for every department in your medical facility, ensuring smooth workflows and better patient care.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 */}
              <div className="group relative flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-primary dark:bg-primary/20">
                  <span className="material-symbols-outlined">dentistry</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Dental Clinic</h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Complete dental charting, tooth history visualization, and appointment scheduling tools specific to dental practices.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="group relative flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-primary dark:bg-primary/20">
                  <span className="material-symbols-outlined">directions_walk</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Physiotherapy</h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Track rehabilitation progress, manage therapy sessions, and generate automated progress reports for patients.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="group relative flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-primary dark:bg-primary/20">
                  <span className="material-symbols-outlined">stethoscope</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">General Practice</h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Streamline daily patient consultations with digital prescriptions, history taking, and integrated vitals tracking.
                  </p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="group relative flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-primary dark:bg-primary/20">
                  <span className="material-symbols-outlined">biotech</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Lab Management</h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Efficient sample tracking, automated result reporting, and seamless integration with diagnostic machines.
                  </p>
                </div>
              </div>
              {/* Card 5 */}
              <div className="group relative flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-primary dark:bg-primary/20">
                  <span className="material-symbols-outlined">radiology</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Radiology</h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Manage imaging requests, integrate with PACS, and maintain organized digital archives of X-rays and scans.
                  </p>
                </div>
              </div>
              {/* Card 6 */}
              <div className="group relative flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-primary dark:bg-primary/20">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Billing &amp; Invoicing</h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Automated billing cycles, insurance claim management, and comprehensive financial reporting for your clinic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 lg:py-24" id="about">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl bg-background-secondary-light dark:bg-background-secondary-dark lg:grid lg:grid-cols-2">
              <div className="px-6 py-12 sm:px-12 md:py-16 lg:px-16 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px w-8 bg-primary"></div>
                  <span className="text-sm font-bold uppercase tracking-wider text-primary">About Exclusive Vision</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-6">
                  Empowering Healthcare with Innovation
                </h2>
                <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
                  We empower healthcare providers with seamless digital solutions designed to improve patient care and optimize hospital operations. Our platform is built on trust, efficiency, and deep medical expertise, ensuring your facility runs like clockwork.
                </p>
                <div>
                  <button className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors">
                    Learn more about our mission
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
              <div className="relative h-64 w-full sm:h-80 lg:h-full bg-cover bg-center min-h-[400px]" data-alt="Doctor using a tablet in a modern medical office setting" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDiKVmNmPpEXCDZNAD1wdXggIzO5r42wiLMezKOEujRr2kOwcQVpLvDsLjUvPeRs8uD-bjLU6EodkP_bMKe71Ueiv-keCOTVDQw8gsFtpesd6RMLh6INnmhjq7QEdWBBYHlcxRrpLim-csAwMFDvakJZ7IR6orYaqAXrINicEmJa_fGPtZR-wBs5NB1iLhLySNsDBefL8SSKj2NQdxXMvh87ZyGwAJziN1c_sEFQAREqXLsuhVkgVQlGEBQWsYTTiS0TMJgC8dx-PsR')" }}>
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Bar */}
        <section className="py-12 border-t border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl mb-4">Ready to modernize your clinic?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">Join hundreds of clinics that trust Exclusive Vision for their daily operations.</p>
            <div className="flex justify-center gap-4">
              <button className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all">
                Get Started Now
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background-secondary-light dark:bg-background-secondary-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                <div className="flex size-6 items-center justify-center rounded bg-primary text-white text-xs">
                  <span className="material-symbols-outlined !text-sm">local_hospital</span>
                </div>
                <span className="text-base font-bold">Exclusive Vision</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Advanced healthcare management solutions for forward-thinking medical institutions.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Product</h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
                <li><a className="hover:text-primary transition-colors" href="#">Features</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Integrations</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Updates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Support</h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
                <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Documentation</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Contact</h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined !text-lg text-slate-400">mail</span>
                  hello@exclusivevision.com
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined !text-lg text-slate-400">call</span>
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined !text-lg text-slate-400">location_on</span>
                  123 Health Tech Blvd, CA
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-500">
              © 2024 EV Clinic System. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-500">
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsBookingModalOpen(false)}>
          <div className="w-full max-w-2xl bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative h-32 bg-primary/10 dark:bg-primary/5 w-full overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-white dark:bg-slate-700 p-1 shadow-sm flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined text-4xl text-primary">calendar_add_on</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">Book Appointment</h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium flex items-center mt-1">
                      Schedule a visit with our specialists
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-8">
              <div className="text-center sm:text-left border-b border-slate-100 dark:border-slate-700 pb-6 flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">New Appointment</h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">Please fill out the form below to schedule your visit.</p>
                </div>
                <button onClick={() => setIsBookingModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"><span className="material-symbols-outlined">close</span></button>
              </div>
              {/* Form */}
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Booking Submitted!"); setIsBookingModalOpen(false); }}>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <label className="block group">
                    <span className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Select Clinic</span>
                    <div className="relative">
                       <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <span className="material-symbols-outlined text-xl">apartment</span>
                      </span>
                      <select 
                        value={selectedClinic}
                        onChange={(e) => setSelectedClinic(e.target.value)}
                        className="block w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white pl-10 focus:border-primary focus:ring-primary sm:text-sm h-11 transition-shadow appearance-none"
                      >
                        <option value="">Choose a clinic...</option>
                        {clinics.map(clinic => (
                          <option key={clinic} value={clinic}>{clinic}</option>
                        ))}
                      </select>
                      <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                        <span className="material-symbols-outlined text-xl">expand_more</span>
                      </span>
                    </div>
                  </label>
                  <label className="block group">
                    <span className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Select Doctor</span>
                     <div className="relative">
                       <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <span className="material-symbols-outlined text-xl">stethoscope</span>
                      </span>
                      <select 
                        value={selectedDoctor}
                        onChange={(e) => setSelectedDoctor(e.target.value)}
                         className="block w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white pl-10 focus:border-primary focus:ring-primary sm:text-sm h-11 transition-shadow appearance-none"
                      >
                        <option value="">Choose a doctor...</option>
                        {doctors.map(doctor => (
                          <option key={doctor} value={doctor}>{doctor}</option>
                        ))}
                      </select>
                       <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                        <span className="material-symbols-outlined text-xl">expand_more</span>
                      </span>
                    </div>
                  </label>
                   <div className="sm:col-span-2">
                    <label className="block group">
                      <span className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Reason for Visit / Checkup Type</span>
                       <div className="relative">
                         <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <span className="material-symbols-outlined text-xl">healing</span>
                        </span>
                        <select 
                          value={selectedCheckup}
                          onChange={(e) => setSelectedCheckup(e.target.value)}
                           className="block w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white pl-10 focus:border-primary focus:ring-primary sm:text-sm h-11 transition-shadow appearance-none"
                        >
                          <option value="">Select checkup type...</option>
                          {checkupTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                         <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                          <span className="material-symbols-outlined text-xl">expand_more</span>
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                {/* Date Selection */}
                <div>
                  <span className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Select Date</span>
                  <div className="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700/30 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <button type="button" onClick={handlePrevMonth} className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-500 dark:text-slate-400">
                        <span className="material-symbols-outlined">chevron_left</span>
                      </button>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                      </span>
                      <button type="button" onClick={handleNextMonth} className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-500 dark:text-slate-400">
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
                      {Array.from({ length: startingDayIndex }).map((_, i) => (
                        <span key={`empty-${i}`} className="py-2"></span>
                      ))}
                      {/* Days */}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                        const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                        const isToday = new Date().toDateString() === date.toDateString();

                        return (
                          <button
                            key={day}
                            type="button"
                            onClick={() => setSelectedDate(date)}
                            className={`py-2 rounded-lg text-sm transition-colors ${isSelected
                                ? 'bg-primary text-white shadow-md shadow-primary/30 font-semibold'
                                : 'text-slate-700 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-primary/20'
                              } ${isToday && !isSelected ? 'border border-primary text-primary' : ''}`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* Time Selection */}
                <div>
                  <span className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Select Time</span>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${selectedTime === time
                            ? 'bg-primary text-white shadow-md shadow-primary/25 border-primary'
                            : 'border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:border-primary bg-white dark:bg-slate-700/30'
                          }`}
                      >
                        {time}
                      </button>
                    ))}
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
      )}
    </div>
  );
};

export default LandingPage;
