import React, { useState } from 'react';
import Modal from '../components/Modal';

const Radiology = () => {
  const [isNewRequestModalOpen, setIsNewRequestModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isViewReportModalOpen, setIsViewReportModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Dummy Data for Lab Requests
  const requests = [
    {
      id: 1,
      patientName: "Sarah Jenkins",
      patientId: "4922",
      initials: "SJ",
      color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
      testName: "Lipid Profile",
      icon: "hematology",
      prescribedBy: "Dr. Smith",
      date: "Oct 24, 2023",
      status: "Pending",
      statusColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
      statusIconColor: "bg-amber-500",
      action: "Upload Report",
      actionType: "upload"
    },
    {
      id: 2,
      patientName: "Mike Ross",
      patientId: "8831",
      initials: "MR",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      testName: "X-Ray Chest PA",
      icon: "radiology",
      prescribedBy: "Dr. House",
      date: "Oct 23, 2023",
      status: "Uploaded",
      statusColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
      statusIconColor: "bg-emerald-500",
      action: "View Report",
      actionType: "view"
    },
    {
      id: 3,
      patientName: "Jessica Pearson",
      patientId: "1029",
      initials: "JP",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
      testName: "Biopsy Analysis",
      icon: "biotech",
      prescribedBy: "Dr. Zane",
      date: "Oct 22, 2023",
      status: "Critical",
      statusColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
      statusIcon: "priority_high",
      action: "View Report",
      actionType: "view"
    },
    {
      id: 4,
      patientName: "Harvey Specter",
      patientId: "7721",
      initials: "HS",
      color: "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
      testName: "Complete Blood Count",
      icon: "water_drop",
      prescribedBy: "Dr. Bennett",
      date: "Oct 25, 2023",
      status: "Pending",
      statusColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
      statusIconColor: "bg-amber-500",
      action: "Upload Report",
      actionType: "upload"
    },
    {
      id: 5,
      patientName: "Donna Paulsen",
      patientId: "3312",
      initials: "DP",
      color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
      testName: "MRI Brain Scan",
      icon: "neurology",
      prescribedBy: "Dr. Wheeler",
      date: "Oct 26, 2023",
      status: "Pending",
      statusColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
      statusIconColor: "bg-amber-500",
      action: "Upload Report",
      actionType: "upload"
    }
  ];

  const handleUploadClick = (req) => {
    setSelectedRequest(req);
    setIsUploadModalOpen(true);
  };

  const handleViewClick = (req) => {
    setSelectedRequest(req);
    setIsViewReportModalOpen(true);
  };

  const handleNextRequest = () => {
    if (!selectedRequest) return;
    const currentIndex = requests.findIndex(r => r.id === selectedRequest.id);
    const nextIndex = (currentIndex + 1) % requests.length;
    setSelectedRequest(requests[nextIndex]);
  };

  const handlePrevRequest = () => {
    if (!selectedRequest) return;
    const currentIndex = requests.findIndex(r => r.id === selectedRequest.id);
    const prevIndex = (currentIndex - 1 + requests.length) % requests.length;
    setSelectedRequest(requests[prevIndex]);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header - assuming Layout handles top nav, but this page has title inside content in HTML. 
                 The HTML provided has a Sidebar and Main Content. Reusing our Layout, we just need the inner content.
             */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:px-12 scroll-smooth">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Lab & Radiology Requests</h2>
              <p className="text-slate-500 dark:text-slate-400">Manage diagnostic tests, view status, and upload patient reports.</p>
            </div>
            <button
              onClick={() => setIsNewRequestModalOpen(true)}
              className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm shadow-primary/30 flex items-center gap-2 transition-all active:scale-95 w-fit"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              New Request
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400 font-medium text-sm">Pending Tests</span>
                <span className="material-symbols-outlined text-orange-500 bg-orange-50 dark:bg-orange-900/20 p-1.5 rounded-md">hourglass_top</span>
              </div>
              <div className="flex items-end gap-2 mt-2">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">12</span>
                <span className="text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-1.5 flex items-center">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> 2%
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400 font-medium text-sm">Completed Today</span>
                <span className="material-symbols-outlined text-primary bg-blue-50 dark:bg-blue-900/20 p-1.5 rounded-md">check_circle</span>
              </div>
              <div className="flex items-end gap-2 mt-2">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">28</span>
                <span className="text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-1.5 flex items-center">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> 12%
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400 font-medium text-sm">Critical Results</span>
                <span className="material-symbols-outlined text-red-500 bg-red-50 dark:bg-red-900/20 p-1.5 rounded-md">warning</span>
              </div>
              <div className="flex items-end gap-2 mt-2">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">3</span>
                <span className="text-slate-400 text-xs font-medium mb-1.5">Needs review</span>
              </div>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-white dark:bg-slate-800 p-2 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            {/* Search Bar */}
            <div className="relative flex-1 w-full md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400">search</span>
              </div>
              <input className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary sm:text-sm" placeholder="Search by patient name or ID..." type="text" />
            </div>
            {/* Chips / Filters */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 px-2 md:px-0">
              <button className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors whitespace-nowrap border border-transparent hover:border-slate-200 dark:hover:border-slate-600">
                Status: All
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors whitespace-nowrap border border-transparent hover:border-slate-200 dark:hover:border-slate-600">
                Type: All Tests
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors whitespace-nowrap border border-transparent hover:border-slate-200 dark:hover:border-slate-600">
                Date: Last 7 Days
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
            </div>
          </div>

          {/* Main Data Table */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Patient Details</th>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Test Name</th>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Prescribed By</th>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Date</th>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  {requests.map(req => (
                    <tr key={req.id} className="group hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className={`h-9 w-9 rounded-full ${req.color} flex items-center justify-center text-sm font-bold`}>{req.initials}</div>
                          <div>
                            <p className="font-medium text-slate-900 dark:text-white text-sm">{req.patientName}</p>
                            <p className="text-xs text-slate-500">ID: #{req.patientId}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <span className="p-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-500">
                            <span className="material-symbols-outlined text-[18px]">{req.icon}</span>
                          </span>
                          <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{req.testName}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">{req.prescribedBy}</td>
                      <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">{req.date}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${req.statusColor}`}>
                          {req.statusIcon ? (
                            <span className="material-symbols-outlined text-[14px]">{req.statusIcon}</span>
                          ) : (
                            <span className={`w-1.5 h-1.5 rounded-full ${req.statusIconColor}`}></span>
                          )}
                          {req.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        {req.actionType === 'upload' ? (
                          <button
                            onClick={() => handleUploadClick(req)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-blue-600 transition-colors shadow-sm shadow-primary/20"
                          >
                            <span className="material-symbols-outlined text-[16px]">upload_file</span>
                            {req.action}
                          </button>
                        ) : (
                          <button
                            onClick={() => handleViewClick(req)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-transparent hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-medium transition-colors border border-slate-200 dark:border-slate-700"
                          >
                            <span className="material-symbols-outlined text-[16px]">visibility</span>
                            {req.action}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <p className="text-xs text-slate-500 dark:text-slate-400">Showing <span className="font-medium text-slate-900 dark:text-white">1</span> to <span className="font-medium text-slate-900 dark:text-white">{requests.length}</span> of <span className="font-medium text-slate-900 dark:text-white">12</span> results</p>
              <div className="flex gap-2">
                <button className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-300 disabled:opacity-50 transition-colors" disabled>
                  <span className="material-symbols-outlined text-xl">chevron_left</span>
                </button>
                <button className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-300 transition-colors">
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Spacer */}
        <div className="h-10"></div>
      </div>

      {/* New Request Modal */}
      <Modal
        isOpen={isNewRequestModalOpen}
        onClose={() => setIsNewRequestModalOpen(false)}
        title="New Lab / Radiology Request"
        actions={
          <>
            <button onClick={() => setIsNewRequestModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Cancel</button>
            <button onClick={() => setIsNewRequestModalOpen(false)} className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm">Submit Request</button>
          </>
        }
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Patient</label>
            <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <option>Select Patient...</option>
              <option>Sarah Jenkins (ID: 4922)</option>
              <option>Mike Ross (ID: 8831)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Type</label>
            <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <option>Lab Test</option>
              <option>Radiology Scan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Specific Test</label>
            <input type="text" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" placeholder="e.g. Lipid Profile" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Priority</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <input type="radio" name="priority" className="text-primary focus:ring-primary" defaultChecked />
                Routine
              </label>
              <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <input type="radio" name="priority" className="text-primary focus:ring-primary" />
                Urgent
              </label>
            </div>
          </div>
        </form>
      </Modal>

      {/* Upload Modal */}
      <Modal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        title={`Upload Report for ${selectedRequest?.patientName}`}
        actions={
          <>
            <button onClick={() => setIsUploadModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Cancel</button>
            <button onClick={() => setIsUploadModalOpen(false)} className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm">Upload File</button>
          </>
        }
      >
        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800/50">
          <label className="flex flex-col items-center cursor-pointer w-full h-full">
            <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">cloud_upload</span>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Drag and drop file here, or click to browse</p>
            <p className="text-xs text-slate-400 mt-1">Upload PDF, JPG, PNG (Max 10MB)</p>
            <input type="file" className="hidden" accept=".pdf, .jpg, .jpeg, .png" onChange={(e) => alert(`File selected: ${e.target.files[0]?.name}`)} />
          </label>
        </div>
      </Modal>

      {/* View Report Modal */}
      <Modal
        isOpen={isViewReportModalOpen}
        onClose={() => setIsViewReportModalOpen(false)}
        title={`Report Details`}
        actions={
          <div className="flex justify-between w-full">
            <div className="flex gap-2">
              <button onClick={handlePrevRequest} className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <button onClick={handleNextRequest} className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
            <button onClick={() => setIsViewReportModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Close</button>
          </div>
        }
      >
        <div className="flex flex-col gap-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700 flex items-start gap-4">
            <div className={`h-12 w-12 rounded-full ${selectedRequest?.color} flex items-center justify-center text-lg font-bold shrink-0`}>
              {selectedRequest?.initials}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{selectedRequest?.patientName}</h3>
              <p className="text-sm text-slate-500">ID: #{selectedRequest?.patientId}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${selectedRequest?.statusColor}`}>
                  {selectedRequest?.status}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                  {selectedRequest?.date}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">Test Name</p>
              <p className="font-medium text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">{selectedRequest?.icon}</span>
                {selectedRequest?.testName}
              </p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">Prescribed By</p>
              <p className="font-medium text-slate-900 dark:text-white">{selectedRequest?.prescribedBy}</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-slate-100 dark:bg-slate-800 rounded-lg space-y-3 border-2 border-dashed border-slate-200 dark:border-slate-600">
            <span className="material-symbols-outlined text-4xl text-slate-400">picture_as_pdf</span>
            <div className="text-center">
              <p className="text-sm font-medium text-slate-900 dark:text-white">Result_Report.pdf</p>
              <p className="text-xs text-slate-500">1.2 MB</p>
            </div>
            <button className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-sm hover:bg-slate-50 flex items-center gap-2 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-600 transition-colors">
              <span className="material-symbols-outlined text-[16px]">download</span>
              Download
            </button>
          </div>
        </div>
      </Modal>

    </div>
  );
};
export default Radiology;
