import React from 'react';
import { GraduationCap, Sparkles, BrainCircuit, BookOpen, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { EDUCATION_DATA, PERSONAL_INFO } from '../../data/portfolioData';
import { ParallaxCard } from '../ui/ParallaxCard';

export const AboutEducation: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      {/* Subtle Section Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/40 border border-sky-500/30 text-sky-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About & Education
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Bridging foundational algorithmic computer science with cutting-edge intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Narrative & Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <ParallaxCard className="p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Engineering Philosophy</h3>
                  <p className="text-xs text-zinc-400 font-mono">Algorithm Rigor + AI Exploration</p>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>

              <div className="space-y-3 pt-2 border-t border-zinc-800/80">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">
                    Strong focus on Object-Oriented Principles, Clean Architecture, and Big-O efficiency.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">
                    Passionate about Generative AI architectures, prompt optimization, and tool orchestration.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">
                    Proactive technical authoring and documentation of AI pipelines.
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="pt-3">
                <div className="p-3 rounded-xl bg-sky-950/30 border border-sky-500/30 text-xs text-sky-300 font-mono flex items-center justify-between">
                  <span>Target Graduation: 2029</span>
                  <span className="text-white font-bold">ABES CSE</span>
                </div>
              </div>
            </ParallaxCard>
          </div>

          {/* Right Column: Interactive Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-8">
              {EDUCATION_DATA.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Glowing Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0c0c0e] border-2 border-sky-400 shadow-ice-sm group-hover:scale-125 transition-transform duration-200" />

                  <ParallaxCard className="p-6 sm:p-7 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono font-medium">
                          {item.duration}
                        </span>
                        {item.current && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                            Active
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 text-xs text-zinc-400 font-mono">
                        <MapPin className="w-3 h-3 text-sky-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                        {item.degree}
                      </h4>
                      <p className="text-xs text-zinc-400 font-mono mt-0.5">
                        {item.institution}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                      {item.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                          <span className="text-xs text-zinc-300">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </ParallaxCard>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
