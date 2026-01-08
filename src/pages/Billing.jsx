import React, { useState } from 'react';
import Modal from '../components/Modal';

const Billing = () => {
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);

  const handleCreateInvoice = (e) => {
    e.preventDefault();
    alert("Invoice Created Successfully!");
    setIsInvoiceModalOpen(false);
  };

  return (
    <div className="max-w-[1200px] mx-auto space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Billing & Invoices</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">Manage clinic revenue and patient invoices</p>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 text-sm font-bold shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
            onClick={() => setIsInvoiceModalOpen(true)}
          >
            <span className="material-symbols-outlined">add</span>
            Create Invoice
          </button>
        </div>
      </div>

      {/* Billing Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Revenue</p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$124,500</h3>
          </div>
          <div className="size-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">attach_money</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pending Payments</p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$3,200</h3>
          </div>
          <div className="size-12 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">pending</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Invoices Issued</p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">1,240</h3>
          </div>
          <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">receipt</span>
          </div>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Invoices</h3>
          <div className="flex gap-2">
            <button className="text-slate-500 hover:text-slate-700 dark:hover:text-white"><span className="material-symbols-outlined">filter_list</span></button>
            <button className="text-slate-500 hover:text-slate-700 dark:hover:text-white"><span className="material-symbols-outlined">download</span></button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Invoice ID</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { id: '#INV-2023-001', patient: 'Sarah Jenkins', amount: '$150.00', date: 'Oct 24, 2023', status: 'Paid', statusColor: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
                { id: '#INV-2023-002', patient: 'Michael Ross', amount: '$350.00', date: 'Oct 22, 2023', status: 'Pending', statusColor: 'bg-orange-100 text-orange-700 border-orange-200' },
                { id: '#INV-2023-003', patient: 'Linda Walker', amount: '$75.00', date: 'Oct 20, 2023', status: 'Paid', statusColor: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
                { id: '#INV-2023-004', patient: 'David Kim', amount: '$200.00', date: 'Oct 18, 2023', status: 'Overdue', statusColor: 'bg-red-100 text-red-700 border-red-200' },
              ].map((inv, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">{inv.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-medium">{inv.patient}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">{inv.amount}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{inv.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${inv.statusColor}`}>{inv.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                    <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 ml-1"><span className="material-symbols-outlined text-[20px]">download</span></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invoice Modal */}
      {isInvoiceModalOpen && (
        <Modal
          isOpen={isInvoiceModalOpen}
          onClose={() => setIsInvoiceModalOpen(false)}
          title="Create New Invoice"
        >
          <form onSubmit={handleCreateInvoice} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Patient Name</label>
                <input type="text" placeholder="Search patient..." className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary px-3 py-2 text-slate-900 dark:text-white" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Amount</label>
                <input type="number" placeholder="0.00" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary px-3 py-2 text-slate-900 dark:text-white" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Description</label>
              <textarea rows="3" placeholder="Enter invoice details" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary px-3 py-2 text-slate-900 dark:text-white"></textarea>
            </div>
            <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
              <button type="button" onClick={() => setIsInvoiceModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">Cancel</button>
              <button type="submit" className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-md shadow-blue-500/20 transition-colors">Issue Invoice</button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default Billing;
