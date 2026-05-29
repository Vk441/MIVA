import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MIVA Systems",
  description: "Learn how Miva Aerospace & Defence Technology LLP collects and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-36 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/15 px-3.5 py-1.5 rounded-full mb-4 inline-block">
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0f2042]">
            Privacy Policy
          </h1>
          <div className="h-[2px] w-12 bg-primary mx-auto my-6 rounded"></div>
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
            Last Updated: May 29, 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-muted-foreground font-light leading-relaxed space-y-8 text-sm md:text-base">
          <p>
            This Privacy Policy governs the manner in which <strong>Miva Aerospace & Defence Technology LLP</strong> collects, uses, maintains and discloses information collected from users (each, a &ldquo;User&rdquo;) of the <a href="https://mivaaero.com" className="text-primary font-medium hover:underline">mivaaero.com</a> website (&ldquo;Site&rdquo;). This privacy policy applies to the Site and all products and services offered by <strong>Miva Aerospace & Defence Technology LLP</strong>.
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f2042]">
              Personal identification information
            </h2>
            <p>
              We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, respond to a survey, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, phone number, and credit card information. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site-related activities.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f2042]">
              Non-personal identification information
            </h2>
            <p>
              We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f2042]">
              Web browser cookies
            </h2>
            <p>
              Our Site may use &ldquo;cookies&rdquo; to enhance User experience. User&rsquo;s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f2042]">
              How we use collected information
            </h2>
            <p>
              <strong>Miva Aerospace & Defence Technology LLP</strong> may collect and use Users personal information for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong>To improve customer service:</strong> Information you provide helps us respond to your customer service requests and support needs more efficiently.
              </li>
              <li>
                <strong>To personalize user experience:</strong> We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.
              </li>
              <li>
                <strong>To improve our Site:</strong> We may use the feedback you provide to improve our products and services.
              </li>
              <li>
                <strong>To process payments:</strong> We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.
              </li>
              <li>
                <strong>To share your information with third parties:</strong> We may share or sell information with third parties for marketing or other purposes.
              </li>
              <li>
                <strong>To run a promotion, contest, survey or other Site feature:</strong> To send Users information they agreed to receive about topics we think will be of interest to them.
              </li>
              <li>
                <strong>To send periodic emails:</strong> We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include <strong>Miva Aerospace & Defence Technology LLP</strong> news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f2042]">
              How we protect your information
            </h2>
            <p>
              We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site. Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures. Our Site is also in compliance with PCI vulnerability standards in order to create as secure of an environment as possible for Users.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f2042]">
              Changes to this privacy policy
            </h2>
            <p>
              <strong>Miva Aerospace & Defence Technology LLP</strong> has the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our Site, revise the updated date at the bottom of this page and send you an email. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f2042]">
              Your acceptance of these terms
            </h2>
            <p>
              By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
            </p>
          </section>

          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f2042]">
              Contacting us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
            </p>
            <div className="bg-muted p-6 rounded-2xl border border-border text-sm space-y-1.5 text-primary font-medium">
              <p className="font-bold text-base text-[#0f2042]">Miva Aerospace & Defence Technology LLP</p>
              <p>Website: <a href="https://mivaaero.com" className="hover:underline">mivaaero.com</a></p>
              <p>Email: <a href="mailto:info@mivaaero.com" className="hover:underline">info@mivaaero.com</a></p>
              <p>Secure Helpline: +91 (800) MIVA-AERO</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
