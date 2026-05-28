import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4 flex flex-col items-center justify-center">
        <HeroSlideshow />
        <div className="text-center mt-8 select-none">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-muted-foreground">
            Empowering the Sky
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">About Us</h3>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide max-w-3xl leading-relaxed text-primary">
          "Empowering the next generation of aerospace through indigenous development and mission-critical Systems."
        </h2>
        
        {/* SEO Anchors / Tab Redirections */}
        <div className="flex justify-center gap-8 md:gap-16 mt-12 border-b border-border pb-6 w-full max-w-xl">
          <Link 
            href="/about#overview" 
            className="text-xs font-bold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            Overview
          </Link>
          <Link 
            href="/about#team" 
            className="text-xs font-bold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            Team
          </Link>
          <Link 
            href="/about#story" 
            className="text-xs font-bold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            Our story
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

      {/* Careers Section Preview */}
      <section className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full text-center">
        <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">Careers</h3>
        <h2 className="text-3xl md:text-4xl font-medium tracking-wide text-primary mb-12">
          Join MIVA Systems
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 text-left">
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
