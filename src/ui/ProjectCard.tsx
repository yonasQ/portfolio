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
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>

      <div className="relative h-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden group-hover:border-gray-700 transition-all">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
            <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
            {variant === "backend" && (
              <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded-full w-fit">
                Backend Focus
              </span>
            )}
          </div>

          <p className="text-gray-400 text-sm sm:text-base mb-4">
            {project.description}
          </p>

          {project.backendFocus && (
            <div className="mb-4">
              <h4 className="text-xs sm:text-sm text-blue-400 mb-1">
                Backend Highlights:
              </h4>
              <ul className="text-xs text-gray-400 space-y-1">
                {project.backendFocus.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 bg-gray-800 rounded-full text-xs ${
                  tag.includes("Golang") ||
                  tag.includes("Node.js") ||
                  tag.includes("PostgreSQL")
                    ? "bg-blue-900/30 text-blue-400"
                    : "bg-gray-800 text-gray-300"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                <FiGithub className="w-4 h-4" /> Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                <FiExternalLink className="w-4 h-4" /> Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
