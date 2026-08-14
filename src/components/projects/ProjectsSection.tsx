import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Clock, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { Project } from '../../types';
import { ParallaxCard } from '../ui/ParallaxCard';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/40 border border-sky-500/30 text-sky-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Interactive web applications, agentic workflows, and 3D algorithm visualizers built with focus on responsiveness and performance.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => {
            const isCompleted = project.status === 'Completed';

            return (
              <ParallaxCard
                key={project.id}
                className="p-6 sm:p-8 flex flex-col justify-between h-full group"
                intensity={14}
              >
                <div className="space-y-5">
                  {/* Top Status & Metrics Row */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${
                        isCompleted
                          ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                          : 'bg-sky-500/10 border border-sky-500/30 text-sky-300'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>Live Project</span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3 text-sky-400 animate-spin" />
                          <span>In Progress</span>
                        </>
                      )}
                    </span>

                    <span className="text-xs font-mono text-zinc-500">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Project Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-zinc-500 hover:text-sky-400 transition-colors"
                        title="View Architecture Details"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </h3>
                    <p className="text-xs text-sky-400 font-mono mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-zinc-900/80 border border-zinc-800 text-[11px] font-mono text-zinc-300 group-hover:border-sky-500/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Key Highlights list */}
                  <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <span className="w-1 h-1 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                  {isCompleted ? (
                    <>
                      <div className="flex items-center gap-2">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl btn-ice-primary text-xs font-semibold"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl btn-ice-outline text-xs"
                            title="GitHub Repository"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs text-sky-400 font-mono hover:underline"
                      >
                        Details →
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400/60" />
                        {project.metrics}
                      </span>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs text-zinc-400 hover:text-sky-300 font-mono"
                      >
                        Preview Roadmap
                      </button>
                    </>
                  )}
                </div>
              </ParallaxCard>
            );
          })}
        </div>

      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
