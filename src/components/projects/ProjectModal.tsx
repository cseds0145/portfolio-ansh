import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-sky-500/30 bg-[#0e0e10] p-6 sm:p-8 text-zinc-200 shadow-2xl shadow-sky-500/10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Section */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-mono">
            <span>{project.status === 'Completed' ? '✓ Completed Project' : '⚡ ' + project.status}</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
          <p className="text-sm text-sky-300 font-mono">{project.subtitle}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="space-y-4 text-sm text-zinc-300 mb-6">
          <p className="leading-relaxed">{project.longDescription || project.description}</p>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Architectural Features
            </h4>
            <div className="space-y-1.5 pt-1">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl btn-ice-primary text-xs font-semibold"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl btn-ice-outline text-xs font-semibold"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Repository</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="ml-auto px-4 py-2.5 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white text-xs"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
