import React, { useState } from 'react';
import Modal from '../components/Modal';

const Assessments = () => {
  const [noteContent, setNoteContent] = useState('');

  // Modal State
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isAddMedModalOpen, setIsAddMedModalOpen] = useState(false);
  const [isEditVitalsModalOpen, setIsEditVitalsModalOpen] = useState(false);
  const [isViewLabModalOpen, setIsViewLabModalOpen] = useState(false);

  // Dummy Data for Preview
  const [vitals, setVitals] = useState({
    bp: "118/78",
    hr: "72",
    temp: "98.4",
    weight: "142"
  });

  const handleSaveVitals = (e) => {
    e.preventDefault();
    // In a real app, you'd get values from the form. 
    // For this demo, we just close the modal as the inputs aren't controlled for update here yet.
    setIsEditVitalsModalOpen(false);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Top Header */}
      <header className="h-16 flex items-center justify-between px-8 border-b border-slate-200 dark:border-slate-800 bg-white/50 backdrop-blur-sm z-10 shrink-0">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400">
          <a className="hover:text-primary transition-colors" href="#">Home</a>
          <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
          <a className="hover:text-primary transition-colors" href="#">Patients</a>
          <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
          <span className="text-slate-900 dark:text-white font-semibold">Assessment</span>
        </nav>
        {/* Top Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
            System Online
          </div>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-8 scroll-smooth">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          {/* Page Heading & Metadata */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Assessment for Sarah Jenkins</h1>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold uppercase tracking-wide dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800">In Progress</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">badge</span>
                  ID: #99281
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">cake</span>
                  Apr 12, 1985 (38y)
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-200 font-medium">
                  <span className="material-symbols-outlined text-[18px]">event</span>
                  Visit Date: Nov 14, 2023
                </span>
              </div>
            </div>
            {/* Quick Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => setIsHistoryModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm font-medium shadow-sm hover:bg-slate-50 hover:text-primary transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                <span className="material-symbols-outlined text-[20px]">history</span>
                Patient History
              </button>
            </div>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Column: Assessment Form (2/3 width) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Vitals Bar */}
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm flex items-center justify-between overflow-x-auto">
                <div className="flex items-center gap-8 min-w-max px-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Blood Pressure</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-slate-900 dark:text-white">{vitals.bp}</span>
                      <span className="text-xs text-slate-500">mmHg</span>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-slate-100 dark:bg-slate-700"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Heart Rate</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-slate-900 dark:text-white">{vitals.hr}</span>
                      <span className="text-xs text-slate-500">bpm</span>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-slate-100 dark:bg-slate-700"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Temperature</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-slate-900 dark:text-white">{vitals.temp}</span>
                      <span className="text-xs text-slate-500">°F</span>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-slate-100 dark:bg-slate-700"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Weight</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-slate-900 dark:text-white">{vitals.weight}</span>
                      <span className="text-xs text-slate-500">lbs</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsEditVitalsModalOpen(true)}
                  className="ml-4 p-2 text-slate-400 hover:text-primary rounded-full hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                  <span className="material-symbols-outlined">edit</span>
                </button>
              </div>

              {/* Editor Card */}
              <div className="flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm overflow-hidden flex-1">
                {/* Editor Toolbar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-700/30">
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-white transition-colors" title="Bold">
                      <span className="material-symbols-outlined text-[20px]">format_bold</span>
                    </button>
                    <button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-white transition-colors" title="Italic">
                      <span className="material-symbols-outlined text-[20px]">format_italic</span>
                    </button>
                    <button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-white transition-colors" title="List">
                      <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
                    </button>
                    <div className="w-px h-5 bg-slate-300 dark:bg-slate-600 mx-2"></div>
                    <button className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-[16px]">add</span>
                      Template
                    </button>
                  </div>
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Clinical Notes</span>
                </div>
                {/* Text Area */}
                <div className="relative p-6 flex-1 min-h-[400px]">
                  <textarea
                    className="w-full h-full min-h-[400px] resize-y border-none p-0 bg-transparent focus:ring-0 text-base leading-relaxed text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
                    placeholder={`Enter detailed patient symptoms, diagnosis, and treatment plan here...
S (Subjective): Patient reports...
O (Objective): Vitals are stable...
A (Assessment): Probable diagnosis...
P (Plan): Prescribed...`}
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                  ></textarea>
                </div>
                {/* Bottom Actions */}
                <div className="bg-slate-50 dark:bg-slate-900/50 px-6 py-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="material-symbols-outlined text-[16px]">cloud_done</span>
                    Draft saved 2m ago
                  </span>
                  <div className="flex items-center gap-3">
                    <button className="px-5 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-sm transition-all dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 dark:hover:border-slate-600">
                      Cancel
                    </button>
                    <button
                      onClick={() => setIsSaveModalOpen(true)}
                      className="px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:shadow-blue-500/40 active:translate-y-0.5 transition-all flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[20px]">save</span>
                      Save Assessment
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar (1/3 width) */}
            <div className="flex flex-col gap-6">
              {/* Previous Visits Widget */}
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">Previous Visits</h3>
                  <button onClick={() => setIsHistoryModalOpen(true)} className="text-xs text-primary hover:underline">View All</button>
                </div>
                <div className="relative flex flex-col gap-0 border-l border-slate-100 dark:border-slate-700 ml-2">
                  {/* Visit Item 1 */}
                  <div className="group relative pl-6 pb-6">
                    <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800 dark:bg-slate-600 group-hover:bg-primary transition-colors"></span>
                    <div className="flex flex-col gap-1 cursor-pointer p-2 -ml-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <span className="text-xs font-medium text-slate-400">Oct 24, 2023</span>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Follow-up Checkup</p>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">Patient reported improvement in symptoms. Continue current medication.</p>
                    </div>
                  </div>
                  {/* Visit Item 2 */}
                  <div className="group relative pl-6">
                    <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800 dark:bg-slate-600 group-hover:bg-primary transition-colors"></span>
                    <div className="flex flex-col gap-1 cursor-pointer p-2 -ml-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <span className="text-xs font-medium text-slate-400">Sep 12, 2023</span>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Annual Physical</p>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">Routine blood work ordered. Vaccination updated.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Meds Widget */}
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">Active Meds</h3>
                  <button
                    onClick={() => setIsAddMedModalOpen(true)}
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">add_circle</span>
                  </button>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 dark:bg-slate-700/30 dark:border-slate-600/50">
                    <span className="material-symbols-outlined text-primary text-[24px]">pill</span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Lisinopril</p>
                      <p className="text-xs text-slate-500">10mg • Once Daily</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 dark:bg-slate-700/30 dark:border-slate-600/50">
                    <span className="material-symbols-outlined text-primary text-[24px]">pill</span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Metformin</p>
                      <p className="text-xs text-slate-500">500mg • With Meals</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Attachments Widget */}
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">Recent Labs</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <button onClick={() => setIsViewLabModalOpen(true)} className="flex items-center gap-3 p-2 rounded hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors group w-full text-left">
                    <div className="flex items-center justify-center w-8 h-8 rounded bg-red-50 text-red-500 dark:bg-red-900/20">
                      <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-medium text-slate-700 group-hover:text-primary dark:text-slate-300 dark:group-hover:text-white truncate">Blood_Panel_Oct24.pdf</span>
                      <span className="text-[10px] text-slate-400">2.4 MB • Oct 24</span>
                    </div>
                  </button>
                  <button onClick={() => setIsViewLabModalOpen(true)} className="flex items-center gap-3 p-2 rounded hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors group w-full text-left">
                    <div className="flex items-center justify-center w-8 h-8 rounded bg-blue-50 text-blue-500 dark:bg-blue-900/20">
                      <span className="material-symbols-outlined text-[18px]">image</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-medium text-slate-700 group-hover:text-primary dark:text-slate-300 dark:group-hover:text-white truncate">XRay_Chest_Sep12.jpg</span>
                      <span className="text-[10px] text-slate-400">1.8 MB • Sep 12</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Spacer */}
          <div className="h-10"></div>
        </div>
      </div>

      {/* Save Confirmation Modal */}
      <Modal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        title="Assessment Saved"
        actions={
          <button onClick={() => setIsSaveModalOpen(false)} className="px-4 py-2 text-sm font-bold text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-sm">Done</button>
        }
      >
        <div className="flex flex-col items-center justify-center py-4 text-center space-y-4">
          <div className="size-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">check</span>
          </div>
          <div>
            <p className="text-xl font-bold text-slate-900 dark:text-white">Assessment Saved Successfully!</p>
            <p className="text-sm text-slate-500 mt-1">Ref #AS-9921 has been recorded.</p>
          </div>
        </div>
      </Modal>

      {/* Patient History Modal */}
      <Modal
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
        title="Patient History: Sarah Jenkins"
        actions={
          <button onClick={() => setIsHistoryModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Close</button>
        }
      >
        <div className="space-y-4">
          {/* Dummy History Items */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-slate-900 dark:text-white">Follow-up Visit</h4>
                <span className="text-xs text-slate-500">Oct 24, 2023</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">Patient reported improvement in symptoms. Continue medication.</p>
            </div>
          ))}
        </div>
      </Modal>

      {/* Add Medication Modal */}
      <Modal
        isOpen={isAddMedModalOpen}
        onClose={() => setIsAddMedModalOpen(false)}
        title="Add Medication"
        actions={
          <>
            <button onClick={() => setIsAddMedModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Cancel</button>
            <button onClick={() => setIsAddMedModalOpen(false)} className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm">Add</button>
          </>
        }
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Medication Name</label>
            <input type="text" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" placeholder="e.g. Lisinopril" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Dosage</label>
              <input type="text" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" placeholder="e.g. 10mg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Frequency</label>
              <input type="text" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" placeholder="e.g. Daily" />
            </div>
          </div>
        </form>
      </Modal>

      {/* Edit Vitals Modal */}
      <Modal
        isOpen={isEditVitalsModalOpen}
        onClose={() => setIsEditVitalsModalOpen(false)}
        title="Update Vitals"
        actions={
          <>
            <button onClick={() => setIsEditVitalsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Cancel</button>
            <button onClick={() => setIsEditVitalsModalOpen(false)} className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm">Update</button>
          </>
        }
      >
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Blood Pressure (mmHg)</label>
              <input type="text" defaultValue={vitals.bp} className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Heart Rate (bpm)</label>
              <input type="text" defaultValue={vitals.hr} className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Temperature (°F)</label>
              <input type="text" defaultValue={vitals.temp} className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Weight (lbs)</label>
              <input type="text" defaultValue={vitals.weight} className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
            </div>
          </div>
        </form>
      </Modal>

      {/* View Lab Modal */}
      <Modal
        isOpen={isViewLabModalOpen}
        onClose={() => setIsViewLabModalOpen(false)}
        title="Lab Result Preview"
        actions={
          <button onClick={() => setIsViewLabModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">Close</button>
        }
      >
        <div className="flex flex-col items-center justify-center p-8 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">description</span>
          <p className="text-slate-500">Preview not available in this demo.</p>
          <button className="mt-4 text-primary hover:underline text-sm font-medium">Download Original File</button>
        </div>
      </Modal>

    </div>
  );
};
export default Assessments;
