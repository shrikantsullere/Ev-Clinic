import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

const Dashboard = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const kpiData = [
    {
      title: "Appointments Today",
      value: "24",
      icon: "calendar_today",
      colorClass: "bg-blue-50 dark:bg-blue-900/20 text-primary",
      trend: "2%",
      trendUp: true,
      subtext: "vs yesterday"
    },
    {
      title: "Total Patients",
      value: "1,850",
      icon: "group",
      colorClass: "bg-purple-50 dark:bg-purple-900/20 text-purple-600",
      trend: "15%",
      trendUp: true,
      subtext: "vs last month"
    },
    {
      title: "Pending Assessments",
      value: "12",
      icon: "pending_actions",
      colorClass: "bg-orange-50 dark:bg-orange-900/20 text-orange-600",
      trend: "5%",
      trendUp: false,
      subtext: "needs attention"
    },
    {
      title: "Revenue (Daily)",
      value: "$5,240",
      icon: "payments",
      colorClass: "bg-green-50 dark:bg-green-900/20 text-green-600",
      trend: "8%",
      trendUp: true,
      subtext: "vs last week"
    },
  ];

  // Dummy data for the schedule table
  const [scheduleData, setScheduleData] = useState([
    {
      id: 1,
      time: "09:00 AM",
      patientName: "Sarah Williams",
      patientId: "P-1024",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyNtZ1BymC9zs1r0JE_6QGB7_Bsu79vS6_eeV_0PgKux3QdHMS6k2m_3nJdy1GOfa4PszxDXP3EEgVkfrBlj_5RERkKpixnmsZcwPi-BL8d5pobjgZA-fe9FpCO1OBMZhSYsTl2j_rb60NqQJKiOyKvKQJTT9TCB4HFKfUzfiilDTumqbPPWccKteNZiyHAgKAlZe-I63ttKkFLiXMadzsOLO8SIr-Xt0_XiutISX_MAQ-XH61x7kXEdDVXSJo2IfuYlKwKPWB0XGX",
      doctor: "Dr. Smith",
      doctorInitials: "DS",
      doctorColor: "bg-blue-100 text-blue-700",
      type: "Routine Checkup",
      typeColor: "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-900/30",
      status: "Confirmed",
      statusColor: "bg-green-500"
    },
    {
      id: 2,
      time: "09:30 AM",
      patientName: "Michael Chen",
      patientId: "P-1025",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-XVn5Hfuz1HDGVAVOBbqg8iyx3vlqX6ReGLBKk3vLMj-It0s2Ci7ew_JlFBs2OfJJ04B2XBWE0UX7xTJ2b4lp276b8T7_IcIeNLwQlY5dl3B9GNHRsPnj-OIpkhvfPwmyBkucXA_DqCMzwG6kwSBrkXpoUrdoi6oLjRaZUqfEtllh_s_voYdxXrakoVA0ivifSkXLFQx8SruwCDURw1Ltm0vSC30gzkuU5rpRXd57Z2ZqRQ29QAQnxgLWzV3m_EK1ngnKKaT1XcOf",
      doctor: "Dr. Lee",
      doctorInitials: "DL",
      doctorColor: "bg-purple-100 text-purple-700",
      type: "Follow-up",
      typeColor: "bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-900/30",
      status: "Checked In",
      statusColor: "bg-blue-500"
    },
    {
      id: 3,
      time: "10:00 AM",
      patientName: "Emma Davis",
      patientId: "P-1026",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6o084QfkxGzybdIGgnnJ1CqCJY8AmeIlrPjpGgQ407ampZJN6c19k_DC9Z_IF6PFCsClqSeU082XuPlQGm7O0sOKHwakgi1TgVFfaC0P5DFMUpOATAqkIdKP9tGLm75N0jPbuY6Ddl7DOtOOIdx7XftbwAw99evIku99ATjIFRTf0ZpjmKQqHRyatwAZGAb5metqkT7HM0Xn9HabsmJI4GkiMvpy24-uY-NReClLJKV34Jm0khiBrE2BojmKLlSAXOEs-yaI20k1E",
      doctor: "Dr. Smith",
      doctorInitials: "DS",
      doctorColor: "bg-blue-100 text-blue-700",
      type: "Consultation",
      typeColor: "bg-green-50 text-green-700 border-green-100 dark:bg-green-900/20 dark:text-green-300 dark:border-green-900/30",
      status: "Pending",
      statusColor: "bg-yellow-500"
    },
    {
      id: 4,
      time: "10:30 AM",
      patientName: "James Wilson",
      patientId: "P-1027",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtFlwF_OJtruqcLbjF1aBAFVezvBNB3wrcJ8rhcMihz_yjPsSgOySwOwPt6PzS8gd7goucYlFWqj7DsGHZ85Ep0dq6jbsV2rrXimBBj3aCM6Jv09c2IdQRdjq9NIMZNJ3yzwxoPWxR9bMa-ynY_ui5rLsJ9nV_khM-PIWQYXkCrhTDFwkZAOoEjCWcjX24BFu13AgCyQ3Ccj5Coalb42wEpLVNsQ1C9IFTKTjuLs87grWW1kzPA64RXKO-HaIdokCfqglMJWHIX5Jg",
      doctor: "Nurse Joy",
      doctorInitials: "NJ",
      doctorColor: "bg-orange-100 text-orange-700",
      type: "Lab Work",
      typeColor: "bg-orange-50 text-orange-700 border-orange-100 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-900/30",
      status: "Confirmed",
      statusColor: "bg-green-500"
    }
  ]);

  const handleDeleteClick = (appt) => {
    setSelectedAppointment(appt);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedAppointment) {
      setScheduleData(scheduleData.filter(item => item.id !== selectedAppointment.id));
      setIsDeleteModalOpen(false);
      setSelectedAppointment(null);
    }
  };

  const handleViewClick = (appt) => {
    setSelectedAppointment(appt);
    setIsViewModalOpen(true);
  };

  return (
    <div className="max-w-[1600px] mx-auto space-y-8">
      {/* Page Heading & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Dashboard Overview</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Welcome back, Dr. Smith. Here's your clinic's activity for today.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setIsExportModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-lg">download</span>
            Export Report
          </button>
          <button
            onClick={() => setIsAppointmentModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium transition-all shadow-md shadow-blue-500/20 active:scale-95"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            New Appointment
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {kpiData.map((kpi, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{kpi.title}</p>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2 tracking-tight">{kpi.value}</h3>
              </div>
              <div className={`p-3 rounded-xl group-hover:scale-110 transition-transform ${kpi.colorClass}`}>
                <span className="material-symbols-outlined">{kpi.icon}</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className={`flex items-center text-xs font-bold px-2 py-0.5 rounded-full ${kpi.trendUp ? 'text-green-600 bg-green-50 dark:bg-green-900/30' : 'text-red-500 bg-red-50 dark:bg-red-900/30'}`}>
                <span className="material-symbols-outlined text-sm mr-1">{kpi.trendUp ? 'trending_up' : 'trending_down'}</span>
                {kpi.trend}
              </span>
              <span className="text-xs text-slate-400">{kpi.subtext}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Content Area: Schedule Table */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm overflow-hidden flex flex-col">
        {/* Table Header */}
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <span className="material-symbols-outlined">calendar_month</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Today's Schedule</h3>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <input className="pl-9 pr-3 py-1.5 text-sm bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary w-40" placeholder="Filter..." type="text" />
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg">filter_alt</span>
            </div>
            <button className="p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 transition-all">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-24">Time</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Patient Name</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Provider</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {scheduleData.length > 0 ? scheduleData.map((item) => (
                <tr key={item.id} className="group hover:bg-blue-50/30 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white whitespace-nowrap">{item.time}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3 min-w-[200px]">
                      <div
                        className="size-9 rounded-full bg-slate-200 bg-cover bg-center ring-2 ring-white dark:ring-slate-800"
                        style={{ backgroundImage: `url('${item.img}')` }}
                      ></div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">{item.patientName}</span>
                        <span className="text-xs text-slate-500">ID: #{item.patientId}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className={`size-6 rounded-full flex items-center justify-center text-[10px] font-bold ${item.doctorColor.split(' ')[0]} ${item.doctorColor.split(' ')[1]}`}>
                        {item.doctorInitials}
                      </div>
                      {item.doctor}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${item.typeColor}`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        {item.status === 'Confirmed' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>}
                        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${item.statusColor}`}></span>
                      </span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    <button
                      onClick={() => handleViewClick(item)}
                      className="text-slate-400 hover:text-primary transition-colors font-medium text-sm p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
                      title="View Details"
                    >
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                    <button
                      onClick={() => handleDeleteClick(item)}
                      className="text-slate-400 hover:text-red-600 transition-colors font-medium text-sm p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 ml-1"
                      title="Delete Appointment"
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-slate-500">
                    No appointments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer Pagination */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-800/50">
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
            Showing <span className="font-bold text-slate-700 dark:text-slate-200">1</span> to <span className="font-bold text-slate-700 dark:text-slate-200">{scheduleData.length}</span> of <span className="font-bold text-slate-700 dark:text-slate-200">24</span> results
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-sm font-medium text-slate-500 border border-slate-200 dark:border-slate-700 rounded-lg disabled:opacity-50 hover:bg-white hover:text-slate-700 hover:shadow-sm transition-all" disabled>Previous</button>
            <button className="px-3 py-1.5 text-sm font-medium text-slate-600 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white hover:text-primary hover:border-primary/30 hover:shadow-sm transition-all">Next</button>
          </div>
        </div>
      </div>

      {/* Appointment Modal */}
      <Modal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        title="Schedule New Appointment"
        actions={
          <>
            <button
              onClick={() => setIsAppointmentModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                alert("Appointment created successfully!");
                setIsAppointmentModalOpen(false);
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
        </form>
      </Modal>

      {/* View Appointment Modal */}
      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="Appointment Details"
        actions={
          <>
            <button onClick={() => setIsViewModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Close</button>
            <button onClick={() => { setIsViewModalOpen(false); alert("Editing functionality enabled") }} className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm">Edit</button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-700 pb-4">
            {selectedAppointment?.img && (
              <div className="size-16 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${selectedAppointment.img}')` }}></div>
            )}
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{selectedAppointment?.patientName}</h3>
              <p className="text-sm text-slate-500">ID: #{selectedAppointment?.patientId}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase">Type</label>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{selectedAppointment?.type}</p>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase">Status</label>
              <div className="flex items-center gap-2 mt-1">
                <span className={`size-2 rounded-full ${selectedAppointment?.statusColor}`}></span>
                <p className="text-sm font-medium text-slate-900 dark:text-white">{selectedAppointment?.status}</p>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase">Time</label>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{selectedAppointment?.time}</p>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase">Doctor</label>
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
          Are you sure you want to delete the appointment for <span className="font-bold text-slate-900 dark:text-white">{selectedAppointment?.patientName}</span> at {selectedAppointment?.time}? This action cannot be undone.
        </p>
      </Modal>

      {/* Export Report Modal */}
      <Modal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        title="Export Data"
        actions={
          <>
            <button
              onClick={() => setIsExportModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                const checked = document.querySelector('input[name="exportType"]:checked');
                const type = checked ? checked.nextElementSibling.querySelector('span').innerText : 'Report';
                // Simulate PDF generation
                const originalText = document.body.innerText;
                alert(`Generating PDF for ${type}...`);
                // In a real scenario, use window.print() or jsPDF here.
                // window.print(); 
                setTimeout(() => alert("PDF Downloaded Successfully!"), 1000);
                setIsExportModalOpen(false);
              }}
              className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm shadow-blue-500/20 transition-colors"
            >
              Export to PDF
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">Select the report type to export as PDF.</p>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
              <input type="radio" name="exportType" className="text-primary focus:ring-primary" defaultChecked />
              <div>
                <span className="block text-sm font-medium text-slate-900 dark:text-white">Appointments Report</span>
                <span className="block text-xs text-slate-500">Includes schedule and status</span>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
              <input type="radio" name="exportType" className="text-primary focus:ring-primary" />
              <div>
                <span className="block text-sm font-medium text-slate-900 dark:text-white">Patient Summary</span>
                <span className="block text-xs text-slate-500">Demographics and recent visits</span>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
              <input type="radio" name="exportType" className="text-primary focus:ring-primary" />
              <div>
                <span className="block text-sm font-medium text-slate-900 dark:text-white">Financial Overview</span>
                <span className="block text-xs text-slate-500">Revenue and billing stats</span>
              </div>
            </label>
          </div>
        </div>
      </Modal>

    </div>
  );
};
export default Dashboard;
