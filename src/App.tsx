import React, { useState } from 'react';
import { AntiGravityCanvas } from './components/3d/AntiGravityCanvas';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { AboutEducation } from './components/about/AboutEducation';
import { SkillsUniverse } from './components/skills/SkillsUniverse';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { CertificatesUniverse } from './components/certificates/CertificatesUniverse';
import { AchievementsSection } from './components/achievements/AchievementsSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { AudioToggle } from './components/ui/AudioToggle';
import { ResumeModal } from './components/ui/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#E4E4E7] overflow-x-hidden selection:bg-sky-500/30 selection:text-sky-200">
      {/* 1. Interactive 3D Three.js Anti-Gravity Canvas */}
      <AntiGravityCanvas />

      {/* 2. Custom Ice-Blue Magnetic Follower Cursor */}
      <CustomCursor />

      {/* 3. Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* 4. Main Portfolio Content Flow */}
      <main className="relative z-10">
        <Hero />
        <AboutEducation />
        <SkillsUniverse />
        <ProjectsSection />
        <CertificatesUniverse />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* 5. Sleek Footer */}
      <Footer />

      {/* 6. Zero-G Ambient Sound Synthesizer Controller */}
      <AudioToggle />

      {/* 7. Resume Inspection & Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
