"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/constants";
import SkillCategory from "../ui/skill-category";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-blue-400">
            Technical Skills
          </span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          My expertise spans across backend technologies, cloud platforms, and
          system design.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, index) => (
          <SkillCategory key={index} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}
