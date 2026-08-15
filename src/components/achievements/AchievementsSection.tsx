import React from 'react';
import { Award, ShieldCheck, ExternalLink, CheckCircle2, Terminal, Code2 } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';
import { ParallaxCard } from '../ui/ParallaxCard';
import { ZeroGBadge } from '../ui/ZeroGBadge';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/40 border border-sky-500/30 text-sky-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>COMPETITIVE CODING & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Competitive Achievements & Badges
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Demonstrated algorithmic consistency across CodeChef, HackerRank, and advanced programming challenges.
          </p>
        </div>

        {/* Featured Hero Milestone: CodeChef 250+ Problems Solved Silver Badge Showcase */}
        <div className="mb-12">
          <ParallaxCard className="p-6 sm:p-10 border-sky-500/40 bg-gradient-to-r from-[#0C121E] via-[#0E0E12] to-[#14121E]" intensity={8}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: CodeChef Badge Visual */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-black/40 border border-zinc-800/80 shadow-2xl relative overflow-hidden">
                {/* Background Aura */}
                <div className="absolute w-40 h-40 bg-sky-400/20 rounded-full blur-2xl animate-pulse-glow" />

                {/* Floating Silver Badge Icon */}
                <div className="relative z-10 my-4 flex flex-col items-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-zinc-300 bg-gradient-to-tr from-zinc-700 via-zinc-200 to-zinc-400 p-1 shadow-2xl flex items-center justify-center animate-float-medium">
                    <div className="w-full h-full rounded-full bg-[#0E1626] border border-sky-400/40 flex flex-col items-center justify-center text-center p-2">
                      <span className="text-2xl sm:text-3xl">🥈</span>
                      <span className="text-[10px] font-mono font-bold text-zinc-200 uppercase tracking-tighter">SILVER</span>
                    </div>
                  </div>

                  <p className="text-xs text-sky-400 font-mono mt-3 uppercase tracking-widest">Congratulations!</p>
                  <h4 className="text-xl font-black text-white mt-0.5">250 Problems Solved</h4>
                  <p className="text-xs text-zinc-400 font-mono mt-1">Problem Solver Silver Badge • CODECHEF</p>
                </div>

                <ZeroGBadge delay={0.2} duration={5} yOffset={4} className="mt-2 border-zinc-700 bg-zinc-900/90 text-zinc-300">
                  <span className="text-sky-400 font-bold">250+</span> Problems on CodeChef
                </ZeroGBadge>
              </div>

              {/* Right Column: Key Details & Stats */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Verified Platform Milestone</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  CodeChef Silver Badge Problem Solver
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  Successfully tackled and resolved over <strong>250+ algorithmic coding challenges</strong> spanning array manipulations, binary search, prefix sums, recursion, sorting routines, and dynamic programming on CodeChef.
                </p>

                {/* Metric Telemetry Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                    <p className="text-[10px] font-mono text-zinc-400">Total Solved</p>
                    <p className="text-lg font-bold text-white font-mono">250+</p>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                    <p className="text-[10px] font-mono text-zinc-400">Badge Tier</p>
                    <p className="text-lg font-bold text-sky-400 font-mono">Silver 🥈</p>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 col-span-2 sm:col-span-1">
                    <p className="text-[10px] font-mono text-zinc-400">Track Record</p>
                    <p className="text-lg font-bold text-emerald-400 font-mono">Top Rating</p>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-3 flex items-center gap-3">
                  <a
                    href="https://www.codechef.com/users/anshprajapati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-ice-primary text-xs font-semibold"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>View CodeChef Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>

            </div>
          </ParallaxCard>
        </div>

        {/* Other Key Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS_DATA.slice(1).map((ach) => (
            <ParallaxCard
              key={ach.id}
              className="p-6 sm:p-8 flex flex-col justify-between h-full group"
              intensity={12}
            >
              <div className="space-y-5">
                
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                      {ach.id === 'hackerrank-problem-solver' ? (
                        <Code2 className="w-6 h-6 text-emerald-400" />
                      ) : (
                        <ShieldCheck className="w-6 h-6 text-sky-400" />
                      )}
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-sky-300">
                        {ach.badgeTier}
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
                      title="Verify"
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

                {/* Metrics Pill */}
                <div className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">{ach.metricLabel}:</span>
                  <span className="text-sky-400 font-bold">{ach.metricNumber}</span>
                </div>

                {/* Skills pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {ach.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                      {s}
                    </span>
                  ))}
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
                    <span>View Record</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </ParallaxCard>
          ))}
        </div>

      </div>
    </section>
  );
};
