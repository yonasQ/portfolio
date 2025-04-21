"use client";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tags: string[];
  backendFocus?: string[];
  github?: string;
  demo?: string;
}

export default function ProjectCard({
  project,
  variant = "fullstack",
  index,
}: {
  project: Project;
  variant?: "fullstack" | "backend";
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      className="group relative h-full"
    >
      <div className="h-full card">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
          <h3 className="text-base sm:text-lg md:text-xl font-bold dark:text-white text-gray-900 line-clamp-2">
            {project.title}
          </h3>
          {variant === "backend" && (
            <span className="px-2 py-1 dark:bg-blue-900/30 bg-blue-100 dark:text-blue-400 text-blue-600 text-xs rounded-full w-fit">
              Backend Focus
            </span>
          )}
        </div>

        <p className="dark:text-gray-300 text-gray-700 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-3">
          {project.description}
        </p>

        {project.backendFocus && (
          <div className="mb-3 sm:mb-4">
            <h4 className="text-base sm:text-sm text-blue-600 dark:text-blue-400 mb-1">
              Backend Highlights:
            </h4>
            <ul className="text-xs dark:text-gray-400 text-gray-600 space-y-1">
              {project.backendFocus.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-1">•</span>
                  <span className="line-clamp-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 dark:bg-gray-800 bg-gray-100 rounded-full text-xs ${
                tag.includes("Golang") ||
                tag.includes("Node.js") ||
                tag.includes("PostgreSQL")
                  ? "dark:bg-blue-900/30 bg-blue-100 dark:text-blue-400 text-blue-600"
                  : "dark:bg-gray-800 bg-gray-100 dark:text-gray-300 text-gray-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 sm:gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 dark:text-gray-400 text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm"
            >
              <FiGithub className="w-3 h-3 sm:w-4 sm:h-4" /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 dark:text-gray-400 text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm"
            >
              <FiExternalLink className="w-3 h-3 sm:w-4 sm:h-4" /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
