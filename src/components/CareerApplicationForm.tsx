"use client";

import { useState, useRef } from "react";
import { submitCareerApplication } from "@/app/actions";
import { Job } from "@prisma/client";
import { Upload, X, FileText } from "lucide-react";

interface CareerApplicationFormProps {
  jobs: Job[];
  preselectedJobId?: string;
  onSuccess?: () => void;
}

export default function CareerApplicationForm({ jobs, preselectedJobId, onSuccess }: CareerApplicationFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 4194304) {
        setErrorMessage("File exceeds 4MB size limit.");
        setSelectedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setSelectedFile(file);
        setErrorMessage("");
      }
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    
    const formData = new FormData(e.currentTarget);
    
    // Explicitly add preselectedJobId if present since the disabled select is not included
    if (preselectedJobId) {
      formData.set("jobId", preselectedJobId);
    }
    
    const result = await submitCareerApplication(formData);
    
    if (result.success) {
      setStatus("success");
      setSelectedFile(null);
      (e.target as HTMLFormElement).reset();
      if (onSuccess) {
        onSuccess();
      }
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-xl text-center">
        <p className="font-medium text-lg">Application Received</p>
        <p className="font-light mt-2">Thank you! Our recruitment team will review your CV shortly.</p>
      </div>
    );
  }

  // Find job name for preselected title
  const preselectedJob = jobs.find(j => j.id === preselectedJobId);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-xs font-semibold tracking-wider text-gray-400 mb-2 uppercase">Full Name</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          required
          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-xs font-semibold tracking-wider text-gray-400 mb-2 uppercase">Email Address</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          required
          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
        />
      </div>
      
      <div>
        <label htmlFor="jobId" className="block text-xs font-semibold tracking-wider text-gray-400 mb-2 uppercase">Position</label>
        {preselectedJobId ? (
          <div>
            <div className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-400 select-none">
              {preselectedJob?.title || "General Application"}
            </div>
            <input type="hidden" name="jobId" value={preselectedJobId} />
          </div>
        ) : (
          <select 
            name="jobId" 
            id="jobId"
            required
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors appearance-none"
          >
            <option value="">Select a position...</option>
            <option value="general">General Application</option>
            {jobs.map(job => (
              <option key={job.id} value={job.id}>{job.title}</option>
            ))}
          </select>
        )}
      </div>

      <div>
        <label htmlFor="coverLetter" className="block text-xs font-semibold tracking-wider text-gray-400 mb-2 uppercase">Cover Letter / Note</label>
        <textarea 
          name="coverLetter" 
          id="coverLetter" 
          rows={4} 
          required
          placeholder="Briefly tell us why you want to build the future of aerospace at MIVA..."
          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/40 transition-colors resize-none"
        ></textarea>
      </div>

      {/* CV/Resume File Upload */}
      <div>
        <label className="block text-xs font-semibold tracking-wider text-gray-400 mb-2 uppercase">Resume / CV (PDF, Word)</label>
        <div className="relative border border-dashed border-white/10 hover:border-white/30 rounded-lg p-6 bg-black/20 text-center transition-colors">
          <input 
            type="file" 
            name="resume" 
            id="resume" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            required
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          {!selectedFile ? (
            <div className="flex flex-col items-center space-y-2 pointer-events-none">
              <Upload size={20} className="text-gray-500" />
              <p className="text-sm font-medium text-gray-300">Click to upload or drag & drop</p>
              <p className="text-xs text-gray-600">PDF, DOC, DOCX up to 4MB</p>
            </div>
          ) : (
            <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-3 relative z-10">
              <div className="flex items-center space-x-3">
                <FileText size={20} className="text-white/60" />
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-200 max-w-[200px] sm:max-w-[300px] truncate">{selectedFile.name}</p>
                  <p className="text-xs text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button 
                type="button" 
                onClick={removeFile}
                className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors"
                title="Remove file"
              >
                <X size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm font-medium">{errorMessage}</p>
      )}
      
      <button 
        type="submit" 
        disabled={status === "loading"}
        className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
