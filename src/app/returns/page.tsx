import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return & Refund Policy | MIVA Systems",
  description: "Learn about Miva Aerospace & Defence Technology LLP's equipment return, replacement, and refund policies.",
};

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-36 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/15 px-3.5 py-1.5 rounded-full mb-4 inline-block">
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0f2042]">
            Return Policy
          </h1>
          <div className="h-[2px] w-12 bg-primary mx-auto my-6 rounded"></div>
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
            Last Updated: May 29, 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-muted-foreground font-light leading-relaxed space-y-8 text-sm md:text-base">
          <p>
            At <strong>Miva Aerospace & Defence Technology LLP</strong>, we build high-precision, mission-critical aerospace platforms and tactical UAS systems designed for absolute reliability. Given the highly specialized and technical nature of our systems, returns, refunds, and cancellations are subject to the specific terms set out below.
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f2042]">
              1. Return Authorization (RMA)
            </h2>
            <p>
              <strong>1.1</strong> All return requests must be submitted to our customer logistics team at <a href="mailto:info@mivaaero.com" className="text-primary hover:underline">info@mivaaero.com</a> within seven (7) business days of receiving your equipment.
            </p>
            <p>
              <strong>1.2</strong> No returns will be accepted without a valid Return Merchandise Authorization (RMA) number issued by the Company. Any unauthorized shipments sent to our R&D or Registered offices will be rejected.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f2042]">
              2. Return Eligibility
            </h2>
            <p>
              To be eligible for a return, the following strict conditions must be satisfied:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>The product must be completely unused, unmounted, and in its original, sealed shipping container.</li>
              <li>The equipment must include all originally packed sensors, telemetry links, battery packs, accessories, and documentation sheets.</li>
              <li>There must be no physical, structural, or electronic damage resulting from shipping, handling, or unauthorized power tests.</li>
            </ul>
            <p>
              <strong>2.2 Non-Returnable Items:</strong> Customized aircraft platforms, custom firmware modifications, custom-built hybrid propulsion units, and equipment delivered under tailored military or strategic civil contracts are entirely **non-returnable and non-refundable**.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f2042]">
              3. Order Cancellations
            </h2>
            <p>
              <strong>3.1</strong> Standard product orders may be cancelled within twenty-four (24) hours of placing the order, provided the manufacturing or configuration sequence has not commenced.
            </p>
            <p>
              <strong>3.2</strong> Once customized assembly, composite curing, or flight control programming has started, cancellations are not permitted, and any advanced payments made will be retained by the Company.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f2042]">
              4. Inspection and Evaluation Process
            </h2>
            <p>
              <strong>4.1</strong> Upon receiving the authorized returned equipment at our R&D hub, Miva Aerospace & Defence Technology LLP engineering specialists will conduct a rigorous testing audit within ten (10) business days.
            </p>
            <p>
              <strong>4.2</strong> If the audit confirms the equipment is intact and satisfies all eligibility parameters, a refund or credit note will be approved.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f2042]">
              5. Refunds and Shipping Costs
            </h2>
            <p>
              <strong>5.1</strong> Users are responsible for all secure shipping costs, import customs, and transit insurance required to safely return the equipment to our designated R&D office.
            </p>
            <p>
              <strong>5.2</strong> Approved refunds will be credited back via the original payment method or bank wire transfer within seven (7) to ten (10) bank processing days.
            </p>
          </section>

          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f2042]">
              6. Support Contacts
            </h2>
            <p>
              For all product return requests, warranty claims, or procurement order status queries, please write to:
            </p>
            <div className="bg-muted p-6 rounded-2xl border border-border text-sm space-y-1.5 text-primary font-medium">
              <p className="font-bold text-base text-[#0f2042]">Miva Aerospace & Defence Technology LLP</p>
              <p>Email: <a href="mailto:info@mivaaero.com" className="hover:underline">info@mivaaero.com</a></p>
              <p>Logistics Hub: Surat, Gujarat, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
