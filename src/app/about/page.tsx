import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | MIVA",
  description: "Learn about MIVA's vision and our role in the defense and aerospace industry.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#0d0d0f] text-[#ededed]">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 md:px-8 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide mb-4">
          Rewriting defense aviation
        </h1>
        <p className="text-gray-400 font-light tracking-wide text-sm md:text-base uppercase mb-16">
          Making tactical dominance autonomous and constant.
        </p>
        <div className="w-full max-w-7xl relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="/hero_drone_bg.png"
            alt="MIVA Advanced Aerospace Drone"
            fill
            priority
            className="object-cover rounded-2xl"
            sizes="100vw"
          />
        </div>
      </section>
      
      {/* The MIVA Approach */}
      <section className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-medium tracking-wide mb-8">
          The MIVA approach
        </h2>
        <div className="max-w-4xl">
          <p className="text-gray-400 font-light leading-relaxed mb-6">
            We're building a new class of defense aircraft — designed for stealth, endurance, and high-frequency operations. Creating a new class of aircraft takes more than just incremental improvements. We take a systems approach from first principles because that's how we rewrite the rulebook on aerospace. We're innovating from the core to every single subsystem.
          </p>
          <ul className="list-disc pl-5 text-gray-400 font-light space-y-2 mb-16">
            <li>Aerodynamics engineered for extreme efficiency and stealth signatures.</li>
            <li>Hybrid propulsion combined with advanced power management.</li>
            <li>Autonomy built from day one to make flying safer, scalable, and future-ready.</li>
          </ul>
        </div>
        
        <div className="w-full relative h-[250px] md:h-[400px] overflow-hidden rounded-2xl mb-24">
          <Image
            src="/drone_fleet.png"
            alt="MIVA Fleet"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* 3 Columns Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
          <div>
            <div className="bg-[#1a1a1c] border border-white/5 h-[200px] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
              <span className="text-gray-600 font-light tracking-widest uppercase">Rapid Deployment</span>
            </div>
            <h3 className="text-xl font-medium tracking-wide mb-4">Vertical Take-off</h3>
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              Advanced propulsion vectors provide the exact lift for quick take-offs from ultra-compact areas, making operations accessible without traditional air bases.
            </p>
          </div>
          
          <div>
            <div className="bg-[#1a1a1c] border border-white/5 h-[200px] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
              <span className="text-gray-600 font-light tracking-widest uppercase">Stealth Systems</span>
            </div>
            <h3 className="text-xl font-medium tracking-wide mb-4">Hybrid propulsion</h3>
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              We're combining batteries that deliver silent operations with efficient engines for range and endurance. The result: lower thermal signatures and reliable performance.
            </p>
          </div>
          
          <div>
            <div className="bg-[#1a1a1c] border border-white/5 h-[200px] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
              <span className="text-gray-600 font-light tracking-widest uppercase">AI Navigation</span>
            </div>
            <h3 className="text-xl font-medium tracking-wide mb-4">Autonomy</h3>
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              Our aircraft feature built-in autonomy with advanced systems managing stability, navigation, and mission objectives - reducing workload and enabling scalable swarm operations.
            </p>
          </div>
        </div>

        {/* The Road Ahead */}
        <div className="bg-[#131316] rounded-2xl p-8 md:p-12 border border-white/5">
          <h2 className="text-xl font-medium tracking-wide mb-6">The road ahead</h2>
          <p className="text-gray-400 font-light leading-relaxed text-sm mb-6">
            Our first demonstrators are already under development. With flight testing underway, we will push the envelope towards full-scale production to bring the next generation of defense aircraft to life. But this is just the beginning.
          </p>
          <p className="text-gray-400 font-light leading-relaxed text-sm">
            MIVA aims to expand the capabilities of global defense networks - built with precision, for precision, and accessible globally.
          </p>
        </div>
      </section>
    </div>
  );
}
