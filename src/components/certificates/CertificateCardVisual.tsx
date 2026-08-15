import React from 'react';
import { CertificateItem } from '../../types';

interface CertificateCardVisualProps {
  cert: CertificateItem;
  className?: string;
  isInteractive?: boolean;
}

export const CertificateCardVisual: React.FC<CertificateCardVisualProps> = ({
  cert,
  className = '',
}) => {
  // Theme-specific authentic visual layouts matching the provided certificates
  switch (cert.theme) {
    case 'scaler':
      return (
        <div className={`relative overflow-hidden rounded-xl border border-sky-500/30 bg-[#070D18] text-white shadow-2xl p-5 sm:p-6 flex flex-col justify-between aspect-[16/10] select-none ${className}`}>
          {/* Top Dark Navy Header Band */}
          <div className="flex items-start justify-between border-b border-sky-900/60 pb-3">
            <div className="border-l-2 border-sky-400 pl-3">
              <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-sky-300 font-bold">
                Certificate
              </h4>
              <h3 className="text-sm sm:text-base font-extrabold tracking-tight text-white">
                OF EXCELLENCE
              </h3>
              <p className="text-[9px] text-zinc-400 font-mono">THIS CERTIFICATE IS AWARDED TO</p>
            </div>
            <div className="text-right">
              <span className="text-sm sm:text-base font-black tracking-tight text-white font-sans">
                SCALER <span className="text-sky-400 font-serif italic">Topics</span>
              </span>
            </div>
          </div>

          {/* Recipient Name & Course */}
          <div className="my-auto py-2">
            <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-white font-serif">
              Ansh Prajapati
            </h2>
            <p className="text-[11px] sm:text-xs text-zinc-300 mt-1 line-clamp-2">
              In recognition of the completion of the tutorial:{' '}
              <span className="font-semibold text-sky-200">{cert.title}</span>
            </p>

            {/* Modules & Stats Pills */}
            <div className="flex flex-wrap items-center gap-3 mt-2 text-[10px] sm:text-[11px] font-mono text-zinc-400">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                {cert.curriculum}
              </span>
            </div>
          </div>

          {/* Bottom Row: Signatory, Date & Scaler Hologram Seal */}
          <div className="flex items-end justify-between border-t border-sky-900/50 pt-3 text-[10px] sm:text-xs font-mono">
            <div>
              <div className="font-serif italic text-sky-300 font-bold text-sm tracking-wide">
                Anshuman Singh
              </div>
              <div className="text-zinc-400 text-[10px]">Co-founder SCALER</div>
            </div>

            <div className="text-center">
              <span className="text-zinc-400 text-[10px]">{cert.issueDate}</span>
            </div>

            {/* Official Scaler Blue Seal */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-sky-400 bg-sky-950/80 flex flex-col items-center justify-center text-sky-300 shadow-ice-sm text-center p-1">
              <span className="text-[7px] font-mono leading-none">CERTIFIED</span>
              <span className="text-[10px] font-bold font-mono">SCALER</span>
            </div>
          </div>
        </div>
      );

    case 'linkedin':
      return (
        <div className={`relative overflow-hidden rounded-xl border border-sky-600/40 bg-[#FFFFFF] text-[#1E293B] shadow-2xl p-5 sm:p-6 flex flex-col justify-between aspect-[16/10] select-none ${className}`}>
          {/* Top Brand Bar */}
          <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="text-sm sm:text-base font-bold text-[#0A66C2] tracking-tight">
                Linked<span className="bg-[#0A66C2] text-white px-1 rounded text-xs">in</span> Learning
              </span>
            </div>
            <span className="text-[10px] font-mono text-zinc-500">Certificate ID: {cert.credentialId?.substring(0, 10)}...</span>
          </div>

          {/* Certificate Title & Recipient */}
          <div className="my-auto text-center py-2">
            <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-[#0F172A] font-sans">
              What Is Generative AI?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              Course completed by <span className="font-semibold text-black font-serif">Ansh Prajapati</span>
            </p>
            <p className="text-[10px] text-zinc-500 font-mono mt-0.5">
              {cert.curriculum} • {cert.issueDate}
            </p>

            {/* Skills pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2.5">
              {cert.skillsCovered.slice(0, 3).map((s) => (
                <span key={s} className="px-2 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-[9px] font-medium text-sky-800">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Signatory & LinkedIn Blue Ribbon */}
          <div className="flex items-end justify-between border-t border-zinc-200 pt-2 text-[10px]">
            <div>
              <div className="font-serif italic text-zinc-800 font-bold text-xs">Shea Hanson</div>
              <div className="text-zinc-500 text-[9px]">Head of Learning Content Strategy</div>
            </div>

            {/* LinkedIn Ribbon Badge */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#0A66C2] text-white flex flex-col items-center justify-center shadow-md">
              <span className="text-[6px] uppercase tracking-tighter">Course</span>
              <span className="text-[11px] font-bold">in</span>
            </div>
          </div>
        </div>
      );

    case 'hackerrank':
      return (
        <div className={`relative overflow-hidden rounded-xl border-2 border-emerald-500/40 bg-[#FAFAFA] text-[#0F172A] shadow-2xl p-5 sm:p-6 flex flex-col justify-between aspect-[16/10] select-none ${className}`}>
          {/* Classic Guilloche Style Border Effect */}
          <div className="absolute inset-2 border border-zinc-300 pointer-events-none rounded-lg" />

          {/* Top Logo */}
          <div className="flex items-center justify-center relative z-10">
            <div className="w-7 h-7 rounded bg-black text-emerald-400 flex items-center justify-center font-black text-xs">
              [H]
            </div>
          </div>

          {/* Title & Accomplishment */}
          <div className="text-center relative z-10 my-auto py-1">
            <h3 className="text-base sm:text-xl font-serif font-bold text-zinc-900">
              Certificate of Accomplishment
            </h3>
            <div className="inline-block px-3 py-0.5 rounded-full bg-zinc-900 text-white font-mono text-[10px] sm:text-xs font-semibold my-1">
              Problem Solving (Basic)
            </div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">PRESENTED TO</p>
            <h2 className="text-base sm:text-xl font-serif italic font-bold text-black mt-0.5">
              Ansh Prajapati
            </h2>
            <p className="text-[9px] text-zinc-600 mt-1 max-w-xs mx-auto">
              The bearer of this certificate has passed the HackerRank skill certification test.
            </p>
          </div>

          {/* Signatory & ID */}
          <div className="flex items-end justify-between relative z-10 border-t border-zinc-200 pt-2 text-[9px] font-mono text-zinc-600">
            <div>
              <div>Earned on: <span className="font-semibold text-black">{cert.issueDate}</span></div>
              <div>ID: <span className="font-semibold text-emerald-700">{cert.credentialId}</span></div>
            </div>

            <div className="text-right">
              <div className="font-serif italic font-bold text-xs text-black">Harishankaran K</div>
              <div className="text-[8px] text-zinc-500">CTO, HackerRank</div>
            </div>
          </div>
        </div>
      );

    case 'codomax':
      return (
        <div className={`relative overflow-hidden rounded-xl border border-rose-500/40 bg-[#FFFFFF] text-[#0F172A] shadow-2xl p-5 sm:p-6 flex flex-col justify-between aspect-[16/10] select-none ${className}`}>
          {/* Top Left Geometric Corner Accents */}
          <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-amber-600 to-rose-700 [clip-path:polygon(0_0,100%_0,0_100%)]" />
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-rose-800 to-amber-600 [clip-path:polygon(100%_100%,0_100%,100%_0)]" />

          {/* Header */}
          <div className="flex items-center justify-between pl-6 relative z-10 border-b border-zinc-200 pb-2">
            <div className="text-left">
              <h4 className="text-base sm:text-xl font-serif font-black tracking-wider text-rose-900">
                CERTIFICATE
              </h4>
              <p className="text-[8px] font-mono uppercase tracking-widest text-zinc-500">OF COMPLETION</p>
            </div>
            <div className="text-right">
              <span className="text-sm sm:text-base font-bold text-zinc-900 font-sans">
                Codomax
              </span>
              <p className="text-[8px] text-zinc-400 font-mono">Digital Solutions & Beyond</p>
            </div>
          </div>

          {/* Body */}
          <div className="my-auto text-center relative z-10 py-1">
            <p className="text-[9px] text-zinc-500 uppercase tracking-widest">This Certificate is given to</p>
            <h2 className="text-base sm:text-xl font-serif font-bold text-zinc-900 mt-0.5">
              Ansh Prajapati
            </h2>
            <p className="text-[10px] text-zinc-600 mt-1 max-w-sm mx-auto line-clamp-2">
              has successfully completed the <span className="font-semibold text-rose-900">Data Science</span> internship at Codomax Digital Solutions with demonstrated technical aptitude and dedication.
            </p>
          </div>

          {/* Footer with Seal and MSME */}
          <div className="flex items-end justify-between relative z-10 border-t border-zinc-200 pt-2 text-[9px] font-mono text-zinc-600 pr-6">
            <div>
              <div className="font-serif italic font-bold text-xs text-black">Nishanthi</div>
              <div className="text-[8px] text-zinc-500">Program Coordinator</div>
              <div className="text-[8px] text-zinc-400 mt-0.5">Date: {cert.issueDate} • ID: {cert.credentialId}</div>
            </div>

            {/* Chennai Stamp & MSME Badge */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-blue-900 flex flex-col items-center justify-center text-[6px] text-blue-900 text-center font-bold">
                <span>CODOMAX</span>
                <span>CHENNAI</span>
              </div>
              <div className="px-2 py-1 rounded bg-zinc-100 border border-zinc-300 text-[8px] font-bold text-amber-800">
                MSME Govt.
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
