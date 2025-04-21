"use client";
import { motion } from "framer-motion";
import { experiences } from "@/lib/constants";
import ExperienceCard from "../ui/experience-card";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 sm:mb-12 md:mb-16 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-space mb-3 sm:mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-gray-400 from-gray-600 dark:to-blue-400 to-blue-600">
            Work Experience
          </span>
        </h2>
        <p className="dark:text-gray-400 text-gray-600 text-sm sm:text-base max-w-2xl mb-6 sm:mb-8 md:mb-12 mx-auto">
          My journey as a{" "}
          <span className="text-blue-600 dark:text-blue-400">
            full-stack developer
          </span>{" "}
          with
          <span className="text-purple-600 dark:text-purple-400">
            {" "}
            backend specialization
          </span>
        </p>
      </motion.div>

      <div className="relative">
        <div className="hidden lg:block absolute left-4 h-full w-0.5 bg-gradient-to-b dark:from-gray-700 from-gray-500 to-transparent lg:left-1/2 lg:-ml-0.5"></div>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
