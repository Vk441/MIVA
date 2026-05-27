import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#0d0d0f] text-[#ededed]">
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4 text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.3em] uppercase max-w-5xl leading-loose mb-12">
          EMPOWERING THE SKY
        </h1>
        <div className="w-full max-w-7xl relative h-[250px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/hero_drone_bg.png"
            alt="MIVA Advanced Aerospace Drone"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-transparent to-transparent opacity-80" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <h3 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">About</h3>
        <h2 className="text-3xl md:text-4xl font-medium tracking-wide mb-12">
          Redefining the future of defense
        </h2>
        <div className="w-full relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/about_vision.png"
            alt="MIVA Manufacturing"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-400 font-light leading-relaxed text-lg md:text-xl mb-6">
            Founded in 2026, MIVA is building a new generation of autonomous defense aircraft — engineered to operate in the most demanding environments with zero margin for error.
          </p>
          <p className="text-gray-400 font-light leading-relaxed text-lg md:text-xl mb-8">
            Our drones are designed from first principles: advanced aerodynamics for unparalleled efficiency, AI-driven autonomy built-in from day one, and payload capabilities that make operations smarter and safer.
          </p>
          <Link 
            href="/about" 
            className="border border-white/30 text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors inline-block"
          >
            Learn more
          </Link>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-4 md:px-12 lg:px-24 w-full bg-[#121214] flex flex-col items-center text-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <h3 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">Vision</h3>
          <h2 className="text-3xl md:text-4xl font-medium tracking-wide mb-8">
            A future shaped by uncompromised security
          </h2>
          <div className="max-w-3xl mb-12">
            <p className="text-gray-400 font-light leading-relaxed text-lg md:text-xl mb-6">
              Imagine a world where intelligence and surveillance are effortless. Where our assets aren't confined to traditional operating bases, but deployable anywhere, bypassing conventional infrastructure.
            </p>
            <p className="text-gray-400 font-light leading-relaxed text-lg md:text-xl">
              MIVA is building that world. A dense network of high-frequency defense aircraft, compact and stealthy, that unlock true tactical advantage. That's our vision: engineering breakthroughs that transform global security into a constant.
            </p>
          </div>
          <div className="w-full relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="/drone_fleet.png"
              alt="MIVA Drone Fleet"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Careers Section Preview */}
      <section className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full text-center">
        <h3 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">Careers</h3>
        <h2 className="text-3xl md:text-4xl font-medium tracking-wide mb-12">
          We are hiring
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 text-left">
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#1a1a1c] border border-white/5 w-full h-[250px] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
               <span className="text-gray-600 font-light tracking-widest uppercase">Aerospace Engineering</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed text-base mb-6 max-w-sm mx-auto">
              Our aircraft team is leading the development of our autonomous platforms, spanning design, prototyping, systems integration, and testing.
            </p>
            <Link 
              href="/careers" 
              className="border border-white/30 text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors inline-block"
            >
              Learn more
            </Link>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#1a1a1c] border border-white/5 w-full h-[250px] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
               <span className="text-gray-600 font-light tracking-widest uppercase">Autonomous Systems</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed text-base mb-6 max-w-sm mx-auto">
              Our AI team is focused on building world-class neural networks for navigation, threat detection, and swarm intelligence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
