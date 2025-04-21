"use client";
import { motion } from "framer-motion";

interface Experience {
  role: string;
  company: string;
  date: string;
  responsibilities: string[];
  tech: string[];
}

export default function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      className={`flex ${
        index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-start mb-8 sm:mb-10`}
    >
      <div className="hidden lg:flex w-1/2"></div>

      <div className="z-10 hidden lg:flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-700 border-4 dark:border-gray-950 border-gray-100 mx-auto">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
      <div
        className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-6" : "lg:pl-6"}`}
      >
        <div className="card">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
            <h3 className="text-base sm:text-lg font-bold dark:text-white text-gray-900">
              {experience.role}
            </h3>
            <span className="text-xs sm:text-sm dark:text-gray-400 text-gray-600">
              {experience.date}
            </span>
          </div>
          <h4 className="text-blue-600 dark:text-blue-400 text-sm sm:text-base mb-3 sm:mb-4">
            {experience.company}
          </h4>

          <ul className="space-y-2 dark:text-gray-400 text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
            {experience.responsibilities.map((item, i) => (
              <li key={i} className="flex">
                <span className="mr-2 mt-1 text-blue-600 dark:text-blue-400">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
            {experience.tech.map((tech, i) => (
              <span
                key={i}
                className={`px-2 py-1 dark:bg-gray-800 bg-gray-100 rounded-full text-xs ${
                  tech.includes("Golang") ||
                  tech.includes("Node.js") ||
                  tech.includes("PostgreSQL")
                    ? "dark:bg-blue-900/30 bg-blue-100 dark:text-blue-400 text-blue-600"
                    : "dark:bg-gray-800 bg-gray-100 dark:text-gray-300 text-gray-700"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
