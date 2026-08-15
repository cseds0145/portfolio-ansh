import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-zinc-800/80 bg-[#08080A] py-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="text-center sm:text-left space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-bold text-white tracking-tight">{PERSONAL_INFO.name}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400">
                Zero-G Portfolio
              </span>
            </div>
            <p className="text-xs text-zinc-500 font-mono">
              ABES Engineering College • B.Tech CSE (2025–2029)
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
            <a href="#about" className="hover:text-sky-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-sky-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-sky-300 transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-sky-300 transition-colors">Certificates</a>
            <a href="#achievements" className="hover:text-sky-300 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-sky-300 transition-colors">Contact</a>
          </div>

          {/* Back to Top Zero-G Pill */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-[#121214] text-xs font-mono text-zinc-400 hover:border-sky-500/40 hover:text-white hover:shadow-ice-sm transition-all"
            title="Return to Orbit"
          >
            <span>Back to Orbit</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] font-mono text-zinc-600">
          <span>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </span>
          <span className="flex items-center gap-1">
            Engineered with React, Three.js & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
};
