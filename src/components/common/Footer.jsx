import { Link, NavLink } from "react-router-dom";
import { FiArrowRight, FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Logo from "./Logo";

const quickLinks = [
  { title: "Home", link: "/" },
  { title: "How It Works", link: "/how-it-works" },
  { title: "Services", link: "/services" },
  { title: "Contact", link: "/contact" },
];

const supportItems = [
  "AI-assisted form guidance",
  "Document checklist review",
  "Callback support for difficult applications",
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#102843]">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">
          <div className="space-y-5">
            <Logo className="mx-0" />
            <p className="max-w-md text-sm leading-7 text-blue-50/78 sm:text-base">
              Helping users fill forms with confidence through guided assistance, document verification support, and direct follow-up when a
              process gets stuck.
            </p>
            <div className="grid gap-3 text-sm text-blue-50/80 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-blue-100/70">Support Hours</p>
                <div className="mt-2 flex items-center gap-2 text-white">
                  <FiClock className="text-base text-blue-200" />
                  <span>Mon - Sat, 9 AM - 7 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100/80">Quick Links</h3>
            <div className="mt-5 flex flex-col gap-3">
              {quickLinks.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.link}
                  className={({ isActive }) =>
                    `w-fit text-sm transition-colors duration-200 ${isActive ? "text-white" : "text-blue-50/72 hover:text-white"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100/80">What We Help With</h3>
            <div className="mt-5 flex flex-col gap-3">
              {supportItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-blue-50/78"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100/80">Contact</h3>
            <div className="mt-5 flex flex-col gap-4 text-sm text-blue-50/78">
              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 transition-colors duration-200 hover:bg-white/10"
              >
                <FiPhone className="mt-0.5 text-base text-blue-200" />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:support@formassist.in"
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 transition-colors duration-200 hover:bg-white/10"
              >
                <FiMail className="mt-0.5 text-base text-blue-200" />
                <span>support@formassist.in</span>
              </a>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                <FiMapPin className="mt-0.5 text-base text-blue-200" />
                <span>Remote-first assistance for users across India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-blue-100/62 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>© {year} FormAssist. Built to make form submission simpler.</p>
          <p>Guided applications. Faster document checks. Human support when needed.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;