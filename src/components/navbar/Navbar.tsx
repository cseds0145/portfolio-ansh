import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scroll spy
      const sections = ['about', 'skills', 'projects', 'certificates', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo with Zero-G Anti-Gravity Icon */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-white font-bold tracking-tight text-lg sm:text-xl"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 group-hover:border-sky-400 group-hover:shadow-ice-sm transition-all duration-300">
            <span className="font-mono text-sm font-black">AP</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          </div>
          <span className="flex items-center gap-1.5">
            Ansh Prajapati
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-950/60 border border-sky-500/30 text-sky-300 font-normal hidden md:inline-block">
              Zero-G
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full border border-white/5 bg-[#121214]/60 backdrop-blur-xl shadow-glass">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-sky-500/15 border border-sky-500/30 shadow-ice-sm'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Resume Download / View */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="group relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-sky-300 bg-sky-950/30 border border-sky-500/40 hover:border-sky-400 hover:bg-sky-500/20 hover:text-white transition-all duration-300 shadow-ice-sm hover:shadow-ice-md"
          >
            <FileDown className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            <span>Resume</span>
            <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-8 h-0.5 bg-sky-400 blur-xs group-hover:w-16 transition-all duration-300" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400"
            title="Resume"
          >
            <FileDown className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-zinc-800 bg-[#121214] text-zinc-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 rounded-2xl border border-zinc-800 bg-[#0c0c0e]/95 backdrop-blur-2xl p-4 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-sky-500/10 hover:border hover:border-sky-500/20 transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 text-black font-semibold text-xs shadow-ice-sm"
            >
              <FileDown className="w-4 h-4" />
              <span>View / Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
