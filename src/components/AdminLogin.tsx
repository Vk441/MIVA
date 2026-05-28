"use client";

import { useState } from "react";
import { adminLogin } from "@/app/admin/actions";

export default function AdminLogin() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const result = await adminLogin(formData);
    
    if (!result.success) {
      setError(result.error || "Login failed");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 bg-white border border-slate-200 p-8 rounded-xl shadow-sm text-slate-800">
      <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 text-center text-[#0f2042]">Secure Access</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium tracking-wide text-slate-600 mb-2 uppercase">Passcode</label>
          <input 
            type="password" 
            name="password" 
            required
            className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-[#0f2042] focus:ring-1 focus:ring-[#0f2042] transition-colors"
          />
        </div>
        {error && <p className="text-red-600 text-sm font-medium">{error}</p>}
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-[#0f2042] text-white font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-[#152c5c] transition-colors disabled:opacity-50"
        >
          {loading ? "Authenticating..." : "Login"}
        </button>
      </form>
    </div>
  );
}
