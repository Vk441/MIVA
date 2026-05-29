"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/actions";
import { Mail, MapPin, Phone, ShieldCheck, Globe, Send } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    
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
    <div className="flex flex-col min-h-screen pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-foreground bg-background">
      <div className="text-center mb-16 pt-4">
        <span className="text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/15 px-3.5 py-1.5 rounded-full mb-4 inline-block">
          Get in Touch
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f2042] mt-2">
          Contact <span className="text-primary font-black">MIVΛ</span>
        </h1>
        <div className="h-[2px] w-12 bg-primary mx-auto my-6 rounded"></div>
        <p className="text-base md:text-lg text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
          Partner with MIVA for next-generation airborne defense systems. Reach out to our global sales and engineering teams.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Contact Info (Left 5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* R&D Office */}
          <div className="flex items-start gap-6 bg-muted border border-border p-6 rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm shadow-primary/20">
              <MapPin size={22} />
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-[#0f2042] mb-1">R&D Office</h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                1504, 1505, 15 Floor, The Junomoneta Tower,<br />
                Near Rajhans Cinema, Opposite Pal RTO, Adajan,<br />
                Surat, Gujarat, 395009, India
              </p>
            </div>
          </div>

          {/* Regd. Office */}
          <div className="flex items-start gap-6 bg-muted border border-border p-6 rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm shadow-primary/20">
              <MapPin size={22} />
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-[#0f2042] mb-1">Regd. Office</h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                FLAT-202, LOTUS-24, Dabholi Road,<br />
                Katargam, Surat, Gujarat, 395004, India
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-6 bg-muted border border-border p-6 rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm shadow-primary/20">
              <Mail size={22} />
            </div>
            <div>
              <h3 className="text-base font-bold uppercase tracking-wider text-primary mb-1">Direct Communications</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Sales: <a href="mailto:sales@miva.com" className="text-primary font-semibold hover:underline">sales@miva.com</a><br />
                Support: <a href="mailto:support@miva.com" className="text-primary font-semibold hover:underline">support@miva.com</a><br />
                Careers: <a href="mailto:hiring@miva.com" className="text-primary font-semibold hover:underline">hiring@miva.com</a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-6 bg-muted border border-border p-6 rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm shadow-primary/20">
              <Phone size={22} />
            </div>
            <div>
              <h3 className="text-base font-bold uppercase tracking-wider text-primary mb-1">Secure Line</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                +91 (800) MIVA-AERO<br />
                Available 24/7 for strategic partners.
              </p>
            </div>
          </div>

          {/* Secure Audit Badge */}
          <div className="flex items-center gap-3 border border-border/80 rounded-xl p-4 bg-muted/30">
            <ShieldCheck size={18} className="text-green-600 shrink-0" />
            <p className="text-[11px] text-muted-foreground font-light">
              All communications are fully encrypted and stored securely inside audited supply networks.
            </p>
          </div>
        </div>

        {/* Contact Form (Right 7 cols) */}
        <div className="lg:col-span-7 bg-muted border border-border p-8 md:p-10 rounded-3xl shadow-sm">
          <div className="flex items-center gap-2.5 mb-8">
            <Send size={16} className="text-primary" />
            <h3 className="text-xl font-bold uppercase tracking-wider text-primary">Send Transmission</h3>
          </div>
          
          {status === "success" ? (
            <div className="bg-green-500/10 border border-green-500/20 text-green-600 p-8 rounded-2xl text-center">
              <p className="font-semibold text-lg">Message Received</p>
              <p className="font-light text-sm mt-2">Thank you. Our strategic planning team will respond to your secure inbox shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold tracking-wider text-gray-500 mb-2 uppercase">Full Name / Organization</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required
                  placeholder="e.g. Strategic Defense Partner Ltd"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder-gray-400 focus:outline-none focus:border-primary/40 transition-colors text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-semibold tracking-wider text-gray-500 mb-2 uppercase">Secure Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required
                  placeholder="e.g. partner@defense.gov"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder-gray-400 focus:outline-none focus:border-primary/40 transition-colors text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-semibold tracking-wider text-gray-500 mb-2 uppercase">Message Content</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
                  required
                  placeholder="Enter details about your collaborative requirement, procurement query, or technical specs..."
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder-gray-400 focus:outline-none focus:border-primary/40 transition-colors resize-none text-sm leading-relaxed"
                ></textarea>
              </div>

              {status === "error" && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-600 p-4 rounded-xl text-xs font-medium">
                  {errorMessage}
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full bg-primary text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-primary/95 transition-all disabled:opacity-50 text-xs shadow-md shadow-primary/10"
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
