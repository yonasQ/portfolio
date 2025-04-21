"use client";
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import { backendProjects, projects } from "@/lib/constants";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 sm:mb-12 md:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-space mb-3 sm:mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-gray-400 from-gray-600 dark:to-blue-400 to-blue-600">
            Full-Stack Projects
          </span>
        </h2>
        <p className="dark:text-gray-400 text-gray-600 text-sm sm:text-base max-w-3xl mx-auto text-center">
          While I specialize in backend architecture, these projects demonstrate
          my ability to deliver complete solutions. Each features{" "}
          <span className="text-blue-600 dark:text-blue-400">
            backend-heavy implementations
          </span>{" "}
          with scalable infrastructure.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t dark:border-gray-800 border-gray-200">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center text-gray-800 dark:text-white">
          <span className="text-blue-600 dark:text-blue-400">
            Backend-Centric
          </span>{" "}
          Projects
        </h3>
        <p className="dark:text-gray-400 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto text-center mb-6 sm:mb-8 md:mb-12">
          These highlight my deep expertise in distributed systems and cloud
          architecture
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {backendProjects.map((project, index) => (
            <ProjectCard
              key={`backend-${index}`}
              project={project}
              variant="backend"
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
