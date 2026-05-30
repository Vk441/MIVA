import { getActiveJobs } from "@/app/actions";
import CareerApplicationForm from "@/components/CareerApplicationForm";
import InteractiveJobsList from "@/components/InteractiveJobsList";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | MIVA Systems",
  description: "Join MIVA and build the future of aerospace and defense.",
};

export const dynamic = "force-dynamic";

export default async function CareersPage() {
  const result = await getActiveJobs();
  const jobs = result.success ? result.jobs : [];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      {/* Hero */}
      <section className="relative pt-32 pb-8 h-auto flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_vision.png"
            alt="MIVA Engineers"
            fill
            priority
            className="object-cover opacity-10 grayscale"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-2 pt-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest bg-primary/10 text-primary border border-primary/15 px-3.5 py-1.5 rounded-full inline-block">
            Join the Mission
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider text-[#0f2042] pt-1">
            Invent the future of flight
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed pt-1.5">
            We are building technologies that redefine flight. Join us in engineering self-reliant systems designed for uncompromised security.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        {/* Intro Grid - Showing ONLY ONE prominent widescreen blueprint image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6 text-muted-foreground font-light leading-relaxed text-base md:text-lg">
            <h2 className="text-2xl md:text-3xl font-medium tracking-wide text-primary">
              Engineering autonomous defense systems
            </h2>
            <p>
              MIVA is building a new category of autonomous aircraft that will transform defense aviation. To do that, we need creative individuals ready to solve complex physical problems from first principles.
            </p>
            <p>
              If you thrive at the intersection of imagination, hard hardware engineering, and rapid iteration, you'll feel right at home with us.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative h-[300px] md:h-[400px] w-full rounded-3xl overflow-hidden border border-border shadow-md bg-muted">
              <Image
                src="/hiringpage.png"
                alt="Aircraft Engineering Systems Model"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Open Roles */}
        <div className="border-t border-border pt-16 mb-16">
          <h2 className="text-2xl md:text-3xl font-medium tracking-wide text-primary mb-2">
            Open roles ({jobs.length})
          </h2>
          <p className="text-muted-foreground font-light text-sm mb-12">
            Select an opening below to view the job requirements and submit your application instantly.
          </p>
          
          <div className="mb-24">
            <InteractiveJobsList jobs={jobs} />
          </div>
        </div>

        {/* Didn't find the right role */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-muted border border-border p-8 rounded-3xl shadow-sm">
          <div className="lg:col-span-8 space-y-3">
            <h3 className="text-2xl font-bold text-primary tracking-wide">Didn't find the right role?</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-sm">
              We are always looking for passionate builders. Send your profile and a brief description of the coolest project you've ever engineered, and we'll take it from there.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a 
              href="mailto:hiring@miva.com" 
              className="inline-block text-xs font-bold uppercase tracking-widest text-white bg-primary px-6 py-4 rounded-xl hover:bg-primary/95 transition-all shadow-sm shadow-primary/10"
            >
              Transmission to Hiring
            </a>
          </div>
        </div>

        {/* Standalone General Application Form */}
        <div id="apply-form" className="bg-muted border border-border p-8 md:p-12 rounded-3xl max-w-2xl shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold uppercase tracking-wide text-primary mb-3">
            Submit Profile
          </h2>
          <p className="text-xs text-muted-foreground font-light mb-8">
            Complete the form below to submit a general profile to our human resources database.
          </p>
          <CareerApplicationForm jobs={jobs} />
        </div>
      </section>
    </div>
  );
}
