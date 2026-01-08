import React, { useState } from 'react';
import Modal from '../components/Modal';

const Appointments = () => {
  // State for Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isfilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Dummy Data for Appointments
  const [appointmentsData, setAppointmentsData] = useState([
    {
      id: 1,
      patientName: "Sarah Jenkins",
      patientId: "PAT-4821",
      initials: "SJ",
      bgColor: "bg-blue-100 text-primary",
      doctor: "Dr. Emily Chen",
      doctorImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVPTxbQtrmVCBizWoJmXp06J9TygKtxIk4fANWOFczXA0dv6CVeb7NP8I6aTy3Rpa0IvtRgNaVY1fHGSg4yQyKt2fF12Sq7b-YxXB9w6iQKQK-WLycCDe0-dAQvqfNz_l2Iqgn0yHmGrAoYOHSiDwtNfYSuGm8vq3UaEZFCylhAlFVnwhVRkz61c8T3_e_M1oDlqtZ5z9sk2z_-vRuhFP3VCg120BGFKMi3xaPO4ToIJG1qSVbLi5NjdLZ6T7aqQTCzcEcJZVsBF-g",
      date: "Oct 24, 2023",
      time: "10:30 AM",
      source: "Online",
      sourceIcon: "language",
      status: "Confirmed",
      statusColor: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400",
      dotColor: "bg-green-500"
    },
    {
      id: 2,
      patientName: "Michael Ross",
      patientId: "PAT-9932",
      patientImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxwgGBSsQSfKeKYXsNpw7OPGWwgP_9pL2aiFeU9HH7j9mbPjN-1RYIuQJer7JGQnn2w37hd6DTK0iIGVDXYM-NSvLwFGXpxBqDCTG3XMLT1hdmEaqESxGInVT7WcK72-EdsEOYEWPyM9yDSCvdjb1RtMyq2qajjaWXcHEDYanZL2tXNaufi4C3-Sk2PnGAc9BT8diwfLCyvCgYtrf7l649artSPyYy_0KsDPRrDmE3M_lC3ZfH9R4qz43i-VvlsbFNaVf_irdmxEex",
      doctor: "Dr. Alan Smith",
      doctorImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvmVkhXLiltLJUvwKcCS6y6GuRiHVS3yAO_8pn3HZpDmPeiM9qelBSA4E6jYcr3wMe7rSjbq3KxTXD-ftMIpsvW0vHCv0bSNNS0txg4vhvaBOvPVj4wGMrS-w5Jmws3y2ZEN9gZ402oMNjS78C3RDTPOtH_P8PyfIWWOSd9Q7z0sAsPCiZ5BlIRJm4XjSXSzvKcN1cO22s46u6Kt6AgDUSHfc7RmtllYfNR84uQON1iBiQC0kGEML0ndzLbruP9LYjUKd5dE-BaKe9",
      date: "Oct 24, 2023",
      time: "11:00 AM",
      source: "Phone Call",
      sourceIcon: "call",
      status: "Pending",
      statusColor: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400",
      dotColor: "bg-amber-500"
    },
    {
      id: 3,
      patientName: "Emma Waterson",
      patientId: "PAT-3011",
      initials: "EW",
      bgColor: "bg-purple-100 text-purple-600",
      doctor: "Dr. Emily Chen",
      doctorImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8-ex7iDi9DHKFeQb_OlKz6myaFicU-USg4snCI1TMIkPEANIy1kthqCFlATpA0gvYTTyh3t6DkN8-Yw_0TfvnD_xYXmO0wNyqdmvyVR3zc6bzP-6KmRY9KAYx6imXiT8Icv3aFdwDBrjfmclR8aqwdt4CweyI5Z7QfQde43p9ufYYC9k7oMSI1v4rpiOWreKd7NKdpgcQiE3IGf6O2ILHQNu3iV7XdMMgOHH3dK61Yd3vzZdQbg6Jbfqakdn40IQV66o2kLDgTZXK",
      date: "Oct 24, 2023",
      time: "11:30 AM",
      source: "Walk-in",
      sourceIcon: "directions_walk",
      status: "Checked-in",
      statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400",
      dotColor: "bg-blue-500"
    },
    {
      id: 4,
      patientName: "David Kim",
      patientId: "PAT-1129",
      patientImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnmBJWDeQYa2MmCCq66vV-xQ4Z4X7CMWMWm6-mcMqfdgrFwGlfIn--2-mREDLeuQVUoNOylEF2ysG2XxvEmo019opssNx8DnnAwjpFVXDHPJmrKKgPEOsIMJFlXLZ28gn1EYMHDR8tUyjKdyW5rQXK3oiyKwbFWjESZt2ZOiatIxbq33-xtUzxagFpX24qBjO_6AwPTyKsc4nXJsXWslJCoDJuW-XrYslPpIuC1jf1hMbNIGhw9p_A497hhElcF8o23XTaVN36_Wsx",
      doctor: "Dr. Alan Smith",
      doctorImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzXOO0Wwp911aXVqAKeu5izPAQ3zWDc3VQfVWGHI_CFaFNErRqC8wgJyyP_71DoHoI05FxZsYdHZhpDJtEuk-sB3I-i7oPrSBKlyKZQ6CFWYc9D8tqXDx5owFN5VXqIlKFPIePavYmlYek2x113Q9ovn-YJXVzsUQ_1vrc_kBPxD9y8pzr6s0AzZZ4BWizAHFcZVyXqUZG0zsCxWVBROc2RCC-omo3Uf6IrYDywRMBBsz78gcMLq9_mhIpaltPzH-7SODnlg0iwhuX",
      date: "Oct 24, 2023",
      time: "01:00 PM",
      source: "Online",
      sourceIcon: "language",
      status: "Confirmed",
      statusColor: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400",
      dotColor: "bg-green-500"
    },
    {
      id: 5,
      patientName: "Linda Garcia",
      patientId: "PAT-5622",
      initials: "LG",
      bgColor: "bg-orange-100 text-orange-600",
      doctor: "Dr. Sarah Lee",
      doctorImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaRbbT6yzw7m7wMzSJ1uf8H_cSJkeLBZQcv91FKnbp7mBetWMr4hoha2BiO8iEesXeZq9TLEOUmtsOjW4ztDKjQfVY8AUA1xwdvO8CSPU4whe2bSKR4KDQxOgFn6CWVQbN-huvDyxvd8imq3paHhsnG-KSqSPF6XV26_F4ntoJqwzKZINeZ8n6tudWGlI7qXxwIiCm5I2j0v_OndxySdnuOhPwULkWqRGVNKSF17Fdgk34jWsvDiWJg5xQW2MJ9doJT9KXmP1Q3C34",
      date: "Oct 24, 2023",
      time: "02:15 PM",
      source: "Phone Call",
      sourceIcon: "call",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400",
      dotColor: "bg-red-500"
    },
  ]);

  const handleDeleteClick = (appt) => {
    setSelectedAppointment(appt);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedAppointment) {
      setAppointmentsData(appointmentsData.filter(appt => appt.id !== selectedAppointment.id));
      setIsDeleteModalOpen(false);
      setSelectedAppointment(null);
    }
  };

  const handleViewClick = (appt) => {
    setSelectedAppointment(appt);
    setIsViewModalOpen(true);
  };

  const handlePrevAppointment = () => {
    if (!selectedAppointment) return;
    const idx = appointmentsData.findIndex(a => a.id === selectedAppointment.id);
    const prev = (idx - 1 + appointmentsData.length) % appointmentsData.length;
    setSelectedAppointment(appointmentsData[prev]);
  };

  const handleNextAppointment = () => {
    if (!selectedAppointment) return;
    const idx = appointmentsData.findIndex(a => a.id === selectedAppointment.id);
    const next = (idx + 1) % appointmentsData.length;
    setSelectedAppointment(appointmentsData[next]);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header */}
      <header className="flex flex-col gap-6 mb-8">
        {/* Heading & Add Button */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Appointments</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Manage schedules and patient visits.</p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg shadow-sm shadow-primary/20 transition-all font-medium text-sm"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            Add Appointment
          </button>
        </div>
        {/* Filters & Search Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-slate-800 p-2 rounded-xl">
          {/* Search */}
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-gray-400 text-[20px]">search</span>
            </div>
            <input className="block w-full pl-10 pr-3 py-2.5 border-none bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-0 text-sm" placeholder="Search by patient, doctor, or ID..." type="text" />
          </div>
          {/* Filters */}
          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <button className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 border border-transparent px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <span className="material-symbols-outlined text-[18px] text-gray-500 dark:text-gray-400">calendar_today</span>
              All Dates
              <span className="material-symbols-outlined text-[18px] text-gray-400">expand_more</span>
            </button>
            <button className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 border border-transparent px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <span className="material-symbols-outlined text-[18px] text-gray-500 dark:text-gray-400">apartment</span>
              All Clinics
              <span className="material-symbols-outlined text-[18px] text-gray-400">expand_more</span>
            </button>
            <button onClick={() => setIsFilterModalOpen(true)} className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 border border-transparent px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <span className="material-symbols-outlined text-[18px] text-gray-500 dark:text-gray-400">filter_list</span>
              Filters
              <span className="material-symbols-outlined text-[18px] text-gray-400">expand_more</span>
            </button>
          </div>
        </div>
      </header>

      {/* Table Section */}
      <div className="flex-1 overflow-auto pb-10">
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider w-[25%]">Patient Name</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Doctor</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date & Time</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Source</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {appointmentsData.length > 0 ? appointmentsData.map((appt) => (
                  <tr key={appt.id} className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {appt.patientImg ? (
                          <div className="size-9 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${appt.patientImg}')` }}></div>
                        ) : (
                          <div className={`size-9 rounded-full flex items-center justify-center font-bold text-xs ${appt.bgColor}`}>{appt.initials}</div>
                        )}
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">{appt.patientName}</span>
                          <span className="text-xs text-gray-500">#{appt.patientId}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${appt.doctorImg}')` }}></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{appt.doctor}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{appt.date}</span>
                        <span className="text-xs text-gray-500">{appt.time}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                        <span className="material-symbols-outlined text-[16px]">{appt.sourceIcon}</span>
                        <span className="text-sm">{appt.source}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${appt.statusColor}`}>
                        <span className={`size-1.5 rounded-full ${appt.dotColor}`}></span>
                        {appt.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleViewClick(appt)}
                        className="text-gray-400 hover:text-primary transition-colors p-1 rounded-md hover:bg-primary/10"
                        title="View Details"
                      >
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                      <button
                        onClick={() => handleDeleteClick(appt)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-md hover:bg-red-50 dark:hover:bg-red-900/10 ml-1"
                        title="Delete Appointment"
                      >
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-gray-500">No appointments found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Pagination Footer */}
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30 flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">Showing <span className="font-medium text-gray-900 dark:text-white">1</span> to <span className="font-medium text-gray-900 dark:text-white">{appointmentsData.length}</span> of <span className="font-medium text-gray-900 dark:text-white">42</span> results</p>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white dark:bg-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(appointmentsData.length / itemsPerPage)))}
                disabled={currentPage === Math.ceil(appointmentsData.length / itemsPerPage)}
                className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white dark:bg-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Appointment Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Schedule New Appointment"
        actions={
          <>
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                alert("Appointment created successfully!");
                setIsAddModalOpen(false);
              }}
              className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm shadow-blue-500/20 transition-colors"
            >
              Save Appointment
            </button>
          </>
        }
      >
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Patient Name</label>
              <input type="text" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" placeholder="Search patient..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Date</label>
              <input type="date" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Time</label>
              <input type="time" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Doctor</label>
              <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary">
                <option>Dr. Smith</option>
                <option>Dr. Lee</option>
                <option>Nurse Joy</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Appointment Type</label>
            <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary">
              <option>Routine Checkup</option>
              <option>Follow-up</option>
              <option>Consultation</option>
              <option>Lab Work</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Notes</label>
            <textarea className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" rows="3" placeholder="Add any notes..."></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Source</label>
              <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary">
                <option>Phone Call</option>
                <option>Online</option>
                <option>Walk-in</option>
                <option>Referral</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Status</label>
              <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary">
                <option>Pending</option>
                <option>Confirmed</option>
                <option>Checked-in</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>
        </form>
      </Modal>

      {/* View Appointment Modal */}
      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="Appointment Details"
        actions={
          <div className="flex justify-between w-full">
            <div className="flex gap-2">
              <button onClick={handlePrevAppointment} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button onClick={handleNextAppointment} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setIsViewModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Close</button>
              <button onClick={() => { setIsViewModalOpen(false); alert("Edit functionality coming soon") }} className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm">Edit</button>
            </div>
          </div>
        }
      >
        <div className="space-y-4">
          <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-700 pb-4">
            {selectedAppointment?.patientImg ? (
              <div className="size-16 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${selectedAppointment.patientImg}')` }}></div>
            ) : (
              <div className={`size-16 rounded-full flex items-center justify-center font-bold text-xl ${selectedAppointment?.bgColor}`}>{selectedAppointment?.initials}</div>
            )}
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{selectedAppointment?.patientName}</h3>
              <p className="text-sm text-slate-500">ID: #{selectedAppointment?.patientId}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase">Code</label>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{selectedAppointment?.source}</p>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase">Status</label>
              <div className="flex items-center gap-2 mt-1">
                <span className={`size-2 rounded-full ${selectedAppointment?.dotColor}`}></span>
                <p className="text-sm font-medium text-slate-900 dark:text-white">{selectedAppointment?.status}</p>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase">Date</label>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{selectedAppointment?.date}</p>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase">Time</label>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{selectedAppointment?.time}</p>
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase">Doctor</label>
            <div className="flex items-center gap-3 mt-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div className="size-10 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${selectedAppointment?.doctorImg}')` }}></div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{selectedAppointment?.doctor}</p>
            </div>
          </div>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Appointment"
        actions={
          <>
            <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Cancel</button>
            <button onClick={confirmDelete} className="px-4 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm">Delete</button>
          </>
        }
      >
        <p className="text-slate-600 dark:text-slate-400">
          Are you sure you want to delete the appointment for <span className="font-bold text-slate-900 dark:text-white">{selectedAppointment?.patientName}</span> on {selectedAppointment?.date} at {selectedAppointment?.time}? This action cannot be undone.
        </p>
      </Modal>

      {/* Filter Modal */}
      <Modal
        isOpen={isfilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        title="Filter Appointments"
        actions={
          <>
            <button onClick={() => setIsFilterModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Reset</button>
            <button onClick={() => setIsFilterModalOpen(false)} className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm">Apply Filters</button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Status</label>
            <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm">
              <option>All Statuses</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Checked-in</option>
              <option>Cancelled</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Date Range</label>
            <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm">
              <option>Today</option>
              <option>Tomorrow</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Doctor</label>
            <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm">
              <option>All Doctors</option>
              <option>Dr. Smith</option>
              <option>Dr. Lee</option>
              <option>Dr. Chen</option>
            </select>
          </div>
        </div>
      </Modal>

    </div>
  );
};
export default Appointments;
