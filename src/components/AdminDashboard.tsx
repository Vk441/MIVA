"use client";

import { useState } from "react";
import { createJob, deleteJob, adminLogout } from "@/app/admin/actions";
import { Job } from "@prisma/client";
import { Trash2 } from "lucide-react";

export default function AdminDashboard({ jobs }: { jobs: Job[] }) {
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="max-w-6xl mx-auto w-full py-12">
      <div className="flex justify-between items-center mb-12 border-b border-white/20 pb-6">
        <h1 className="text-3xl font-bold uppercase tracking-widest">Command Center</h1>
        <button 
          onClick={() => adminLogout()}
          className="text-sm font-bold uppercase tracking-widest border border-white/20 px-4 py-2 rounded hover:bg-white/10 transition-colors"
        >
          Disconnect
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Publish Position</h2>
            <form onSubmit={handleCreateJob} className="space-y-4">
              <div>
                <label className="block text-xs font-medium tracking-wide text-gray-300 mb-1 uppercase">Job Title</label>
                <input type="text" name="title" required className="w-full bg-black/50 border border-white/20 rounded px-3 py-2 text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wide text-gray-300 mb-1 uppercase">Department</label>
                <input type="text" name="department" required className="w-full bg-black/50 border border-white/20 rounded px-3 py-2 text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wide text-gray-300 mb-1 uppercase">Location</label>
                <input type="text" name="location" required className="w-full bg-black/50 border border-white/20 rounded px-3 py-2 text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wide text-gray-300 mb-1 uppercase">Type</label>
                <input type="text" name="type" defaultValue="Full-time" required className="w-full bg-black/50 border border-white/20 rounded px-3 py-2 text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wide text-gray-300 mb-1 uppercase">Description</label>
                <textarea name="description" rows={4} required className="w-full bg-black/50 border border-white/20 rounded px-3 py-2 text-white focus:outline-none resize-none"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-white text-black font-bold uppercase tracking-widest py-3 rounded hover:bg-gray-200 transition-colors disabled:opacity-50 mt-4"
              >
                {loading ? "Publishing..." : "Publish Job"}
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white/5 border border-white/10 p-6 rounded-lg min-h-[500px]">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-6 border-b border-white/20 pb-4">Active Positions</h2>
            {jobs.length === 0 ? (
              <p className="text-gray-400 font-light">No active positions.</p>
            ) : (
              <ul className="space-y-4">
                {jobs.map((job) => (
                  <li key={job.id} className="flex justify-between items-center p-4 bg-black/30 border border-white/5 rounded">
                    <div>
                      <h3 className="font-bold uppercase tracking-wide">{job.title}</h3>
                      <p className="text-sm text-gray-400">{job.department} • {job.location}</p>
                    </div>
                    <button 
                      onClick={() => handleDeleteJob(job.id)}
                      className="text-red-400 hover:text-red-300 p-2 border border-red-500/30 hover:bg-red-500/10 rounded transition-colors"
                      title="Remove Position"
                    >
                      <Trash2 size={18} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
