import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight, HelpCircle, Code, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About | MIVA Systems",
  description: "Learn about MIVA's vision, indigenous UAV systems, and our role in the defense and aerospace industry.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 md:px-8 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide mb-4 text-primary">
          Rewriting defense aviation
        </h1>
        <p className="text-muted-foreground font-semibold tracking-widest text-xs md:text-sm uppercase mb-16 max-w-2xl leading-loose">
          Indigenous Development • Mission-Critical Systems • Complete Autonomy
        </p>
        <div className="w-full max-w-7xl relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden shadow-md rounded-3xl">
          <Image
            src="/hero_drone_bg.png"
            alt="MIVA Advanced Aerospace Drone"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>
      
      {/* The MIVA Approach */}
      <section id="overview" className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full scroll-mt-24">
        <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">Overview</h3>
        <h2 className="text-3xl font-medium tracking-wide mb-8 text-primary">
          The MIVA approach
        </h2>
        <div className="max-w-4xl">
          <p className="text-muted-foreground font-light leading-relaxed mb-6 text-base md:text-lg">
            We are building a new class of defense aircraft — engineered from first principles for extreme efficiency, stealth, and high-frequency deployment. To achieve true self-reliance, we develop all core technologies in-house, focusing on three foundational vectors:
          </p>
          <ul className="list-disc pl-5 text-muted-foreground font-light space-y-2 mb-16 text-sm md:text-base">
            <li>Aerodynamics optimized dynamically for custom payload efficiency and minimized acoustics.</li>
            <li>Hybrid electric propulsion units paired with next-generation smart battery controllers.</li>
            <li>Fully custom navigation autonomy algorithms engineered from scratch for contested airspaces.</li>
          </ul>
        </div>
        
        <div className="w-full relative h-[250px] md:h-[400px] overflow-hidden rounded-2xl mb-24 border border-border">
          <Image
            src="/drone_fleet.png"
            alt="MIVA Fleet"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Vision Details - 3 Columns UAV, Subsystems & Indigenous Tech */}
        <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">Vision & Capabilities</h3>
        <h2 className="text-3xl font-medium tracking-wide mb-12 text-primary">
          Engineering Indigenous Dominance
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {/* UAV Design & Development */}
          <div className="bg-muted border border-border p-6 rounded-2xl shadow-sm space-y-4">
            <div className="relative w-full h-[150px] overflow-hidden rounded-xl border border-border">
              <Image 
                src="/aircraft_platform.png"
                alt="UAV Design"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-bold tracking-wide text-primary">1. UAV Design & Development</h3>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              We design and manufacture high-durability autonomous platforms optimized for varying tactical missions. Our standard product catalog includes:
            </p>
            <div className="pt-2 space-y-2 text-xs font-semibold text-primary">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Multi-rotor Tactical Platforms
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Hybrid-electric VTOL Fixed Wing
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Long-Endurance Fixed Wing UAVs
              </div>
            </div>
          </div>
          
          {/* System & Subsystem Development */}
          <div className="bg-muted border border-border p-6 rounded-2xl shadow-sm space-y-4">
            <div className="relative w-full h-[150px] overflow-hidden rounded-xl border border-border">
              <Image 
                src="/propulsion_systems.png"
                alt="Subsystems"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-bold tracking-wide text-primary">2. System & Subsystem Development</h3>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              True self-reliance requires controlling the core. We engineer critical subsystems entirely in-house:
            </p>
            <div className="pt-2 space-y-2 text-xs font-semibold text-primary">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Custom Micro-Turbine Hybrid Engines
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Advanced Flight Control Computers (FCC)
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Military-Grade Telemetry Link Modules
              </div>
            </div>
          </div>
          
          {/* Technology From Scratch */}
          <div className="bg-muted border border-border p-6 rounded-2xl shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Shield size={20} />
              </div>
              <h3 className="text-lg font-bold tracking-wide text-primary">3. 100% Indigenous Innovation</h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                By developing all IP, firmware, hardware blueprints, and physical aircraft from scratch, we dramatically enhance Indian aerospace capabilities. 
              </p>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                Our localized supply chain guarantees complete national security audit compliance and absolute domestic serviceability without foreign reliance.
              </p>
            </div>
            <div className="pt-4 border-t border-border flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Self-Reliance Achieved
            </div>
          </div>
        </div>

        {/* Our Team Section Anchor */}
        <div id="team" className="scroll-mt-24 mb-24">
          <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">Our Team</h3>
          <h2 className="text-3xl font-medium tracking-wide mb-8 text-primary">
            Collaborating with Visionaries
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed text-base max-w-4xl">
            MIVA is built by a world-class team of aerospace designers, control systems specialists, artificial intelligence engineers, and tactical deployment experts. Operating at the intersections of advanced computing and hard physical engineering, we foster a culture centered on curiosity, imagination, and extreme ownership.
          </p>
        </div>

        {/* The Road Ahead / Our Story */}
        <div id="story" className="bg-muted rounded-3xl p-8 md:p-12 border border-border scroll-mt-24 mb-24">
          <h2 className="text-xl font-bold uppercase tracking-wider text-primary mb-6">Our Story</h2>
          <p className="text-muted-foreground font-light leading-relaxed text-sm mb-6">
            Founded with the singular vision of securing skies through high-end domestic engineering, MIVA has rapidly matured from drafting blueprints to conducting real-world aerodynamic flight testing. 
          </p>
          <p className="text-muted-foreground font-light leading-relaxed text-sm">
            We are working directly with strategic aerospace entities and defense advisors to expand capabilities, streamline domestic assembly hubs, and deploy defense assets that are built with precision, for precision, in India and for the world.
          </p>
        </div>

        {/* Action Cards: Collaborate and Work With Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          {/* Collaborate Card */}
          <div className="bg-primary text-white p-8 rounded-3xl flex flex-col justify-between h-[250px] shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
            <div className="space-y-3 z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Partner with MIVA</span>
              <h2 className="text-2xl font-bold uppercase tracking-wide">Collaborate</h2>
              <p className="text-xs font-light text-white/70 max-w-sm">
                Explore strategic alliances, research partnerships, or customized deployment requirements with our engineering team.
              </p>
            </div>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black bg-white px-5 py-3 rounded-full w-max hover:bg-gray-100 transition-colors z-10"
            >
              Contact Team <ArrowUpRight size={14} />
            </Link>
            {/* Absolute Background Pattern */}
            <div className="absolute right-[-20px] bottom-[-20px] w-[150px] h-[150px] rounded-full bg-white/[0.03] pointer-events-none" />
          </div>

          {/* Work With Us Card */}
          <div className="bg-background border border-border p-8 rounded-3xl flex flex-col justify-between h-[250px] shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
            <div className="space-y-3 z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Join the Mission</span>
              <h2 className="text-2xl font-bold uppercase tracking-wide text-primary">Work with us</h2>
              <p className="text-xs font-light text-muted-foreground max-w-sm">
                Want to build what's never been built before? Join our fast-growing aircraft propulsion and navigation autonomy teams.
              </p>
            </div>
            <Link 
              href="/careers"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white bg-primary px-5 py-3 rounded-full w-max hover:bg-primary/95 transition-colors z-10"
            >
              Explore Openings <ArrowUpRight size={14} />
            </Link>
            {/* Absolute Background Pattern */}
            <div className="absolute right-[-20px] bottom-[-20px] w-[150px] h-[150px] rounded-full bg-primary/[0.02] pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
}
