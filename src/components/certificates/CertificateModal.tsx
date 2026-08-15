import React, { useState } from 'react';
import { X, ExternalLink, Download, Check, Copy, ShieldCheck, Award } from 'lucide-react';
import { CertificateItem } from '../../types';
import { CertificateCardVisual } from './CertificateCardVisual';

interface CertificateModalProps {
  cert: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!cert) return null;

  const handleCopyId = () => {
    if (cert.credentialId) {
      navigator.clipboard.writeText(cert.credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-sky-500/30 bg-[#0C0C0E] p-6 sm:p-8 text-zinc-200 shadow-2xl shadow-sky-500/10">
        
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-zinc-800 pb-4 mb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-300 text-xs font-mono">
                {cert.badgeType}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                {cert.issuer}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {cert.title}
            </h3>
            <p className="text-xs sm:text-sm text-sky-400 font-mono">
              Awarded to Ansh Prajapati • {cert.issueDate}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors shrink-0 ml-4"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Visual Showcase */}
        <div className="mb-6 rounded-2xl border border-zinc-800 bg-black/50 p-2 sm:p-4 shadow-inner">
          <CertificateCardVisual cert={cert} className="w-full shadow-2xl" />
        </div>

        {/* Certificate Metadata & Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-xs">
          
          {/* Left info box */}
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
            <h4 className="font-mono uppercase tracking-widest text-sky-400 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Verified Competencies
            </h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {cert.skillsCovered.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-200 border border-zinc-700/60 font-mono text-[11px]"
                >
                  {skill}
                </span>
              ))}
            </div>
            {cert.curriculum && (
              <p className="text-zinc-400 text-xs pt-1 border-t border-zinc-800">
                <strong className="text-zinc-300">Curriculum:</strong> {cert.curriculum}
              </p>
            )}
          </div>

          {/* Right Verification box */}
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
            <h4 className="font-mono uppercase tracking-widest text-sky-400 font-semibold flex items-center gap-1.5">
              <Award className="w-4 h-4" /> Authority & Signatory
            </h4>
            <div className="space-y-1.5 text-zinc-300">
              <p><strong>Issuing Organization:</strong> {cert.issuer}</p>
              <p><strong>Authorized Signatory:</strong> {cert.signatory}</p>
              <p><strong>Issue Date:</strong> {cert.issueDate}</p>
              {cert.credentialId && (
                <div className="flex items-center justify-between pt-1 border-t border-zinc-800">
                  <span className="font-mono text-[11px] text-zinc-400">ID: {cert.credentialId}</span>
                  <button
                    onClick={handleCopyId}
                    className="flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-[10px] text-sky-300 font-mono transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy ID'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-zinc-800">
          <div className="flex items-center gap-2">
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl btn-ice-primary text-xs font-semibold"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl btn-ice-outline text-xs font-medium"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save / Print</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white text-xs"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
