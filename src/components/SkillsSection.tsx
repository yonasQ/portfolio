"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/constants";
import SkillCategory from "../ui/skill-category";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-20 px-4 sm:px-6 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 sm:mb-12 md:mb-16 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-space mb-3 sm:mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-gray-400 from-gray-600 dark:to-blue-400 to-blue-600">
            Technical Skills
          </span>
        </h2>
        <p className="dark:text-gray-400 text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
          My expertise spans across backend technologies, cloud platforms, and
          system design.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skills.map((category, index) => (
          <SkillCategory key={index} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}
