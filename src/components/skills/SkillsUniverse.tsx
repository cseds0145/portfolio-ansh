import React, { useState } from 'react';
import { Code2, Layout, Cpu, Terminal, Sparkles, Filter } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { ParallaxCard } from '../ui/ParallaxCard';
import { ZeroGBadge } from '../ui/ZeroGBadge';

export const SkillsUniverse: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const filteredCategories = selectedCategory
    ? SKILL_CATEGORIES.filter(c => c.title === selectedCategory)
    : SKILL_CATEGORIES;

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Background Ambient Aura */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/40 border border-sky-500/30 text-sky-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills Universe
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Curated technical stack spanning low-level algorithms, modern interface design, and frontier machine intelligence.
          </p>

          {/* Interactive Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedCategory === null
                  ? 'bg-sky-500 text-black font-semibold shadow-ice-sm'
                  : 'bg-[#121214] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              All Categories
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title === selectedCategory ? null : cat.title)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  selectedCategory === cat.title
                    ? 'bg-sky-500 text-black font-semibold shadow-ice-sm'
                    : 'bg-[#121214] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, catIdx) => (
            <ParallaxCard
              key={category.title}
              className="p-6 sm:p-7 flex flex-col justify-between h-full"
              intensity={12}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                    0{catIdx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    {category.description}
                  </p>
                </div>

                {/* Floating Skill Badges */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <ZeroGBadge
                      key={skill.name}
                      delay={sIdx * 0.15}
                      duration={4.5 + (sIdx % 3) * 0.8}
                      yOffset={4 + (sIdx % 2) * 3}
                      className={
                        skill.isPrimary
                          ? 'border-sky-500/30 bg-sky-950/20 text-sky-200'
                          : 'border-zinc-800/80 bg-zinc-900/60 text-zinc-300'
                      }
                    >
                      <span className="font-medium text-xs">{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-zinc-800/80 text-sky-400">
                          {skill.tag}
                        </span>
                      )}
                    </ZeroGBadge>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Highlight */}
              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>{category.skills.length} Competencies</span>
                <span className="text-sky-400/80">Active Study</span>
              </div>
            </ParallaxCard>
          ))}
        </div>

      </div>
    </section>
  );
};
