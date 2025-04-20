"use client";
import { motion } from "framer-motion";
import { experiences } from "@/lib/constants";
import ExperienceCard from "../ui/experience-card";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-blue-400">
            Work Experience
          </span>
        </h2>

        <p className="text-gray-400 max-w-2xl mb-12  mx-auto">
          My journey as a{" "}
          <span className="text-blue-400">full-stack developer</span> with
          <span className="text-purple-400"> backend specialization</span>
        </p>
      </motion.div>

      <div className="relative">
        <div className="hidden lg:block absolute left-4 h-full w-0.5 bg-gradient-to-b from-gray-800 to-transparent lg:left-1/2 lg:-ml-0.5"></div>

        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
}
