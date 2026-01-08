import React, { useState } from 'react';
import Modal from '../components/Modal';

const Reports = () => {
  // Modal State
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isDoctorsModalOpen, setIsDoctorsModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Dummy Data for Daily Revenue
  const revenueData = [
    { date: "Oct 24, 2023", appointments: 42, revenue: 5240.00 },
    { date: "Oct 23, 2023", appointments: 38, revenue: 4850.00 },
    { date: "Oct 22, 2023", appointments: 24, revenue: 3120.00 },
    { date: "Oct 21, 2023", appointments: 51, revenue: 6450.00 },
    { date: "Oct 20, 2023", appointments: 45, revenue: 5900.00 },
    { date: "Oct 19, 2023", appointments: 40, revenue: 5100.00 },
  ];

  // Dummy Data for Doctor Performance
  const doctorPerformanceData = [
    { name: "Dr. S. Wilson", dept: "Cardiology", patients: 142, revenue: 42800, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCShabElSikri-skYrzLqPgrB0P_mzD5SSBXy_CDAMKWrjHGumbh4amVXd1IPDngd824hkkTTT4ZHW9O81dWyD1Dw8f9GSQDioYoz1S0Cv4LKqDUoLcUWi_douMVUYaf2NS_Bmf79d0fe-PzDDGvbPDJTCS4FLAZIJRCwoLdlh7GRQxcfpUUUduDe213Gq3ohPCmqSWRF7DfjLcZraeoMyyUY65-x3JHOaqSYMdHE35U0voB_bG3WOizJn4EdmHyVzN729eeDkF_kuE" },
    { name: "Dr. J. Chen", dept: "Pediatrics", patients: 185, revenue: 38400, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJrQ0fRNA-yG5tyPrfOqM4Gx__AWhJzyvAe99RwtPvMs65RmQDOI4dNwXzmYDl4kO2VZZ-Vp6QKh9PqDXoxT0DcjCDXRt1J1XiamrCkmLun2_xlnKfjVKGV8i3xso7xu20YlmEOv9mE1FY4ggKgkOAoulG7UuuJp2WoZcYM8Q57CWLXvKy59NeLTJUvC9JhS7CGmw5jATePoxJFwHzQX6_70VNI5OMVyoJRv3MwqKl_3GF-EduM2Wy1jFnsOk5dAD2_NlSOexqYu-B" },
    { name: "Dr. E. Roberts", dept: "Neurology", patients: 98, revenue: 28900, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBy46FkiKTBwJYEaLLENbkz9Kdz9LHXFk-SFUkQhMwcJcuO6d8yh9LDR4fq2x9XbAksUKtLifqQfToio3eCtwnxjCenar-5UkoSyvvSRjCwKSu9JKKd9SHQSii7mJhp9Xrq8gtKcXyPJRj0RGqMtYire05Rrg-D3volwvYWrT8P8pxJjIokAYKbuP9KIaLVjConIKJ4uHGvcWF2S4VibcQy750rjtzL4fnoEOukal2OQ7y0CoE6Q4NKmDrnZyX7ro7jMYiFR8vjcfAv" },
    { name: "Dr. M. Chang", dept: "Orthopedics", patients: 110, revenue: 26500, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJvh5lI7bKRJZFPKX7VzaekgUUpk_HAbQ3wjc71ltB22Jg6-yDCFT8V566n4Lb05XjOf0fOQyjqH_MZQuReO44D2X9xYAnFA2pmacig3yQxk0DtlKbm6Ozfrv3ggPAw9xUjYAa_XEderjh8Y_XsfmtU7ZNMJ0a6vRwmcRIoINcKQ7IGBmB5IPEyOU2pwayunp1ZYiUQPh9wgB5F5ExKTzSFaFph7oQHzb_4BxgUPufE2JLo3sDyt-fq3ee9vioYzhH2niteCFSMVYD" },
    { name: "Dr. L. Patel", dept: "Dermatology", patients: 156, revenue: 24100, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADEXA8UEjWhVWR7N2_s_mHtYKS71ARxcwJyp2tP2nzoxPsG-vd0xMWlWz_VvllUKu1pkA86BmyK6jnP6o59fahlYEkmq9QCcOtk81Kuon_z_FPv97o_XUOk-gOP8f-JDeLXIzOo3gC38hYHRCTzyv8pF7j57CNks37bcO9GF4OPr5nvYYiP09Gu5ZVbjDzSIAXWsTgIcHCuc1rEld23Upvhi1-1wcuMVyc0m0fhbdDjedEtMiMyemn_R0b5yojJ9M85QleI1_6AZFH" },
  ];

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header - usually layout/dashboard handles this but for standalone scroll we might need wrapper spacing */}
      <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark relative p-6 md:p-10 scroll-smooth">
        <div className="flex flex-col w-full max-w-[1200px] mx-auto gap-8">
          {/* Page Heading & Controls */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Financial Reports</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base">Overview of clinic revenue performance and metrics.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <label className="sr-only" htmlFor="date-range">Date Range</label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 text-[20px]">calendar_today</span>
                </div>
                <select className="pl-10 pr-10 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full shadow-sm" id="date-range">
                  <option>Last 30 Days</option>
                  <option>This Quarter</option>
                  <option>This Year</option>
                  <option>Custom Range</option>
                </select>
              </div>
              <button
                onClick={() => setIsExportModalOpen(true)}
                className="bg-primary hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                Export
              </button>
            </div>
          </header>

          {/* Stats Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Stat 1 */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Revenue</p>
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> 12.5%
                </div>
              </div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">$124,500</p>
              <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">Compared to $110,650 last period</p>
            </div>
            {/* Stat 2 */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Appointments</p>
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> 5.2%
                </div>
              </div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">842</p>
              <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">Compared to 800 last period</p>
            </div>
            {/* Stat 3 */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Doctors</p>
                <div className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">remove</span> 0%
                </div>
              </div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">12</p>
              <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">Staff capacity at 100%</p>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Table 1: Daily Revenue Breakdown */}
            <section className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/20">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">Daily Revenue Breakdown</h2>
                <button
                  onClick={() => setIsExportModalOpen(true)}
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 uppercase tracking-wider text-xs font-semibold">
                    <tr>
                      <th className="px-6 py-3" scope="col">Date</th>
                      <th className="px-6 py-3 text-center" scope="col">Appointments</th>
                      <th className="px-6 py-3 text-right" scope="col">Revenue</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {revenueData.map((item, index) => (
                      <tr key={index} className="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors cursor-default">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{item.date}</td>
                        <td className="px-6 py-4 text-center text-slate-600 dark:text-slate-300">{item.appointments}</td>
                        <td className="px-6 py-4 text-right font-medium text-slate-900 dark:text-white">${item.revenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/20">
                <button
                  onClick={() => setIsHistoryModalOpen(true)}
                  className="text-primary text-sm font-medium hover:text-blue-700 flex items-center justify-center gap-1 w-full"
                >
                  View Full History
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </section>

            {/* Table 2: Performance by Physician */}
            <section className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/20">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">Performance by Physician</h2>
                <button
                  onClick={() => setIsFilterModalOpen(true)}
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">filter_list</span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 uppercase tracking-wider text-xs font-semibold">
                    <tr>
                      <th className="px-6 py-3" scope="col">Doctor</th>
                      <th className="px-6 py-3" scope="col">Dept.</th>
                      <th className="px-6 py-3 text-right" scope="col">Patients</th>
                      <th className="px-6 py-3 text-right" scope="col">Revenue</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {doctorPerformanceData.map((doc, index) => (
                      <tr key={index} className="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors cursor-default group">
                        <td className="px-6 py-3">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" style={{ backgroundImage: `url('${doc.img}')` }}></div>
                            <span className="font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors">{doc.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-3 text-slate-500 dark:text-slate-400">{doc.dept}</td>
                        <td className="px-6 py-3 text-right text-slate-600 dark:text-slate-300">{doc.patients}</td>
                        <td className="px-6 py-3 text-right font-medium text-slate-900 dark:text-white">${doc.revenue.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/20">
                <button
                  onClick={() => setIsDoctorsModalOpen(true)}
                  className="text-primary text-sm font-medium hover:text-blue-700 flex items-center justify-center gap-1 w-full"
                >
                  View All Doctors
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Export Report Modal */}
      <Modal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        title="Export Reports"
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
                alert("Generating PDF Report...");
                setTimeout(() => alert("PDF Report Downloaded!"), 1000);
                setIsExportModalOpen(false);
              }}
              className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm shadow-blue-500/20 transition-colors"
            >
              Export as PDF
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">Choose the detailed reports you wish to export.</p>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary" />
              <span className="text-sm text-slate-900 dark:text-white">Revenue Summary</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary" />
              <span className="text-sm text-slate-900 dark:text-white">Doctor Performance</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
              <input type="checkbox" className="rounded text-primary focus:ring-primary" />
              <span className="text-sm text-slate-900 dark:text-white">Appointment Statistics</span>
            </label>
          </div>
        </div>
      </Modal>

      {/* Full History Modal */}
      <Modal
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
        title="Full Revenue History"
        actions={
          <button onClick={() => setIsHistoryModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Close</button>
        }
      >
        <div className="space-y-4">
          {/* Extended Dummy Data */}
          {[...revenueData, ...revenueData].map((item, index) => (
            <div key={index} className="flex justify-between items-center p-3 border-b border-slate-100 dark:border-slate-700 last:border-0">
              <span className="text-sm font-medium text-slate-900 dark:text-white">{item.date}</span>
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900 dark:text-white">${item.revenue.toLocaleString()}</p>
                <p className="text-xs text-slate-500">{item.appointments} appts</p>
              </div>
            </div>
          ))}
        </div>
      </Modal>

      {/* Filter Modal */}
      <Modal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        title="Filter Doctors"
        actions={
          <>
            <button onClick={() => setIsFilterModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Reset</button>
            <button onClick={() => setIsFilterModalOpen(false)} className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm">Apply Filters</button>
          </>
        }
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Department</label>
            <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm">
              <option>All Departments</option>
              <option>Cardiology</option>
              <option>Pediatrics</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Performance Metric</label>
            <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm">
              <option>Revenue (High to Low)</option>
              <option>Patients Seen (High to Low)</option>
            </select>
          </div>
        </form>
      </Modal>

      {/* All Doctors Modal */}
      <Modal
        isOpen={isDoctorsModalOpen}
        onClose={() => setIsDoctorsModalOpen(false)}
        title="All Doctors Performance"
        actions={
          <button onClick={() => setIsDoctorsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Close</button>
        }
      >
        <div className="space-y-3">
          {/* Extended list */}
          {[...doctorPerformanceData, ...doctorPerformanceData].map((doc, idx) => (
            <div key={idx} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" style={{ backgroundImage: `url('${doc.img}')` }}></div>
              <div className="flex-1">
                <p className="font-bold text-slate-900 dark:text-white">{doc.name}</p>
                <p className="text-xs text-slate-500">{doc.dept}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900 dark:text-white">${doc.revenue.toLocaleString()}</p>
                <p className="text-xs text-slate-500">{doc.patients} patients</p>
              </div>
            </div>
          ))}
        </div>
      </Modal>

    </div>
  );
};
export default Reports;
