import { getActiveJobs } from "@/app/actions";
import CareerApplicationForm from "@/components/CareerApplicationForm";
import InteractiveJobsList from "@/components/InteractiveJobsList";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | MIVA",
  description: "Join MIVA and build the future of aerospace and defense.",
};

export const dynamic = "force-dynamic";

export default async function CareersPage() {
  const result = await getActiveJobs();
  const jobs = result.success ? result.jobs : [];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#0d0d0f] text-[#ededed]">
      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_vision.png"
            alt="MIVA Engineers"
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide mb-4">
            Invent your future,<br />here at MIVA
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-medium tracking-wide mb-8">
          Engineering the future of flight
        </h2>
        <div className="max-w-4xl text-gray-400 font-light leading-relaxed space-y-6 mb-24">
          <p>
            MIVA is building a new category of aircraft that will change how the world defends itself. To do that, we need the best people in the world to help us create what's never been built before.
          </p>
          <p>
            One of the most underrated but essential traits for invention is imagination - the ability to dream up something new and make it real. The world often lacks imagination, but at MIVA, it's the fuel we run on.
          </p>
        </div>

        {/* Our Teams */}
        <h2 className="text-2xl md:text-3xl font-medium tracking-wide mb-8">
          Our teams
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <div className="bg-[#1a1a1c] border border-white/5 h-[250px] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
               <span className="text-gray-600 font-light tracking-widest uppercase">Aircraft Platform</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              <strong className="text-white font-medium">Aircraft:</strong> This team is building 8-seater hybrid-electric aircraft - from aerodynamic optimization and structural design, to propulsion integration, systems engineering, and full-scale testing. And as we continue developing the aircraft, the natural next step is autonomy - building the perception, navigation, and intelligence that will eventually fly it.
            </p>
          </div>
          
          <div>
            <div className="bg-[#1a1a1c] border border-white/5 h-[250px] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
               <span className="text-gray-600 font-light tracking-widest uppercase">Propulsion Systems</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              <strong className="text-white font-medium">Propulsion:</strong> This team is building world-class defense propulsion engines - from compressor and turbine design, combustion systems, rotor dynamics to controls and test infrastructure.
            </p>
          </div>
        </div>

        {/* Open Roles */}
        <h2 className="text-2xl md:text-3xl font-medium tracking-wide mb-4">
          Open roles ({jobs.length})
        </h2>
        <p className="text-gray-400 font-light text-sm mb-12">
          Explore our openings and select a position to see full details and apply.
        </p>
        
        <div className="mb-24">
          <InteractiveJobsList jobs={jobs} />
        </div>

        {/* Didn't find the right role */}
        <div className="mb-24">
          <h2 className="text-2xl font-medium tracking-wide mb-4">
            Didn't find the right role?
          </h2>
          <p className="text-gray-400 font-light leading-relaxed">
            Still send us your profile at <a href="mailto:hiring@miva.com" className="text-blue-400 hover:underline">hiring@miva.com</a> if you've ever built something cool and want to be part of a team that could one day, rewrite history. We will take it from there!
          </p>
        </div>

        {/* Application Form */}
        <div id="apply-form" className="bg-[#131316] border border-white/5 p-8 md:p-12 rounded-2xl max-w-2xl">
          <h2 className="text-xl font-medium tracking-wide mb-8">
            Submit Application
          </h2>
          <CareerApplicationForm jobs={jobs} />
        </div>
      </section>
    </div>
  );
}
