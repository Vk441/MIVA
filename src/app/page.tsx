import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import { ArrowUpRight, Shield, MapPin, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full pt-20">
        <HeroSlideshow />
        <div className="text-center mt-14 mb-8 select-none px-4">
          <p className="text-3xl md:text-5xl font-extrabold tracking-[0.25em] uppercase text-[#0f2042]">
            Empowering the Sky
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <h3 className="text-xs font-semibold tracking-widest text-[#0f2042]/60 uppercase mb-6">About Us</h3>
        <div className="max-w-5xl space-y-6">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-primary">
            MIVA Aerospace and Defence Technology is a pioneering, high-precision aerospace and defence systems startup engineered from the ground up for the indigenous design, engineering, and manufacturing of advanced tactical Unmanned Aerial Systems (UAS).
          </p>
          <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-4xl mx-auto">
            We specialise in building modular, mission-ready platforms — spanning multirotor, fixed-wing, and high-end VTOL configurations — fully optimized to withstand and dominate the extreme operational environments of modern national defence sectors.
          </p>
        </div>
        
        {/* Expanded SEO Card Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-4xl text-left">
          <Link 
            href="/about#overview" 
            className="bg-[#0f2042]/5 hover:bg-[#0f2042]/10 border border-[#0f2042]/10 rounded-2xl p-8 flex flex-col justify-between items-start h-[160px] transition-all group shadow-sm hover:shadow"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0f2042]/60">Explore Details</span>
            <div className="flex justify-between items-center w-full">
              <span className="text-xl font-bold uppercase tracking-wide text-primary">Overview</span>
              <ArrowUpRight size={18} className="text-[#0f2042]/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>
          
          <Link 
            href="/about#team" 
            className="bg-[#0f2042]/5 hover:bg-[#0f2042]/10 border border-[#0f2042]/10 rounded-2xl p-8 flex flex-col justify-between items-start h-[160px] transition-all group shadow-sm hover:shadow"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0f2042]/60">Meet the Engineers</span>
            <div className="flex justify-between items-center w-full">
              <span className="text-xl font-bold uppercase tracking-wide text-primary">Team</span>
              <ArrowUpRight size={18} className="text-[#0f2042]/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>
          
          <Link 
            href="/about#story" 
            className="bg-[#0f2042]/5 hover:bg-[#0f2042]/10 border border-[#0f2042]/10 rounded-2xl p-8 flex flex-col justify-between items-start h-[160px] transition-all group shadow-sm hover:shadow"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0f2042]/60">Our Timeline</span>
            <div className="flex justify-between items-center w-full">
              <span className="text-xl font-bold uppercase tracking-wide text-primary">Our Story</span>
              <ArrowUpRight size={18} className="text-[#0f2042]/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Product Applications Section */}
      <section className="py-24 px-4 md:px-12 lg:px-24 w-full bg-muted flex flex-col items-center text-center">
        <div className="max-w-7xl mx-auto w-full">
          <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">Deployment</h3>
          <h2 className="text-3xl md:text-4xl font-medium tracking-wide text-primary mb-4">
            Product Applications
          </h2>
          <p className="text-sm text-muted-foreground font-light max-w-2xl mx-auto mb-16 leading-relaxed">
            Our autonomous aircraft platforms are engineered to perform high-value operational tasks across strategic civil and national security industries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Mapping & Surveying */}
            <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src="/mapping_surveying.png"
                  alt="Mapping & Surveying"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">01 • Topography</span>
                <h3 className="text-lg font-bold tracking-wide text-primary">Mapping & Surveying</h3>
                <p className="text-xs font-light text-muted-foreground leading-relaxed">
                  Generating millimeter-accurate 3D CAD meshes, orthomosaic maps, and topography analysis for engineering projects, mining, and forestry using built-in sensor arrays.
                </p>
              </div>
            </div>

            {/* Surveillance */}
            <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src="/surveillance.png"
                  alt="Surveillance"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">02 • Security</span>
                <h3 className="text-lg font-bold tracking-wide text-primary">Surveillance</h3>
                <p className="text-xs font-light text-muted-foreground leading-relaxed">
                  Continuous day-and-night observation and threat monitoring for strategic border corridors, critical infrastructure protection, and emergency reconnaissance.
                </p>
              </div>
            </div>

            {/* Warfare */}
            <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src="/warfare.png"
                  alt="Defensive Warfare"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">03 • Defense</span>
                <h3 className="text-lg font-bold tracking-wide text-primary">Warfare</h3>
                <p className="text-xs font-light text-muted-foreground leading-relaxed">
                  Deploying tactical defensive capability, target acquisition, jam-resistant flight logic, and secure edge networks in highly contested airspace environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Capabilities Section [Migrated from About Page] */}
      <section className="py-24 px-4 md:px-12 lg:px-24 w-full flex flex-col items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h3 className="text-xs font-semibold tracking-widest text-[#0f2042]/60 uppercase mb-4">Vision & Capabilities</h3>
            <h2 className="text-3xl md:text-4xl font-medium tracking-wide text-primary">
              Engineering Indigenous Dominance
            </h2>
            <div className="h-[2px] w-12 bg-primary mx-auto my-6 rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* UAV Design & Development */}
            <div className="bg-muted border border-border p-6 rounded-2xl shadow-sm space-y-4 text-left">
              <div className="relative w-full h-[150px] overflow-hidden rounded-xl border border-border bg-white">
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
            <div className="bg-muted border border-border p-6 rounded-2xl shadow-sm space-y-4 text-left">
              <div className="relative w-full h-[150px] overflow-hidden rounded-xl border border-border bg-white">
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
            <div className="bg-muted border border-border p-6 rounded-2xl shadow-sm space-y-4 flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Shield size={20} />
                </div>
                <h3 className="text-lg font-bold tracking-wide text-primary">3. Indigenous Innovation</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Technology development from scratch to improve the Indian capability and serviceability.
                </p>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Our domestic engineering focus enhances aerospace designs and ensures reliable local support and compliance.
                </p>
              </div>
              <div className="pt-4 border-t border-border flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Indian Design & Development
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Cards Section [Migrated from About Page] */}
      <section className="py-16 px-4 md:px-12 lg:px-24 w-full bg-muted border-t border-b border-border">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Collaborate Card */}
            <div className="bg-[#0f2042] text-white p-8 rounded-3xl flex flex-col justify-between h-[250px] shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden text-left">
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
            <div className="bg-background border border-border p-8 rounded-3xl flex flex-col justify-between h-[250px] shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden text-left">
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
        </div>
      </section>

      {/* Careers Section Preview */}
      <section className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full text-center">
        <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">Careers</h3>
        <h2 className="text-3xl md:text-4xl font-medium tracking-wide text-primary mb-12">
          Join MIVA Systems
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full h-[250px] rounded-2xl mb-6 overflow-hidden border border-border shadow-sm">
              <Image
                src="/aircraft_platform.png"
                alt="Aerospace Engineering"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="text-muted-foreground font-light leading-relaxed text-sm mb-6 max-w-sm mx-auto">
              Our aircraft team is leading the development of our autonomous platforms, spanning design, prototyping, systems integration, and testing.
            </p>
            <Link 
              href="/careers" 
              className="border border-primary/20 text-primary px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-primary hover:text-white transition-all inline-block"
            >
              Explore Roles
            </Link>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full h-[250px] rounded-2xl mb-6 overflow-hidden border border-border shadow-sm">
              <Image
                src="/propulsion_systems.png"
                alt="Autonomous Systems"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="text-muted-foreground font-light leading-relaxed text-sm mb-6 max-w-sm mx-auto">
              Our AI team is focused on building world-class neural networks for navigation, threat detection, and swarm intelligence.
            </p>
            <Link 
              href="/careers" 
              className="border border-primary/20 text-primary px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-primary hover:text-white transition-all inline-block"
            >
              Explore AI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
