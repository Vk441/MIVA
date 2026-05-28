"use client";

import { useState } from "react";
import { Job } from "@prisma/client";
import CareerApplicationForm from "./CareerApplicationForm";
import { ChevronDown, ChevronUp, MapPin, Briefcase, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InteractiveJobsList({ jobs }: { jobs: Job[] }) {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const toggleExpand = (jobId: string) => {
    setExpandedJobId(prev => (prev === jobId ? null : jobId));
  };

  if (jobs.length === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
        <p className="text-gray-500 font-light text-sm italic">No open positions currently available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => {
        const isExpanded = expandedJobId === job.id;

        return (
          <div 
            key={job.id} 
            className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
              isExpanded ? "border-primary/20 ring-1 ring-primary/5 shadow" : "border-slate-200 hover:border-primary/20 shadow-sm hover:shadow"
            }`}
          >
            {/* Header / Clickable Area */}
            <button 
              onClick={() => toggleExpand(job.id)}
              className="w-full text-left p-6 flex items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <span className="bg-primary/5 border border-primary/10 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded text-[#0f2042] font-semibold">
                    {job.department}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold tracking-wide text-primary">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-2 text-xs text-muted-foreground font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-primary/60" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase size={12} className="text-primary/60" /> {job.type}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className={`border px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors hidden sm:inline-block ${
                  isExpanded ? "bg-primary border-primary text-white" : "border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary"
                }`}>
                  {isExpanded ? "Close" : "Apply now"}
                </span>
                <div className="p-2 bg-primary/5 border border-primary/10 rounded-full text-primary">
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
            </button>

            {/* Description & Application Form */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-8 border-t border-slate-200 bg-slate-50/50">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
                      {/* Job Description (Left side) */}
                      <div className="lg:col-span-7 space-y-6">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-[#0f2042]/60 mb-3">Job Description</h4>
                          <p className="text-slate-700 font-light text-sm leading-relaxed whitespace-pre-wrap">
                            {job.description}
                          </p>
                        </div>

                        <div className="border-t border-slate-200 pt-6 space-y-4">
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-[#0f2042]/60">Position Details</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white border border-slate-200 p-3 rounded-xl">
                              <span className="text-[10px] text-gray-500 uppercase block tracking-wider mb-1">Department</span>
                              <span className="text-sm font-semibold text-primary">{job.department}</span>
                            </div>
                            <div className="bg-white border border-slate-200 p-3 rounded-xl">
                              <span className="text-[10px] text-gray-500 uppercase block tracking-wider mb-1">Location</span>
                              <span className="text-sm font-semibold text-primary">{job.location}</span>
                            </div>
                            <div className="bg-white border border-slate-200 p-3 rounded-xl">
                              <span className="text-[10px] text-gray-500 uppercase block tracking-wider mb-1">Employment Type</span>
                              <span className="text-sm font-semibold text-primary">{job.type}</span>
                            </div>
                            <div className="bg-white border border-slate-200 p-3 rounded-xl">
                              <span className="text-[10px] text-gray-500 uppercase block tracking-wider mb-1">Status</span>
                              <span className="text-sm font-semibold text-green-600 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Active Recruiting
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Application Form (Right side) */}
                      <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-200 pt-8 lg:pt-0 lg:pl-8">
                        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-2 mb-6">
                            <Send size={14} className="text-primary" />
                            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Fast Apply</h4>
                          </div>
                          <CareerApplicationForm jobs={jobs} preselectedJobId={job.id} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
