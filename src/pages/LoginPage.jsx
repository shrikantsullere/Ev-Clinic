import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import evLogo from '../assets/ev_clinic_logo.png';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder for login logic - directly navigate to clinic selection
    navigate('/select-clinic');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased text-text-main dark:text-slate-100 min-h-screen flex flex-col overflow-x-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[80px]"></div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-4 z-10 w-full">
        {/* Main Card */}
        <div className="w-full max-w-[480px] bg-white dark:bg-slate-900 rounded-xl shadow-soft dark:shadow-none border border-border-subtle/30 dark:border-slate-800 overflow-hidden relative">
          {/* Top decorative line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60"></div>
          <div className="px-8 pt-10 pb-8 sm:px-12 sm:pt-12 sm:pb-10">
            {/* Logo / Header Section */}
            <div className="flex flex-col items-center justify-center mb-8">
              <img src={evLogo} alt="EV Clinic System" className="h-16 w-auto object-contain mb-4" />
              <h2 className="text-2xl font-bold text-text-main dark:text-white tracking-tight">EV Clinic System</h2>
              <p className="text-text-muted dark:text-slate-400 text-sm font-medium mt-1">Efficient Clinic Management</p>
            </div>
            {/* Headline */}
            <div className="mb-8 text-center">
              <h3 className="text-text-main dark:text-slate-100 text-xl font-bold leading-tight">Sign in to your account</h3>
            </div>
            {/* Form */}
            <form className="flex flex-col gap-5" onSubmit={handleLogin}>
              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-text-main dark:text-slate-200 text-sm font-medium leading-normal" htmlFor="email">Email address</label>
                <div className="relative">
                  <input className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-text-main dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-border-subtle dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary h-12 placeholder:text-text-muted dark:placeholder:text-slate-500 p-[15px] text-base font-normal leading-normal" id="email" placeholder="name@clinic.com" type="email" />
                </div>
              </div>
              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-text-main dark:text-slate-200 text-sm font-medium leading-normal" htmlFor="password">Password</label>
                  <a className="text-xs font-semibold text-primary hover:text-blue-600 transition-colors" href="#">Forgot password?</a>
                </div>
                <div className="flex w-full items-stretch rounded-lg relative">
                  <input
                    className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-text-main dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-border-subtle dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary h-12 placeholder:text-text-muted dark:placeholder:text-slate-500 p-[15px] pr-12 text-base font-normal leading-normal"
                    id="password"
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                  />
                  <div className="absolute right-0 top-0 h-full flex items-center pr-3">
                    <button
                      className="text-text-muted hover:text-text-main dark:text-slate-500 dark:hover:text-slate-300 transition-colors p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      type="button"
                      onClick={togglePasswordVisibility}
                    >
                      <span className="material-symbols-outlined flex items-center justify-center" style={{ fontSize: "20px" }}>
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Submit Button */}
              <div className="pt-2">
                <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-md shadow-primary/20">
                  <span className="truncate">Login</span>
                </button>
              </div>
            </form>
          </div>
          {/* Card Footer */}
          <div className="px-8 py-5 bg-slate-50 dark:bg-slate-800/80 border-t border-border-subtle/50 dark:border-slate-800 flex justify-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-text-muted" style={{ fontSize: "18px" }}>headset_mic</span>
              <p className="text-sm text-text-muted dark:text-slate-400">
                Need help? <a className="font-semibold text-primary hover:underline ml-1" href="#">Contact Support</a>
              </p>
            </div>
          </div>
        </div>
        {/* Footer outside card */}
        <div className="mt-8 text-center max-w-sm mx-auto">
          <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
            © 2024 EV Clinic System.<br className="sm:hidden" /> All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-3">
            <a className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors" href="#">Privacy Policy</a>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <a className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
