import React from 'react';
import { X, Download, FileText, CheckCircle2, Award, Briefcase, GraduationCap, MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_DATA, SKILL_CATEGORIES, EDUCATION_DATA, ACHIEVEMENTS_DATA, CERTIFICATES_DATA } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-sky-500/30 bg-[#0E0E10] p-6 sm:p-8 text-zinc-200 shadow-2xl shadow-sky-500/10">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Curriculum Vitae</h3>
              <p className="text-xs text-zinc-400 font-mono">Ansh Prajapati • Software & AI Engineering</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 text-black font-semibold text-xs transition-all hover:bg-sky-400 hover:shadow-ice-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save / Print PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="space-y-6 text-sm">
          {/* Header Info */}
          <div className="text-center sm:text-left border-b border-zinc-800/80 pb-6">
            <h1 className="text-2xl font-bold text-white tracking-wide">{PERSONAL_INFO.name}</h1>
            <p className="text-sky-400 font-mono text-xs mt-1">{PERSONAL_INFO.role}</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-sky-400" /> {CONTACT_DATA.location}</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-sky-400" /> {CONTACT_DATA.email}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-sky-400" /> {CONTACT_DATA.phone}</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400 mb-3">
              <GraduationCap className="w-4 h-4" /> Education & Academic Affiliation
            </h4>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="font-semibold text-white">{edu.degree}</span>
                    <span className="text-xs font-mono text-sky-300">{edu.duration}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">{edu.institution} • {edu.location}</p>
                  <p className="text-xs text-zinc-300 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Industry Credentials */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400 mb-3">
              <ShieldCheck className="w-4 h-4" /> Certifications & Credentials
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATES_DATA.map((cert) => (
                <div key={cert.id} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white text-xs">{cert.title}</p>
                    <p className="text-[11px] text-zinc-400 font-mono mt-0.5">{cert.issuer} • {cert.issueDate}</p>
                    {cert.credentialId && (
                      <p className="text-[10px] text-sky-300 font-mono">ID: {cert.credentialId}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400 mb-3">
              <Award className="w-4 h-4" /> Key Achievements & Competitive Coding
            </h4>
            <div className="space-y-2.5">
              {ACHIEVEMENTS_DATA.map((ach) => (
                <div key={ach.id} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                  <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white text-xs">{ach.title}</span>
                    <span className="text-xs text-zinc-400 block mt-0.5">{ach.description}</span>
                    <span className="text-[11px] font-mono text-sky-300 block mt-1">{ach.metricLabel}: {ach.metricNumber}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400 mb-3">
              <Briefcase className="w-4 h-4" /> Technical Competencies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                  <p className="text-xs font-mono text-zinc-300 font-semibold mb-1.5">{cat.title}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s, sIdx) => (
                      <span key={sIdx} className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 font-mono">
          <span>Ansh Prajapati Portfolio • Verified Credentials</span>
          <button
            onClick={onClose}
            className="text-sky-400 hover:underline"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
