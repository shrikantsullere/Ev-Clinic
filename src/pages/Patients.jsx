import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

const Patients = () => {
  const navigate = useNavigate();
  // State for Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Dummy Data for Patients
  const [patientsData, setPatientsData] = useState([
    {
      id: 1,
      name: "Sarah Jenkins",
      patientId: "PT-2024-001",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC76JtxjqDe0h1MCwxIfGhDSMio5R7oE4EJ9CKyzTtqOVS1ugXzAIod2JKEmd5Qo_FRfRSo74TBLvBrZxEuhT1c-_TtedRLBuC8M22PHwdWuyYjowMTTLk5p-US-etfZs29MjRfHTRoIa8u2TftF7L3T-RGjsgzizFt_SoW31ODpugSqYfYuvn31IHxpfXjPi2pczey-GuL6tD3ipZ79O4kC6A3BJstmUsY9JnW-A4rLnpSphieKK_grKNSZKW0aCbsTgKRofTr2YYO",
      phone: "(555) 123-4567",
      email: "sarah.j@email.com",
      lastVisit: "Oct 24, 2023",
      lastDoctor: "Dr. Smith",
      nextAppt: "Nov 12, 10:00 AM",
      hasUpcoming: true,
      status: "Active",
      statusColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
    },
    {
      id: 2,
      name: "Michael Ross",
      patientId: "PT-2024-042",
      initials: "MR",
      bgColor: "bg-blue-100 text-blue-600",
      phone: "(555) 987-6543",
      email: "m.ross@email.com",
      lastVisit: "Oct 20, 2023",
      lastDoctor: "Dr. White",
      nextAppt: "No upcoming",
      hasUpcoming: false,
      status: "Active",
      statusColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
    },
    {
      id: 3,
      name: "Emily Dao",
      patientId: "PT-2023-891",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEOzXC6Tqrt-54AeULkWzbjXucRCX0zeEd4LkUJ1WNKK_SyWlhftfQ1i7lM85I5lzp93hvlqdyWfqYWbgC-nqxnadOlZRnxiWTIHSxbyXRzJj4pakWVRTsH9izl95RUQhLgeall6a3BC1NZqAKbRuidf1Ll6C-TzUEeO_1MV5OvhbBrscx-Y309JhbKzuWulTbiXD3b5G3oURIhiS1g2saU4SBAfE1lnKoEiKqCIL1oKFQ1aACCJvoB1uhrDjVp6AtLEOhF7MAGV8w",
      phone: "(555) 234-5678",
      email: "emily.d@email.com",
      lastVisit: "Sep 15, 2023",
      lastDoctor: "Dr. Smith",
      nextAppt: "No upcoming",
      hasUpcoming: false,
      status: "Inactive",
      statusColor: "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
    },
    {
      id: 4,
      name: "David Kim",
      patientId: "PT-2024-112",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA38UzUYCIr77zGP_TTI3DdyJKHtHo1sO9Y8JuErgJfE0AwLxY8yovHLcrWfGlG8stVvtlRnv3xFE_0g4-yZMgxtgzNtd1hOSaNxrHOENmdZIfhAfGbXiasoYIc3HmcSPhPt-ugRSidapUnJe-5HDsfA4WBi3h2ony2AupWa9N90nGzFabU3qDu7fHHt5e2Gml8pTG8H7CK36kvE8HCq5EnicnXJFQblO0EeVffm0zeMU9ldc-7W-PVxMMAE66EiyH1yAtwE6T5J8b6",
      phone: "(555) 876-5432",
      email: "d.kim@email.com",
      lastVisit: "Nov 01, 2023",
      lastDoctor: "Dr. White",
      nextAppt: "Nov 05, 02:30 PM",
      hasUpcoming: true,
      status: "Active",
      statusColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
    },
    {
      id: 5,
      name: "Jessica Low",
      patientId: "PT-2023-550",
      initials: "JL",
      bgColor: "bg-purple-100 text-primary",
      phone: "(555) 345-6789",
      email: "jess.low@email.com",
      lastVisit: "Oct 05, 2023",
      lastDoctor: "Dr. Smith",
      nextAppt: "No upcoming",
      hasUpcoming: false,
      status: "New",
      statusColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
    }
  ]);

  // Actions
  const handleEdit = (patient) => {
    setSelectedPatient(patient);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (patient) => {
    setSelectedPatient(patient);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedPatient) {
      setPatientsData(patientsData.filter(p => p.id !== selectedPatient.id));
      setIsDeleteModalOpen(false);
      setSelectedPatient(null);
    }
  };

  const handleView = (id) => {
    navigate(`/patients/${id}`);
  };

  const handlePrevPatient = () => {
    if (!selectedPatient) return;
    const idx = patientsData.findIndex(p => p.id === selectedPatient.id);
    const prev = (idx - 1 + patientsData.length) % patientsData.length;
    setSelectedPatient(patientsData[prev]);
  };

  const handleNextPatient = () => {
    if (!selectedPatient) return;
    const idx = patientsData.findIndex(p => p.id === selectedPatient.id);
    const next = (idx + 1) % patientsData.length;
    setSelectedPatient(patientsData[next]);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header */}
      <header className="flex flex-col gap-6 mb-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <a className="hover:text-primary transition-colors" href="#">Home</a>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="font-medium text-slate-900 dark:text-white">Patients List</span>
        </div>

        {/* Title & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Patients</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Manage patient records, history, and appointments.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-white font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">download</span>
              Export
            </button>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-primary rounded-lg text-white font-medium text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              Add New Patient
            </button>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="p-1 rounded-xl flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[300px] max-w-lg group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
            <input className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-900 dark:text-white placeholder-slate-400 transition-all shadow-sm" placeholder="Search by name, email, or ID..." type="text" />
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Status:</span>
              <select className="form-select bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-white focus:border-primary focus:ring-0 py-2.5 pl-3 pr-8 cursor-pointer shadow-sm">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Archived</option>
              </select>
            </div>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
            <button className="p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 hover:text-primary hover:border-primary transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[20px]">filter_list</span>
            </button>
          </div>
        </div>
      </header>

      {/* Table Section */}
      <div className="flex-1 overflow-hidden flex flex-col pb-8">
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-full overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead className="bg-slate-50 dark:bg-slate-900/50 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Patient Name</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Contact Info</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Last Visit</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Next Appointment</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {patientsData.length > 0 ? patientsData.map((patient) => (
                  <tr key={patient.id} className="group hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {patient.img ? (
                          <div className="size-10 rounded-full bg-cover bg-center shrink-0 border border-slate-100 dark:border-slate-700" style={{ backgroundImage: `url('${patient.img}')` }}></div>
                        ) : (
                          <div className={`size-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${patient.bgColor}`}>{patient.initials}</div>
                        )}
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">{patient.name}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">ID: #{patient.patientId}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-700 dark:text-slate-200">{patient.phone}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{patient.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-slate-700 dark:text-slate-300">{patient.lastVisit}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{patient.lastDoctor}</p>
                    </td>
                    <td className="px-6 py-4">
                      {patient.hasUpcoming ? (
                        <div className="flex items-center gap-1.5 text-primary">
                          <span className="material-symbols-outlined text-[16px]">event</span>
                          <span className="text-sm font-medium">{patient.nextAppt}</span>
                        </div>
                      ) : (
                        <span className="text-sm text-slate-400 italic">No upcoming</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${patient.statusColor}`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <button
                        onClick={() => handleView(patient.id)}
                        className="text-slate-400 hover:text-primary transition-colors p-1 rounded hover:bg-primary/10"
                        title="View Details"
                      >
                        <span className="material-symbols-outlined">visibility</span>
                      </button>
                      <button
                        onClick={() => handleEdit(patient)}
                        className="text-slate-400 hover:text-blue-500 transition-colors p-1 rounded hover:bg-blue-50 dark:hover:bg-blue-900/10 ml-1"
                        title="Edit Patient"
                      >
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button
                        onClick={() => handleDeleteClick(patient)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/10 ml-1"
                        title="Delete Patient"
                      >
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-slate-500">No patients found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Showing <span className="font-medium text-slate-900 dark:text-white">1</span> to <span className="font-medium text-slate-900 dark:text-white">{patientsData.length}</span> of <span className="font-medium text-slate-900 dark:text-white">1,240</span> results
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 transition-colors"
                >
                  Previous
                </button>
                <button className="size-8 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-medium">{currentPage}</button>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(patientsData.length / itemsPerPage)))}
                  disabled={currentPage === Math.ceil(patientsData.length / itemsPerPage)}
                  className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Patient Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Patient"
        actions={
          <>
            <button onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Cancel</button>
            <button onClick={() => { setIsAddModalOpen(false); alert("Patient added") }} className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm">Save Patient</button>
          </>
        }
      >
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Name</label>
              <input type="text" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
              <input type="text" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Date of Birth</label>
              <input type="date" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Gender</label>
              <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
            <input type="email" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone</label>
            <input type="tel" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" />
          </div>
        </form>
      </Modal>

      {/* Edit Patient Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Patient Details"
        actions={
          <div className="flex justify-between w-full">
            <div className="flex gap-2">
              <button onClick={handlePrevPatient} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button onClick={handleNextPatient} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Cancel</button>
              <button onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm">Save Changes</button>
            </div>
          </div>
        }
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
            <input type="text" defaultValue={selectedPatient?.name} className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone</label>
            <input type="tel" defaultValue={selectedPatient?.phone} className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
            <input type="email" defaultValue={selectedPatient?.email} className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Status</label>
            <select defaultValue={selectedPatient?.status} className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary">
              <option>Active</option>
              <option>Inactive</option>
              <option>New</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Date of Birth</label>
              <input type="date" defaultValue="1990-01-01" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Gender</label>
              <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Patient"
        actions={
          <>
            <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Cancel</button>
            <button onClick={confirmDelete} className="px-4 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm">Delete</button>
          </>
        }
      >
        <p className="text-slate-600 dark:text-slate-400">
          Are you sure you want to delete the record for <span className="font-bold text-slate-900 dark:text-white">{selectedPatient?.name}</span>? This action cannot be undone.
        </p>
      </Modal>

      {/* Export Modal */}
      <Modal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        title="Export Patients"
        actions={
          <>
            <button onClick={() => setIsExportModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Cancel</button>
            <button onClick={() => { setIsExportModalOpen(false); alert("Export started") }} className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm">Download CSV</button>
          </>
        }
      >
        <div className="space-y-3">
          <p className="text-sm text-slate-600 dark:text-slate-400">Choose export format:</p>
          <label className="flex items-center gap-2 p-3 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
            <input type="radio" name="format" defaultChecked className="text-primary" />
            <span className="text-sm font-medium">CSV (Excel)</span>
          </label>
          <label className="flex items-center gap-2 p-3 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
            <input type="radio" name="format" className="text-primary" />
            <span className="text-sm font-medium">PDF</span>
          </label>
        </div>
      </Modal>

    </div>
  );
};

export default Patients;
