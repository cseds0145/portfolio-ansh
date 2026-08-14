import React from 'react';
import { Award, ShieldCheck, ExternalLink, Sparkles, CheckCircle2, TrendingUp, Terminal } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';
import { ParallaxCard } from '../ui/ParallaxCard';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/40 border border-sky-500/30 text-sky-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MILESTONES & HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Demonstrated algorithmic consistency and certified competence in enterprise software foundations.
          </p>
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS_DATA.map((ach) => (
            <ParallaxCard
              key={ach.id}
              className="p-6 sm:p-8 flex flex-col justify-between h-full group"
              intensity={12}
            >
              <div className="space-y-5">
                
                {/* Header Row with Badge & Issuer */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:shadow-ice-sm transition-all duration-300">
                      {ach.id === 'codechef-bronze' ? (
                        <Award className="w-6 h-6 text-amber-400" />
                      ) : (
                        <ShieldCheck className="w-6 h-6 text-sky-400" />
                      )}
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-sky-300">
                        {ach.badgeType}
                      </span>
                      <p className="text-xs text-zinc-400 font-mono mt-1">
                        {ach.issuer}
                      </p>
                    </div>
                  </div>

                  {ach.verifyUrl && (
                    <a
                      href={ach.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-sky-300 hover:border-sky-500/30 transition-colors"
                      title="Verify Credential"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {ach.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                {/* Key Metrics / Verification Pill */}
                <div className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">Track Record:</span>
                  <span className="text-sky-400 font-semibold">{ach.metrics}</span>
                </div>

              </div>

              {/* Bottom Verification Footer */}
              <div className="pt-5 mt-5 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Credential Verified</span>
                </div>
                {ach.verifyUrl && (
                  <a
                    href={ach.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline flex items-center gap-1"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </ParallaxCard>
          ))}
        </div>

        {/* Algorithmic Practice Snapshot Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl glass-card border border-sky-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <TrendingUp className="w-4 h-4 text-sky-400" />
              <span>Continuous Algorithmic Growth</span>
            </h4>
            <p className="text-xs text-zinc-400">
              Daily practice on CodeChef and LeetCode tackling Arrays, HashMaps, Two-Pointers, Recursion, and Binary Search.
            </p>
          </div>

          <a
            href={ACHIEVEMENTS_DATA[0].verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl btn-ice-outline text-xs font-mono shrink-0 flex items-center gap-2"
          >
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span>CodeChef Profile</span>
          </a>
        </div>

      </div>
    </section>
  );
};
