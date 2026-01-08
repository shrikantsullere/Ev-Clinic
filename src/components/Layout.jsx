import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import evLogo from '../assets/ev_clinic_logo.png';

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobileSidebar = () => {
    setIsMobileOpen(false);
  };

  const navItems = [
    { name: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
    { name: 'Appointments', icon: 'calendar_month', path: '/appointments' },
    { name: 'Patients', icon: 'group', path: '/patients' },
    { name: 'Assessments', icon: 'assignment_turned_in', path: '/assessments' },
    { name: 'Billing', icon: 'receipt_long', path: '/billing' },
    { name: 'Reports', icon: 'bar_chart', path: '/reports' },
    { name: 'Radiology', icon: 'science', path: '/radiology' },
    { name: 'Settings', icon: 'settings', path: '/settings' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-hidden h-screen flex font-display relative">

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={closeMobileSidebar}
        ></div>
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between h-full transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-full lg:z-auto
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          ${isCollapsed ? 'lg:w-20' : 'lg:w-64 w-64'}
        `}
      >
        <div>
          {/* Logo Section */}
          <div className="h-16 flex items-center gap-3 px-6 border-b border-slate-100 dark:border-slate-800 overflow-hidden relative">
            <img src={evLogo} alt="EV Clinic" className="h-10 w-auto object-contain" />
            {(!isCollapsed || isMobileOpen) && (
              <h1 className="text-slate-900 dark:text-white text-base font-bold leading-none truncate whitespace-nowrap lg:block">
                EV CLINIC<br /><span className="text-xs font-normal text-slate-500">SYSTEM</span>
              </h1>
            )}
            {/* Close button for mobile */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-900 lg:hidden"
              onClick={closeMobileSidebar}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex flex-col gap-1 p-4 overflow-y-auto overflow-x-hidden h-[calc(100vh-8rem)]">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMobileSidebar}
                className={({ isActive }) => `
                  flex items-center gap-3 px-3 py-2.5 rounded-lg border-l-[3px] transition-all group whitespace-nowrap
                  ${isActive
                    ? 'bg-primary/10 text-primary border-primary font-semibold'
                    : 'border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white font-medium'
                  }
                `}
              >
                <span className={`material-symbols-outlined ${location.pathname === item.path ? 'filled' : ''}`}>
                  {item.icon}
                </span>
                {(!isCollapsed || isMobileOpen) && <span className="text-sm truncate lg:block">{item.name}</span>}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer / Collapse (Desktop only) */}
        <div className="hidden lg:block p-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={toggleSidebar}
            className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <span className={`material-symbols-outlined ${isCollapsed ? '' : 'rotate-180'} transition-transform duration-300`}>
              keyboard_double_arrow_right
            </span>
            {!isCollapsed && <span className="text-sm font-medium truncate">Collapse Sidebar</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col h-full relative overflow-hidden bg-background-light dark:bg-background-dark w-full">
        {/* Top Header */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-6 shrink-0 z-10 shadow-sm relative">

          <div className="flex items-center gap-3">
            {/* Mobile Menu Button - Visible only on mobile/tablet */}
            <button
              className="lg:hidden p-2 -ml-2 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"
              onClick={toggleMobileSidebar}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>

            {/* Clinic Name Switcher */}
            <div className="flex items-center gap-2 cursor-pointer p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="size-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-lg">domain</span>
              </div>
              <div className="flex flex-col hidden sm:flex">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-tight">EV Clinic System</span>
                <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">Main Branch</span>
              </div>
              <span className="material-symbols-outlined text-slate-400 text-lg ml-1 hidden sm:block">expand_more</span>
            </div>
          </div>

          {/* Right: Search, Notifications, Profile */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
            {/* Search Bar - Hidden on mobile */}
            <div className="relative hidden md:block group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl group-focus-within:text-primary transition-colors">search</span>
              <input
                className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-64 lg:w-80 transition-all"
                placeholder="Search patients, doctors..."
                type="text"
              />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-1 sm:gap-3">
              <button className="relative p-2 text-slate-500 hover:text-primary hover:bg-blue-50 dark:hover:bg-slate-800 rounded-full transition-all">
                <span className="material-symbols-outlined text-2xl">notifications</span>
                <span className="absolute top-2 right-2 size-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
              </button>
              <button className="p-2 text-slate-500 hover:text-primary hover:bg-blue-50 dark:hover:bg-slate-800 rounded-full transition-all md:hidden">
                <span className="material-symbols-outlined text-2xl">search</span>
              </button>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3 pl-2 sm:pl-4 lg:pl-6 border-l border-slate-200 dark:border-slate-700">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">Dr. Jane</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Admin</p>
              </div>
              <div className="group relative cursor-pointer">
                <div
                  className="size-10 rounded-full bg-slate-200 bg-cover bg-center border-2 border-white dark:border-slate-800 shadow-sm"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHSJN8VYBtLfrF0tFxPZHXSFWnmSXjdWo5MqYCE7Aa_yGpQFAi8fRhnkaZpBiHbfafDq6H3nPsUg6h8mpPGuh-xG8gnhCSkVxm3qJev5o6HJql3gXASEtFChUEVBdBUAfovMQsRClslQm6hXYBlYrJUibaXpPqS91pYZEpPvOvx-B-fAxifVmIdPkXwDqr1T7Et40TlSyT99yGYkao44EtAwTbPo7NuaVfVp4LYoxVDrOPiNgmB0BsUH7wGdOiRmVFJcoLnXhqv-z6')" }}
                ></div>
                <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
              </div>
              <NavLink to="/login" className="text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors ml-2 hidden sm:block" title="Logout">
                <span className="material-symbols-outlined">logout</span>
              </NavLink>
            </div>
          </div>
        </header>

        {/* Main Scrollable Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
