"use client";

import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="container mx-auto px-1 md:px-4 pt-20 lg:py-0">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
