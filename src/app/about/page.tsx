import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | MIVA Systems",
  description: "Learn about MIVA's vision, indigenous UAV systems, and our role in the defense and aerospace industry.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      {/* The MIVΛ Approach */}
      <section id="overview" className="pt-36 pb-8 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full scroll-mt-20">
        <h3 className="text-xs font-semibold tracking-widest text-[#0f2042]/60 uppercase mb-4">Overview</h3>
        <h2 className="text-3xl font-medium tracking-wide mb-6 text-primary">
          The MIVΛ approach
        </h2>
        <div className="max-w-4xl">
          <p className="text-muted-foreground font-light leading-relaxed mb-6 text-base md:text-lg">
            We are building a new class of defense aircraft — engineered from first principles for extreme efficiency, stealth, and high-frequency deployment. To achieve true self-reliance, we develop all core technologies in-house, focusing on three foundational vectors:
          </p>
          <ul className="list-disc pl-5 text-muted-foreground font-light space-y-2 mb-8 text-sm md:text-base">
            <li>Aerodynamics optimized dynamically for custom payload efficiency and minimized acoustics.</li>
            <li>Hybrid electric propulsion units paired with next-generation smart battery controllers.</li>
            <li>Fully custom navigation autonomy algorithms engineered from scratch for contested airspaces.</li>
          </ul>
        </div>
        
        {/* Main Hero Drone Image placed right after Overview section, compact and premium */}
        <div className="max-w-4xl mx-auto w-full relative h-[250px] md:h-[380px] lg:h-[450px] overflow-hidden rounded-2xl mt-6 mb-16 bg-[#fafafc] border border-border/85 shadow-sm flex items-center justify-center">
          <Image
            src="/hero_drone_bg.png"
            alt="MIVΛ Advanced Aerospace Drone"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        {/* Timeline Roadmap Section (Attractive and Brand Aligned) */}
        <div className="border-t border-border pt-24 mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-xs font-semibold tracking-widest text-[#0f2042]/60 uppercase mb-4">Milestones</h3>
              <h2 className="text-3xl font-medium tracking-wide text-primary">Engineering Roadmap</h2>
              <div className="h-[2px] w-12 bg-primary mx-auto my-6 rounded"></div>
            </div>
            
            <div className="relative border-l-2 border-[#0f2042]/10 ml-6 md:ml-32 space-y-12">
              {/* 2026 */}
              <div className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background transition-all group-hover:scale-125" />
                <div className="absolute -left-20 md:-left-28 top-1.5 text-sm font-bold text-[#0f2042]/60 select-none">2026</div>
                <div className="bg-muted border border-border px-6 py-4 rounded-2xl shadow-sm max-w-2xl">
                  <h4 className="font-bold text-primary text-base">Foundations & Inception</h4>
                </div>
              </div>

              {/* 2027 */}
              <div className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background transition-all group-hover:scale-125" />
                <div className="absolute -left-20 md:-left-28 top-1.5 text-sm font-bold text-[#0f2042]/60 select-none">2027</div>
                <div className="bg-muted border border-border px-6 py-4 rounded-2xl shadow-sm max-w-2xl">
                  <h4 className="font-bold text-primary text-base">Multirotor Manufacturing & Testing</h4>
                </div>
              </div>

              {/* 2028 */}
              <div className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background transition-all group-hover:scale-125" />
                <div className="absolute -left-20 md:-left-28 top-1.5 text-sm font-bold text-[#0f2042]/60 select-none">2028</div>
                <div className="bg-muted border border-border px-6 py-4 rounded-2xl shadow-sm max-w-2xl">
                  <h4 className="font-bold text-primary text-base">VTOL Fixed-Wing Launch</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team Section Anchor */}
        <div id="team" className="scroll-mt-24 mb-24 border-t border-border pt-24">
          <h3 className="text-xs font-semibold tracking-widest text-[#0f2042]/60 uppercase mb-4">Our Team</h3>
          <h2 className="text-3xl font-medium tracking-wide mb-8 text-primary">
            Collaborating with Visionaries
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed text-base max-w-4xl">
            MIVΛ is built by a world-class team of aerospace designers, control systems specialists, artificial intelligence engineers, and tactical deployment experts. Operating at the intersections of advanced computing and hard physical engineering, we foster a culture centered on curiosity, imagination, and extreme ownership.
          </p>
        </div>

        {/* The Road Ahead / Our Story */}
        <div id="story" className="bg-muted rounded-3xl p-8 md:p-12 border border-border scroll-mt-24">
          <h2 className="text-xl font-bold uppercase tracking-wider text-primary mb-6">Our Story</h2>
          <p className="text-muted-foreground font-light leading-relaxed text-sm mb-6">
            Founded with the singular vision of securing skies through high-end domestic engineering, MIVΛ has rapidly matured from drafting blueprints to conducting real-world aerodynamic flight testing. 
          </p>
          <p className="text-muted-foreground font-light leading-relaxed text-sm">
            We are working directly with strategic aerospace entities and defense advisors to expand capabilities, streamline domestic assembly hubs, and deploy defense assets that are built with precision, for precision, in India and for the world.
          </p>
        </div>
      </section>
    </div>
  );
}
