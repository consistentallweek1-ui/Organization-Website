import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AchievementsBar from './components/sections/AchievementsBar';
import AboutSection from './components/sections/AboutSection';
import FeaturesSection from './components/sections/FeaturesSection';
import BoardMembersSection from './components/sections/BoardMembersSection';
import GallerySection from './components/sections/GallerySection';
import SponsorsSection from './components/sections/SponsorsSection';
import ContactSection from './components/sections/ContactSection';
import { scrollToSection } from './utils/scrollUtils';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AchievementsBar />
      <AboutSection />
      <FeaturesSection />
      <BoardMembersSection />
      <GallerySection />
      <SponsorsSection scrollToSection={scrollToSection} />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;