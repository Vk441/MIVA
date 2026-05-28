"use client";

import { useState } from "react";
import { createJob, deleteJob, adminLogout, deleteApplication, deleteContactMessage } from "@/app/admin/actions";
import { Job, Application, ContactMessage } from "@prisma/client";
import { Trash2, Briefcase, FileText, Mail, Calendar, Download, LogOut, Plus } from "lucide-react";

interface AdminDashboardProps {
  jobs: Job[];
  applications: Application[];
  contactMessages: ContactMessage[];
}

export default function AdminDashboard({ jobs, applications, contactMessages }: AdminDashboardProps) {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"positions" | "applications" | "contacts">("positions");

  const handleCreateJob = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const result = await createJob(formData);
    
    if (result && result.success) {
      (e.target as HTMLFormElement).reset();
    } else {
      alert("Failed to publish job. Please ensure your database is running and connected.\nError: " + (result?.error || "Unknown"));
    }
    setLoading(false);
  };

  const handleDeleteJob = async (id: string) => {
    if (confirm("Are you sure you want to delete this position?")) {
      const result = await deleteJob(id);
      if (result && !result.success) {
        alert("Failed to delete job.\nError: " + (result?.error || "Unknown"));
      }
    }
  };

  const handleDeleteApplication = async (id: string) => {
    if (confirm("Are you sure you want to delete this application?")) {
      const result = await deleteApplication(id);
      if (result && !result.success) {
        alert("Failed to delete application.\nError: " + (result?.error || "Unknown"));
      }
    }
  };

  const handleDeleteContact = async (id: string) => {
    if (confirm("Are you sure you want to delete this contact message?")) {
      const result = await deleteContactMessage(id);
      if (result && !result.success) {
        alert("Failed to delete message.\nError: " + (result?.error || "Unknown"));
      }
    }
  };

  const formatNewlines = (text: string) => {
    return text.split('\n').map((str, idx) => <p key={idx}>{str}</p>);
  };

  return (
    <div className="max-w-6xl mx-auto w-full py-12 text-slate-800">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 border-b border-slate-200 pb-8">
        <div>
          <h1 className="text-3xl font-bold uppercase tracking-widest text-[#0f2042]">Command Center</h1>
          <p className="text-slate-500 font-light text-xs mt-1">Manage open positions, applications, and customer contacts.</p>
        </div>
        <button 
          onClick={() => adminLogout()}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-red-200 px-4 py-2.5 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
        >
          <LogOut size={14} /> Disconnect
        </button>
      </div>

      {/* Tabs Selector */}
      <div className="flex border-b border-slate-200 mb-8 gap-4">
        <button
          onClick={() => setActiveTab("positions")}
          className={`flex items-center gap-2 py-4 px-2 border-b-2 text-sm font-semibold tracking-wider uppercase transition-colors ${
            activeTab === "positions" ? "border-[#0f2042] text-[#0f2042]" : "border-transparent text-slate-400 hover:text-slate-600"
          }`}
        >
          <Briefcase size={16} /> Positions ({jobs.length})
        </button>
        <button
          onClick={() => setActiveTab("applications")}
          className={`flex items-center gap-2 py-4 px-2 border-b-2 text-sm font-semibold tracking-wider uppercase transition-colors ${
            activeTab === "applications" ? "border-[#0f2042] text-[#0f2042]" : "border-transparent text-slate-400 hover:text-slate-600"
          }`}
        >
          <FileText size={16} /> Applications ({applications.length})
        </button>
        <button
          onClick={() => setActiveTab("contacts")}
          className={`flex items-center gap-2 py-4 px-2 border-b-2 text-sm font-semibold tracking-wider uppercase transition-colors ${
            activeTab === "contacts" ? "border-[#0f2042] text-[#0f2042]" : "border-transparent text-slate-400 hover:text-slate-600"
          }`}
        >
          <Mail size={16} /> Contact Messages ({contactMessages.length})
        </button>
      </div>

      {/* Tab Panels */}
      {activeTab === "positions" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Create Job Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-bold uppercase tracking-widest mb-6 flex items-center gap-2 text-[#0f2042]">
                <Plus size={16} /> Publish Position
              </h2>
              <form onSubmit={handleCreateJob} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold tracking-wider text-slate-500 mb-1.5 uppercase">Job Title</label>
                  <input type="text" name="title" required className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0f2042] focus:ring-1 focus:ring-[#0f2042] transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider text-slate-500 mb-1.5 uppercase">Department</label>
                  <input type="text" name="department" required className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0f2042] focus:ring-1 focus:ring-[#0f2042] transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider text-slate-500 mb-1.5 uppercase">Location</label>
                  <input type="text" name="location" required className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0f2042] focus:ring-1 focus:ring-[#0f2042] transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider text-slate-500 mb-1.5 uppercase">Type</label>
                  <input type="text" name="type" defaultValue="Full-time" required className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0f2042] focus:ring-1 focus:ring-[#0f2042] transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider text-slate-500 mb-1.5 uppercase">Description</label>
                  <textarea name="description" rows={5} required className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0f2042] focus:ring-1 focus:ring-[#0f2042] transition-colors resize-none text-sm"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-[#0f2042] text-white font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-[#152c5c] transition-colors disabled:opacity-50 mt-4 text-xs"
                >
                  {loading ? "Publishing..." : "Publish Job"}
                </button>
              </form>
            </div>
          </div>

          {/* List Jobs Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 p-6 rounded-xl min-h-[500px] shadow-sm">
              <h2 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-slate-100 pb-4 text-[#0f2042]">Active Positions</h2>
              {jobs.length === 0 ? (
                <p className="text-slate-400 font-light italic text-sm">No active positions found.</p>
              ) : (
                <ul className="space-y-4">
                  {jobs.map((job) => (
                    <li key={job.id} className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-200 transition-colors">
                      <div>
                        <h3 className="font-semibold text-slate-800 tracking-wide">{job.title}</h3>
                        <p className="text-xs text-slate-500 font-light mt-1">{job.department} • {job.location} • {job.type}</p>
                      </div>
                      <button 
                        onClick={() => handleDeleteJob(job.id)}
                        className="text-red-600 hover:text-red-700 p-2 border border-red-100 hover:bg-red-50 rounded-lg transition-colors"
                        title="Remove Position"
                      >
                        <Trash2 size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === "applications" && (
        <div className="bg-white border border-slate-200 p-6 rounded-xl min-h-[500px] shadow-sm">
          <h2 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-slate-100 pb-4 text-[#0f2042]">Job Applications</h2>
          {applications.length === 0 ? (
            <p className="text-slate-400 font-light italic text-sm">No applications submitted yet.</p>
          ) : (
            <div className="space-y-6">
              {applications.map((app) => (
                <div key={app.id} className="p-6 bg-slate-50 border border-slate-100 rounded-xl space-y-4 hover:border-slate-200 transition-colors">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200/60 pb-4">
                    <div>
                      <h3 className="font-semibold text-slate-800 text-lg">{app.name}</h3>
                      <p className="text-xs text-slate-500 font-light mt-1">
                        Applied for: <span className="text-[#0f2042] font-semibold">{app.jobTitle}</span>
                      </p>
                      <p className="text-xs text-slate-400 font-light mt-0.5">{app.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-400 font-light flex items-center gap-1">
                        <Calendar size={12} /> {new Date(app.createdAt).toLocaleDateString()}
                      </span>
                      <button 
                        onClick={() => handleDeleteApplication(app.id)}
                        className="text-red-600 hover:text-red-700 p-2 border border-red-100 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Application"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="text-sm font-light text-slate-600 space-y-2 max-w-4xl">
                    <p className="text-xs uppercase font-semibold tracking-wider text-slate-400">Cover Letter</p>
                    <div className="whitespace-pre-wrap leading-relaxed bg-white p-4 rounded-lg border border-slate-200">
                      {formatNewlines(app.coverLetter)}
                    </div>
                  </div>

                  {app.resumeData && app.resumeName && (
                    <div className="pt-2">
                      <a 
                        href={`data:application/octet-stream;base64,${app.resumeData}`} 
                        download={app.resumeName}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-[#0f2042] text-white px-4 py-2.5 rounded-lg hover:bg-[#152c5c] transition-colors"
                      >
                        <Download size={14} /> Download CV ({app.resumeName})
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === "contacts" && (
        <div className="bg-white border border-slate-200 p-6 rounded-xl min-h-[500px] shadow-sm">
          <h2 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-slate-100 pb-4 text-[#0f2042]">Contact Submissions</h2>
          {contactMessages.length === 0 ? (
            <p className="text-slate-400 font-light italic text-sm">No contact requests received.</p>
          ) : (
            <div className="space-y-6">
              {contactMessages.map((msg) => (
                <div key={msg.id} className="p-6 bg-slate-50 border border-slate-100 rounded-xl space-y-4 hover:border-slate-200 transition-colors">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200/60 pb-4">
                    <div>
                      <h3 className="font-semibold text-slate-800 text-lg">{msg.name}</h3>
                      <p className="text-xs text-slate-500 font-light mt-0.5">{msg.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-400 font-light flex items-center gap-1">
                        <Calendar size={12} /> {new Date(msg.createdAt).toLocaleDateString()}
                      </span>
                      <button 
                        onClick={() => handleDeleteContact(msg.id)}
                        className="text-red-600 hover:text-red-700 p-2 border border-red-100 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Message"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="text-sm font-light text-slate-600 space-y-2 max-w-4xl">
                    <p className="text-xs uppercase font-semibold tracking-wider text-slate-400">Message Content</p>
                    <div className="whitespace-pre-wrap leading-relaxed bg-white p-4 rounded-lg border border-slate-200">
                      {formatNewlines(msg.message)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
