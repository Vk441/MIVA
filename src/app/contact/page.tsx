"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/actions";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);
    
    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
          Contact <span className="text-gray-400">Us</span>
        </h1>
        <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
          Partner with MIVA for next-generation airborne defense systems. Reach out to our global sales and engineering teams.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
              <MapPin className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Global Headquarters</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                MIVA Aerospace Complex<br />
                Innovation Sector, Block 7<br />
                Defense Tech Park
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
              <Mail className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Direct Communications</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Sales: sales@miva.com<br />
                Support: support@miva.com<br />
                Press: media@miva.com
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
              <Phone className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Secure Line</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                +1 (800) MIVA-AERO<br />
                Available 24/7 for strategic partners.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold uppercase tracking-wider mb-8">Send a Transmission</h3>
          
          {status === "success" ? (
            <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded text-center">
              <p className="font-medium text-lg">Message Received</p>
              <p className="font-light mt-2">Our strategic team will respond shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium tracking-wide text-gray-300 mb-2 uppercase">Full Name / Organization</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required
                  className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium tracking-wide text-gray-300 mb-2 uppercase">Secure Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required
                  className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium tracking-wide text-gray-300 mb-2 uppercase">Message Content</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
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
                {status === "loading" ? "Transmitting..." : "Initialize Contact"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
