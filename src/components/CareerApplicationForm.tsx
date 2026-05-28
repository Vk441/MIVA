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
      <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-2xl text-center">
        <p className="font-semibold text-lg">Application Received</p>
        <p className="font-light mt-2 text-sm">Thank you! Our recruitment team will review your CV shortly.</p>
      </div>
    );
  }

  // Find job name for preselected title
  const preselectedJob = jobs.find(j => j.id === preselectedJobId);

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-foreground">
      <div>
        <label htmlFor="name" className="block text-xs font-bold tracking-wider text-gray-500 mb-2 uppercase">Full Name</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          required
          placeholder="e.g. Parth Sudani"
          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm shadow-sm"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-xs font-bold tracking-wider text-gray-500 mb-2 uppercase">Email Address</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          required
          placeholder="e.g. parth@example.com"
          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm shadow-sm"
        />
      </div>
      
      <div>
        <label htmlFor="jobId" className="block text-xs font-bold tracking-wider text-gray-500 mb-2 uppercase">Position</label>
        {preselectedJobId ? (
          <div>
            <div className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 font-semibold select-none text-sm shadow-sm">
              {preselectedJob?.title || "General Application"}
            </div>
            <input type="hidden" name="jobId" value={preselectedJobId} />
          </div>
        ) : (
          <select 
            name="jobId" 
            id="jobId"
            required
            className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm shadow-sm"
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
        <label htmlFor="coverLetter" className="block text-xs font-bold tracking-wider text-gray-500 mb-2 uppercase">Cover Letter / Note</label>
        <textarea 
          name="coverLetter" 
          id="coverLetter" 
          rows={4} 
          required
          placeholder="Briefly tell us why you want to build the future of aerospace at MIVA..."
          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none text-sm leading-relaxed shadow-sm"
        ></textarea>
      </div>

      {/* CV/Resume File Upload */}
      <div>
        <label className="block text-xs font-bold tracking-wider text-gray-500 mb-2 uppercase">Resume / CV (PDF, Word)</label>
        <div className="relative border border-dashed border-slate-200 hover:border-primary/45 rounded-lg p-6 bg-slate-50 text-center transition-all">
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
              <Upload size={20} className="text-gray-400" />
              <p className="text-sm font-semibold text-slate-700">Click to upload or drag & drop</p>
              <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 4MB</p>
            </div>
          ) : (
            <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg p-3 relative z-10">
              <div className="flex items-center space-x-3">
                <FileText size={20} className="text-primary/60" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-slate-700 max-w-[200px] sm:max-w-[300px] truncate">{selectedFile.name}</p>
                  <p className="text-xs text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button 
                type="button" 
                onClick={removeFile}
                className="text-gray-400 hover:text-red-500 p-1 rounded-full hover:bg-slate-100 transition-colors"
                title="Remove file"
              >
                <X size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl text-xs font-semibold">
          {errorMessage}
        </div>
      )}
      
      <button 
        type="submit" 
        disabled={status === "loading"}
        className="w-full bg-primary hover:bg-primary/95 text-white font-bold uppercase tracking-widest py-4 rounded-lg transition-all disabled:opacity-50 text-xs shadow-md shadow-primary/10"
      >
        {status === "loading" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
