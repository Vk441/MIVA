"use client";

import { useState } from "react";
import { submitCareerApplication } from "@/app/actions";
import { Job } from "@prisma/client";

export default function CareerApplicationForm({ jobs }: { jobs: Job[] }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const result = await submitCareerApplication(formData);
    
    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded text-center">
        <p className="font-medium text-lg">Application Received</p>
        <p className="font-light mt-2">Our recruitment team will review your profile.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium tracking-wide text-gray-300 mb-2 uppercase">Full Name</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          required
          className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium tracking-wide text-gray-300 mb-2 uppercase">Email Address</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          required
          className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
        />
      </div>
      
      <div>
        <label htmlFor="jobId" className="block text-sm font-medium tracking-wide text-gray-300 mb-2 uppercase">Position</label>
        <select 
          name="jobId" 
          id="jobId"
          required
          className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none"
        >
          <option value="">Select a position...</option>
          <option value="general">General Application</option>
          {jobs.map(job => (
            <option key={job.id} value={job.id}>{job.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="coverLetter" className="block text-sm font-medium tracking-wide text-gray-300 mb-2 uppercase">Cover Letter / Note</label>
        <textarea 
          name="coverLetter" 
          id="coverLetter" 
          rows={4} 
          required
          className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none"
        ></textarea>
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm font-medium">{errorMessage}</p>
      )}
      
      <button 
        type="submit" 
        disabled={status === "loading"}
        className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 rounded hover:bg-gray-200 transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
