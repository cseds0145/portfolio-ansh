import React, { useState } from 'react';
import { Award, ShieldCheck, ExternalLink, Eye, ArrowUpRight } from 'lucide-react';
import { CERTIFICATES_DATA } from '../../data/portfolioData';
import { CertificateItem } from '../../types';
import { ParallaxCard } from '../ui/ParallaxCard';
import { CertificateCardVisual } from './CertificateCardVisual';
import { CertificateModal } from './CertificateModal';

export const CertificatesUniverse: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & Data Science',
    'Core CS & Java',
    'Languages',
    'Competitive Programming'
  ];

  const filteredCerts = activeCategory === 'All'
    ? CERTIFICATES_DATA
    : CERTIFICATES_DATA.filter(c => c.category === activeCategory);

  return (
    <section id="certificates" className="relative py-24 sm:py-32">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/40 border border-sky-500/30 text-sky-400 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED ACADEMIC & INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Industry Credentials
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Formal certifications across Python Mastery, Generative AI Foundations, Object-Oriented Java, HackerRank Problem Solving, and Industrial Data Science.
          </p>

          {/* Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? 'bg-sky-500 text-black font-semibold shadow-ice-sm'
                    : 'bg-[#121214] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map((cert) => (
            <ParallaxCard
              key={cert.id}
              className="p-5 sm:p-6 flex flex-col justify-between h-full group"
              intensity={12}
            >
              <div className="space-y-4">
                
                {/* Certificate Visual Preview Container with Click-to-Zoom */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative rounded-xl overflow-hidden cursor-pointer group-hover:shadow-ice-sm transition-all duration-300 transform group-hover:scale-[1.02]"
                  title="Click to view full certificate"
                >
                  <CertificateCardVisual cert={cert} />
                  
                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-xs flex items-center justify-center transition-opacity duration-200">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500 text-black font-semibold text-xs shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Certificate</span>
                    </span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-sky-400">
                      <Award className="w-3.5 h-3.5" />
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {cert.issueDate}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedCert(cert)}
                    className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors mt-1 cursor-pointer"
                  >
                    {cert.title}
                  </h3>

                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                    {cert.subtitle}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skillsCovered.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800/80 text-[10px] font-mono text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skillsCovered.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded bg-zinc-900 text-[10px] font-mono text-zinc-500">
                      +{cert.skillsCovered.length - 3}
                    </span>
                  )}
                </div>

              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-sky-400 font-mono hover:underline"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-300 font-mono flex items-center gap-1"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </ParallaxCard>
          ))}
        </div>

      </div>

      {/* Interactive Certificate Lightbox Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
