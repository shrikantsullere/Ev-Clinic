import React, { useState } from 'react';
import Modal from '../components/Modal';

const PatientProfile = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* TopNavBar - usually part of Layout but consistent with other pages standalone view here */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-background-light dark:bg-background-dark scroll-smooth">
        <div className="max-w-6xl mx-auto space-y-6">
          <button onClick={() => window.history.back()} className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-2">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Patients
          </button>
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">Home</a>
            <span className="material-symbols-outlined text-base mx-2">chevron_right</span>
            <a className="hover:text-primary transition-colors" href="#">Patients</a>
            <span className="material-symbols-outlined text-base mx-2">chevron_right</span>
            <span className="text-slate-900 dark:text-white font-medium">John Doe</span>
          </nav>

          {/* Patient Header Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              {/* Avatar & Info */}
              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center w-full md:w-auto">
                <div className="relative">
                  <div className="size-24 rounded-full bg-cover bg-center border-4 border-slate-50 dark:border-slate-800 shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5m_MTp4MOAotbG2moIOKuvOvIjmvl_NlHSdM_jLw9gVjZ6Kwt_XLG26Hg2V5GaoMy9tGk02CzuTqnCIIgXlig_qDDuMt0CpjsUrxgrrfaQvBuPRagO6gyYIjpOBwLdc5_iRHKLCxEN2LXwNecPOkWhztXd0YVONOanR7eVcuypXmAkaq4a16lvc1Hu_pf7SontYoPfoP9X5c-aIcfyqjoIuVXkTL2NoiUIXyQrzAAoD9rT4P-3fKdvJgjKlO3ziU-B3v2CpInolsi')" }}></div>
                  <div className="absolute bottom-1 right-1 size-5 rounded-full bg-green-500 border-2 border-white dark:border-slate-800" title="Online"></div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">John Doe</h1>
                    <div className="flex items-center gap-2 px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-900">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      <span className="text-xs font-semibold uppercase tracking-wide">Active</span>
                    </div>
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    <span>Male, 34 yrs</span>
                    <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
                    <span>ID: #PT-88392</span>
                    <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
                    <span>DOB: Jan 12, 1990</span>
                  </div>
                  {/* Quick Warning Chip */}
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900/50">
                      <span className="material-symbols-outlined text-sm">warning</span>
                      <span className="text-xs font-medium">Allergy: Penicillin</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Actions */}
              <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="flex-1 md:flex-none items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">edit</span>
                  <span>Edit Profile</span>
                </button>
                <button
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="flex-1 md:flex-none items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-white font-medium text-sm shadow-sm transition-colors shadow-blue-500/20"
                >
                  <span className="material-symbols-outlined text-lg">calendar_add_on</span>
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tabs & Content Container */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 min-h-[500px]">
            {/* Navigation Tabs - Simplified for UI demo, active state static */}
            <div className="border-b border-slate-200 dark:border-slate-700 overflow-x-auto scrollbar-hide">
              <nav aria-label="Tabs" className="flex px-6 gap-6 min-w-max">
                <button className="group relative py-4 px-1 text-sm font-semibold text-primary">
                  Info
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary rounded-t-full"></span>
                </button>
                <button className="group relative py-4 px-1 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                  Visits
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary rounded-t-full transition-all group-hover:w-full"></span>
                </button>
                <button className="group relative py-4 px-1 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                  Assessments
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary rounded-t-full transition-all group-hover:w-full"></span>
                </button>
                <button className="group relative py-4 px-1 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                  Prescriptions
                  <span className="inline-flex items-center justify-center ml-2 px-2 py-0.5 text-xs font-bold rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">3</span>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary rounded-t-full transition-all group-hover:w-full"></span>
                </button>
                <button className="group relative py-4 px-1 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                  Lab / Radiology
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary rounded-t-full transition-all group-hover:w-full"></span>
                </button>
              </nav>
            </div>
            {/* Tab Content */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* General Information */}
                <section className="col-span-1 md:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary">person</span>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">Personal Information</h3>
                  </div>
                  <div className="space-y-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700/50">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Full Name</p>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Johnathan Doe</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Date of Birth</p>
                          <p className="text-sm text-slate-900 dark:text-slate-100">Jan 12, 1990</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Age</p>
                          <p className="text-sm text-slate-900 dark:text-slate-100">34 Years</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Gender</p>
                          <p className="text-sm text-slate-900 dark:text-slate-100">Male</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Blood Type</p>
                          <p className="text-sm text-slate-900 dark:text-slate-100">O+</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Marital Status</p>
                        <p className="text-sm text-slate-900 dark:text-slate-100">Married</p>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Contact Information */}
                <section className="col-span-1 md:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary">contact_phone</span>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">Contact Details</h3>
                  </div>
                  <div className="space-y-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700/50 h-fit">
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Phone Number</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-900 dark:text-slate-100">+1 (555) 123-4567</p>
                        <button className="text-primary hover:text-blue-600"><span className="material-symbols-outlined text-lg">call</span></button>
                      </div>
                    </div>
                    <div className="border-t border-slate-200 dark:border-slate-700 my-2"></div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Email Address</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-900 dark:text-slate-100">john.doe@example.com</p>
                        <button className="text-primary hover:text-blue-600"><span className="material-symbols-outlined text-lg">mail</span></button>
                      </div>
                    </div>
                    <div className="border-t border-slate-200 dark:border-slate-700 my-2"></div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Home Address</p>
                      <p className="text-sm text-slate-900 dark:text-slate-100 leading-relaxed">
                        123 Maple Avenue, Apt 4B<br />
                        Springfield, IL 62704<br />
                        United States
                      </p>
                      <div
                        onClick={() => setIsMapModalOpen(true)}
                        className="mt-3 h-24 w-full rounded-md bg-cover bg-center overflow-hidden relative group cursor-pointer"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCE-BYkgMUXOTnW8sei42Buca72nn0p97XAUj_tcF_H5ne_KEPGpvTClNri7PYoJuq13buxiKfhSNnfdeZjd4WUhl7MKFfKdZcaTC_GcgSBlNgWZn9JiKNs2AOrs4_ToNu58KDq-3_ZImMJfPe-G79oVYB93j8xfrtJWt-oxpcS8vhj6BCBxWVMBgad4mtmgyYXRSDsuvPtP4eX5LVwSPY4HwDLefAHJql4KurXuMRMdFrvemul88gbDhu0tzZ_p0k6wX-Mn8HAY1J5')" }}
                      >
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute bottom-2 right-2 bg-white dark:bg-slate-800 px-2 py-1 rounded shadow text-xs font-bold flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">map</span>
                          Open Map
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Insurance & Emergency */}
                <section className="col-span-1 md:col-span-2 lg:col-span-1 space-y-8">
                  {/* Insurance */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="material-symbols-outlined text-primary">health_and_safety</span>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">Insurance</h3>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-blue-50/50 dark:from-primary/20 dark:to-slate-800 p-4 rounded-lg border border-primary/20">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-xs font-bold text-primary uppercase tracking-wide">Primary Provider</p>
                          <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">BlueCross BlueShield</p>
                        </div>
                        <span className="material-symbols-outlined text-primary text-3xl opacity-50">verified_user</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">Policy Number</p>
                          <p className="font-mono text-sm text-slate-900 dark:text-slate-200">BC-9928310</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">Expiration</p>
                          <p className="text-sm text-slate-900 dark:text-slate-200">12/2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Emergency Contact */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="material-symbols-outlined text-red-500">emergency</span>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">Emergency Contact</h3>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700/50">
                      <div className="flex items-start gap-3">
                        <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300">
                          <span className="material-symbols-outlined">person</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">Jane Doe</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Wife • Primary Contact</p>
                          <div className="mt-3 flex gap-2">
                            <button
                              onClick={() => setIsContactModalOpen(true)}
                              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm">call</span> Call
                            </button>
                            <button
                              onClick={() => setIsContactModalOpen(true)}
                              className="px-2 py-1.5 rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm">more_horiz</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              {/* Notes Section (Bottom) */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-4">General Notes</h3>
                <div className="w-full p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Patient prefers morning appointments. Has expressed anxiety regarding needle procedures; recommend localized numbing spray prior to any blood work.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Patient Profile"
        actions={
          <>
            <button onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Cancel</button>
            <button onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm">Save Changes</button>
          </>
        }
      >
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Name</label>
              <input type="text" defaultValue="Johnathan" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
              <input type="text" defaultValue="Doe" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
            <input type="text" defaultValue="+1 (555) 123-4567" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Address</label>
            <textarea defaultValue="123 Maple Avenue, Apt 4B, Springfield, IL 62704" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-20"></textarea>
          </div>
        </form>
      </Modal>

      {/* Book Appointment Modal */}
      <Modal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        title="Book Appointment"
        actions={
          <>
            <button onClick={() => setIsAppointmentModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Cancel</button>
            <button onClick={() => setIsAppointmentModalOpen(false)} className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm">Confirm Booking</button>
          </>
        }
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Appointment Type</label>
            <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <option>General Checkup</option>
              <option>Follow-up</option>
              <option>Lab Work</option>
              <option>Vaccination</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Provider</label>
            <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <option>Dr. Smith (General)</option>
              <option>Dr. Jones (Cardiology)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Preferred Date</label>
            <input type="date" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
          </div>
        </form>
      </Modal>

      {/* Map Modal */}
      <Modal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        title="Patient Location"
        actions={
          <button onClick={() => setIsMapModalOpen(false)} className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm">Close</button>
        }
      >
        <div className="h-64 w-full bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCE-BYkgMUXOTnW8sei42Buca72nn0p97XAUj_tcF_H5ne_KEPGpvTClNri7PYoJuq13buxiKfhSNnfdeZjd4WUhl7MKFfKdZcaTC_GcgSBlNgWZn9JiKNs2AOrs4_ToNu58KDq-3_ZImMJfPe-G79oVYB93j8xfrtJWt-oxpcS8vhj6BCBxWVMBgad4mtmgyYXRSDsuvPtP4eX5LVwSPY4HwDLefAHJql4KurXuMRMdFrvemul88gbDhu0tzZ_p0k6wX-Mn8HAY1J5')" }}>
          <span className="bg-white/90 dark:bg-slate-900/90 px-3 py-1.5 rounded shadow text-sm font-bold">123 Maple Avenue</span>
        </div>
      </Modal>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Emergency Contact"
        actions={
          <button onClick={() => setIsContactModalOpen(false)} className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm">Done</button>
        }
      >
        <div className="flex flex-col items-center justify-center p-6 space-y-4">
          <div className="size-20 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-slate-500">person</span>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Jane Doe</h3>
            <p className="text-slate-500">Wife • Primary Contact</p>
            <p className="text-lg font-mono font-bold text-primary mt-2">555-987-6543</p>
          </div>
          <div className="flex gap-4 w-full">
            <button className="flex-1 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">call</span> Call
            </button>
            <button className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">message</span> Message
            </button>
          </div>
        </div>
      </Modal>

    </div>
  );
};
export default PatientProfile;
