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
    <div className="max-w-md mx-auto mt-24 bg-white/5 border border-white/10 p-8 rounded-lg">
      <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 text-center">Secure Access</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium tracking-wide text-gray-300 mb-2 uppercase">Passcode</label>
          <input 
            type="password" 
            name="password" 
            required
            className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
          />
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-white text-black font-bold uppercase tracking-widest py-3 rounded hover:bg-gray-200 transition-colors disabled:opacity-50"
        >
          {loading ? "Authenticating..." : "Login"}
        </button>
      </form>
    </div>
  );
}
