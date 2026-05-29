import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-24 text-sm font-light text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (Company name, addresses, contact details, social links) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Link href="/" className="text-2xl font-black tracking-widest uppercase block text-[#0f2042]">
              MIVΛ
            </Link>
            <p className="font-bold text-primary uppercase tracking-wider text-xs">
              MIVΛ Aerospace & Defence Technology LLP
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
              <div>
                <p className="font-bold text-primary uppercase tracking-wider text-[10px] mb-1.5">R&D Office</p>
                <p>
                  1504, 1505, 15 Floor, The Junomoneta Tower,<br />
                  Near Rajhans Cinema, Opposite Pal RTO, Adajan,<br />
                  Surat, Gujarat, 395009, India
                </p>
              </div>
              <div>
                <p className="font-bold text-primary uppercase tracking-wider text-[10px] mb-1.5">Regd. Office</p>
                <p>
                  FLAT-202, LOTUS-24, Dabholi Road,<br />
                  Katargam, Surat, Gujarat, 395004, India
                </p>
              </div>
            </div>

            <div className="pt-2 space-y-1.5 text-xs text-primary font-medium">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-[#0f2042]/70" /> 
                <a href="mailto:info@mivaaero.com" className="hover:underline">info@mivaaero.com</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-[#0f2042]/70" /> 
                <span>+91 (800) MIVA-AERO</span>
              </p>
            </div>

            {/* Social Links (Email, Phone, LinkedIn) */}
            <div className="flex gap-4 pt-2">
              <a href="mailto:info@mivaaero.com" className="p-2 border border-border rounded-lg hover:bg-muted transition-colors text-primary hover:text-[#0f2042]" title="Email Us">
                <Mail size={16} />
              </a>
              <a href="tel:+918006482237" className="p-2 border border-border rounded-lg hover:bg-muted transition-colors text-primary hover:text-[#0f2042]" title="Call Us">
                <Phone size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-border rounded-lg hover:bg-muted transition-colors text-primary hover:text-[#0f2042] flex items-center justify-center w-[34px] h-[34px]" title="LinkedIn">
                <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column (Company Navigation and Support Links) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 text-left lg:pl-12">
            <div>
              <h3 className="text-xs font-bold text-primary tracking-widest uppercase mb-4">Company</h3>
              <ul className="space-y-3 text-xs">
                <li>
                  <Link href="/about" className="hover:text-[#0f2042] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-[#0f2042] transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold text-primary tracking-widest uppercase mb-4">Support</h3>
              <ul className="space-y-3 text-xs">
                <li>
                  <Link href="/contact" className="hover:text-[#0f2042] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row (Legal copyright & links) */}
        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} MIVΛ Aerospace & Defence Technology LLP. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-medium text-primary">
            <Link href="/terms" className="hover:underline">Terms of Use</Link>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/returns" className="hover:underline">Return Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
