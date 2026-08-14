import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, Check, Copy, Sparkles, MessageSquare, Linkedin, Github, Terminal } from 'lucide-react';
import { CONTACT_DATA } from '../../data/portfolioData';
import { ParallaxCard } from '../ui/ParallaxCard';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate interactive transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/40 border border-sky-500/30 text-sky-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONNECT & COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Have an internship opportunity, project collaboration, or research question? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <ParallaxCard className="p-6 sm:p-8 space-y-6" intensity={10}>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">Contact Information</h3>
                <p className="text-xs text-zinc-400 font-mono">Direct Communication Channels</p>
              </div>

              {/* Contact Items */}
              <div className="space-y-4">
                
                {/* Location */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-zinc-400 font-mono">Location</p>
                      <p className="text-xs sm:text-sm font-semibold text-white">{CONTACT_DATA.location}</p>
                    </div>
                  </div>
                </div>

                {/* Email with 1-Click Copy */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-zinc-400 font-mono">Email Address</p>
                      <a
                        href={`mailto:${CONTACT_DATA.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-sky-300 transition-colors"
                      >
                        {CONTACT_DATA.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(CONTACT_DATA.email, 'email')}
                    className="p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-sky-500/30 transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone with 1-Click Copy */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-zinc-400 font-mono">Mobile Contact</p>
                      <a
                        href={`tel:${CONTACT_DATA.phone}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-sky-300 transition-colors"
                      >
                        {CONTACT_DATA.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(CONTACT_DATA.phone, 'phone')}
                    className="p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-sky-500/30 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

              </div>

              {/* Social Profiles Grid */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                  Developer Profiles
                </p>
                <div className="grid grid-cols-3 gap-2.5">
                  <a
                    href={CONTACT_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-sky-400 transition-colors" />
                    <span className="text-[11px] font-mono text-zinc-400 mt-1.5 group-hover:text-white">LinkedIn</span>
                  </a>

                  <a
                    href={CONTACT_DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all group"
                  >
                    <Github className="w-5 h-5 text-zinc-400 group-hover:text-sky-400 transition-colors" />
                    <span className="text-[11px] font-mono text-zinc-400 mt-1.5 group-hover:text-white">GitHub</span>
                  </a>

                  <a
                    href={CONTACT_DATA.codechef}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all group"
                  >
                    <Terminal className="w-5 h-5 text-zinc-400 group-hover:text-sky-400 transition-colors" />
                    <span className="text-[11px] font-mono text-zinc-400 mt-1.5 group-hover:text-white">CodeChef</span>
                  </a>
                </div>
              </div>
            </ParallaxCard>
          </div>

          {/* Right Column: Interactive Glass Contact Form */}
          <div className="lg:col-span-7">
            <ParallaxCard className="p-6 sm:p-8" intensity={10}>
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-sky-400" />
                <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center mx-auto shadow-ice-sm">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Transmission Successful</h4>
                  <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                    Thank you, your message has been transmitted. Ansh will reply to you shortly at your email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="e.g. alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400">Subject / Topic</label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Internship Opportunity / Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400">Message Content *</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Hi Ansh, I saw your portfolio and would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition-all resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl btn-ice-primary text-sm font-semibold tracking-wide disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        <span>Transmitting Payload...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </ParallaxCard>
          </div>

        </div>

      </div>
    </section>
  );
};
