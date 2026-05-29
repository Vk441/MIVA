import { Metadata } from "next";
import Link from "next/link";
import { Scale, ShieldAlert, FileText, CheckCircle2, AlertTriangle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | MIVA Systems",
  description: "Read the Terms & Conditions governing your use of Miva Aerospace & Defence Technology LLP.",
};

export default function TermsOfUsePage() {
  const sections = [
    {
      id: "definitions",
      icon: <FileText className="text-primary" size={20} />,
      title: "1. Core Definitions",
      content: (
        <div className="space-y-3">
          <p>This legally binding Agreement regulates the relationship between users and the company. Under this policy:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <div className="bg-[#0f2042]/5 border border-primary/10 p-4 rounded-xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">The Entity</span>
              <p className="text-xs font-semibold text-[#0f2042]">Miva Aerospace & Defence Technology LLP</p>
              <p className="text-[11px] text-muted-foreground mt-1">Hereinafter referred to as the "Company", "we", "us", or "our".</p>
            </div>
            <div className="bg-[#0f2042]/5 border border-primary/10 p-4 rounded-xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">The Platforms</span>
              <p className="text-xs font-semibold text-[#0f2042]">mivaaero.com</p>
              <p className="text-[11px] text-muted-foreground mt-1">Refers to the Site and all associated digital products or web services.</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground italic mt-3">
            "User Content" specifies all files, information, designs, or data that you upload or transmit through the website interface.
          </p>
        </div>
      )
    },
    {
      id: "agreement",
      icon: <CheckCircle2 className="text-primary" size={20} />,
      title: "2. User Consent & Eligibility",
      content: (
        <div className="space-y-3">
          <p>
            By accessing this platform, you acknowledge that you have read, understood, and consented to be bound by these provisions on your behalf or for the entity you represent.
          </p>
          <div className="bg-amber-500/10 border border-amber-500/20 text-amber-800 p-4 rounded-2xl text-xs space-y-2 mt-2">
            <p className="font-bold flex items-center gap-1.5 uppercase tracking-wide">
              <ShieldAlert size={14} /> Age Requirement Notice
            </p>
            <p className="font-light text-muted-foreground">
              You must be at least 18 years of age to access our systems in India. Access by minors under 18 is permitted strictly under the active supervision of a parent or legal guardian, in full compliance with Rule 10 of the Digital Personal Data Protection Rules, 2025.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "accounts",
      icon: <Scale className="text-primary" size={20} />,
      title: "3. Account Security & Licensing",
      content: (
        <div className="space-y-4">
          <p>
            To use proprietary capabilities, you must secure an authorized account. You are solely responsible for maintaining login credential secrecy and all associated profile activity.
          </p>
          <div>
            <h4 className="text-xs font-bold uppercase text-[#0f2042] tracking-wider mb-2">Scope of Limited License</h4>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              Subject to these Terms, the Company grants you a limited, non-exclusive, non-transferable, and revocable license to access our platform solely for authorized, lawful purposes. No proprietary title, aerospace engineering patents, source code, or intellectual assets are transferred.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "restrictions",
      icon: <AlertTriangle className="text-primary" size={20} />,
      title: "4. Explicit System Restrictions",
      content: (
        <div className="space-y-3">
          <p>Users must comply with operational constraints. You are strictly prohibited from executing the following:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-2">
            <li className="bg-muted border border-border p-3.5 rounded-xl flex gap-3">
              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-[10px]">1</span>
              <span>Decompiling, modifying, or reverse-engineering flight systems, telemetry telemetry, or software layers.</span>
            </li>
            <li className="bg-muted border border-border p-3.5 rounded-xl flex gap-3">
              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-[10px]">2</span>
              <span>Scraping, mining, or data-stripping using automated scripts, bots, spiders, or query engines.</span>
            </li>
            <li className="bg-muted border border-border p-3.5 rounded-xl flex gap-3">
              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-[10px]">3</span>
              <span>Using platform resources to build competitive software, UAS platforms, or hybrid telemetry equivalents.</span>
            </li>
            <li className="bg-muted border border-border p-3.5 rounded-xl flex gap-3">
              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-[10px]">4</span>
              <span>Violating Indian statutes, including the IT Act, 2000 and the Digital Personal Data Protection Act, 2023.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "intellectual",
      icon: <ShieldAlert className="text-primary" size={20} />,
      title: "5. IP Rights & User Content Licensing",
      content: (
        <div className="space-y-3">
          <p>
            Excluding your User Content, all aerospace intellectual property, engineering designs, trademark logs, and Site structures are the exclusive assets of the Company and its suppliers.
          </p>
          <p className="text-xs text-muted-foreground font-light leading-relaxed">
            By transmitting User Content, you grant the Company a non-exclusive, royalty-free, worldwide license to store, reproduce, and use such content solely to operate and improve our technical platform services. Data processed for statistical or engineering research will be securely anonymized in accordance with Indian regulatory frameworks.
          </p>
        </div>
      )
    },
    {
      id: "monitoring",
      icon: <HelpCircle className="text-primary" size={20} />,
      title: "6. Moderation, Breach, & Indemnity",
      content: (
        <div className="space-y-3">
          <p>
            We reserve the right to audit, monitor, or remove user content that infringes upon our policies or threatens system security.
          </p>
          <p className="text-xs text-muted-foreground font-light leading-relaxed">
            <strong>Indemnification:</strong> You agree to defend, indemnify, and hold harmless Miva Aerospace & Defence Technology LLP (including its directors, engineers, and partners) from all third-party claims, liabilities, damages, or dispute expenses arising directly from your platform misuse or terms violation.
          </p>
        </div>
      )
    },
    {
      id: "disputes",
      icon: <Scale className="text-primary" size={20} />,
      title: "7. Disputes & Arbitration Seat",
      content: (
        <div className="space-y-4">
          <p>
            These Terms shall be interpreted, construed, and governed exclusively by the laws of India.
          </p>
          <div className="bg-primary/5 border border-primary/15 p-5 rounded-2xl space-y-2 text-xs">
            <h4 className="font-bold text-[#0f2042] uppercase tracking-wider">Arbitration Provision</h4>
            <p className="font-light text-muted-foreground">
              Any unresolved controversies, claims, or contract disputes will first be handled via good-faith amicable negotiation within thirty (30) days. Failing resolution, the dispute shall be referred to final, binding arbitration under the provisions of the Arbitration and Conciliation Act, 1996.
            </p>
            <p className="font-semibold text-primary mt-2">
              Seat & Venue of Arbitration: Surat, Gujarat, India • Language: English
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-36 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Modern Interactive Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[10px] font-extrabold uppercase tracking-widest bg-primary/10 text-primary border border-primary/15 px-4 py-2 rounded-full inline-block">
            Compliance & Corporate Governance
          </span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0f2042]">
            Terms of Use
          </h1>
          <div className="h-[2px] w-12 bg-primary mx-auto rounded"></div>
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            Last Updated & Verified: May 29, 2026
          </p>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            These terms define the mutual legal commitments between you and Miva Aerospace & Defence Technology LLP. Please review each section below to understand our operational guidelines.
          </p>
        </div>

        {/* Beautiful Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
          {/* Side Info Cards */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-36">
            <div className="bg-muted border border-border p-6 rounded-3xl space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#0f2042]">Quick Summary</h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                By entering or browsing the Site, you consent to our security protocols, age guidelines, and licensing terms.
              </p>
              <div className="h-[1px] bg-border w-full"></div>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                We control and manufacture indigenous UAS platforms from our engineering hubs in India.
              </p>
              <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 text-center">
                <span className="text-[10px] font-bold text-primary uppercase block">Need Support?</span>
                <a href="mailto:info@mivaaero.com" className="text-xs text-[#0f2042] font-semibold hover:underline block mt-1">info@mivaaero.com</a>
              </div>
            </div>

            <div className="bg-[#0f2042] text-white p-6 rounded-3xl relative overflow-hidden">
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/50 block mb-1">Defense & Aerospace Compliance</span>
              <h4 className="text-base font-bold uppercase tracking-wide">Indigenous Autonomy</h4>
              <p className="text-xs text-white/70 mt-2 font-light leading-relaxed">
                All platform resources are built in accordance with national safety regulations and Indian data handling mandates.
              </p>
              <div className="absolute right-[-10px] bottom-[-10px] w-24 h-24 bg-white/5 rounded-full" />
            </div>
          </div>

          {/* Core Terms Sections (Interactive Modern Block Layout) */}
          <div className="lg:col-span-8 space-y-6">
            {sections.map((sec) => (
              <div key={sec.id} id={sec.id} className="bg-background border border-border rounded-3xl p-6 md:p-8 hover:shadow-sm transition-all space-y-4">
                <div className="flex items-center gap-3.5 border-b border-border/80 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    {sec.icon}
                  </div>
                  <h2 className="text-lg font-black uppercase tracking-wider text-[#0f2042]">
                    {sec.title}
                  </h2>
                </div>
                <div className="text-muted-foreground font-light leading-relaxed text-sm md:text-[15px] space-y-3">
                  {sec.content}
                </div>
              </div>
            ))}

            {/* Validation & Consent Acceptance Card */}
            <div className="bg-muted border border-border p-6 md:p-8 rounded-3xl text-center space-y-4">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#0f2042]">Agreement Verification</h3>
              <p className="text-xs text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
                In compliance with the Information Technology Act, 2000, continuing to use this platform constitutes a legally valid, binding electronic record. No physical signature is required.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-widest text-white bg-primary px-8 py-3.5 rounded-full hover:bg-primary/95 transition-colors shadow-sm"
              >
                Accept & Proceed
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
