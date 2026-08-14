import React from 'react';
import { ArrowRight, Sparkles, Code, Cpu, Layers, Terminal, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO, HERO_FLOATING_TAGS } from '../../data/portfolioData';
import { HeroCore3D } from '../3d/HeroCore3D';
import { ZeroGBadge } from '../ui/ZeroGBadge';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status / Affiliation Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121214]/80 border border-sky-500/30 backdrop-blur-xl shadow-ice-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span className="text-xs font-mono text-zinc-300">
                {PERSONAL_INFO.institution} • B.Tech CSE (2025–2029)
              </span>
            </div>

            {/* Main Name Heading with Ultra-Crisp Typography */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-sky-400">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-sky-400/90 font-mono">
                {PERSONAL_INFO.role}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              "{PERSONAL_INFO.tagline}"
            </p>

            {/* Floating Zero-G Badges in Hero */}
            <div className="pt-2 pb-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {HERO_FLOATING_TAGS.map((tag, idx) => (
                <ZeroGBadge
                  key={tag.label}
                  delay={tag.delay}
                  duration={4 + idx * 0.7}
                  yOffset={6 + (idx % 3) * 3}
                  className="cursor-default"
                >
                  <span className="text-sm">{tag.icon}</span>
                  <span className="font-mono text-xs">{tag.label}</span>
                </ZeroGBadge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl btn-ice-primary text-sm font-semibold tracking-wide"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl btn-ice-outline text-sm font-medium"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Live Telemetry / Academic Focus Micro-bar */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>AAIIC Applied AI Cell Member</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>50+ Algorithmic Solutions</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Anti-Gravity Core */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <HeroCore3D />
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs text-zinc-500 hover:text-sky-400 transition-colors font-mono"
      >
        <span>EXPLORE</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-sky-400" />
      </a>
    </section>
  );
};
