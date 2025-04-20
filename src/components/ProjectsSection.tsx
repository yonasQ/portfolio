"use client";

import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import { backendProjects, projects } from "@/lib/constants";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-blue-400">
            Full-Stack Projects
          </span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-center">
          While I specialize in backend architecture, these projects demonstrate
          my ability to deliver complete solutions. Each features{" "}
          <span className="text-blue-400">backend-heavy implementations</span>{" "}
          with scalable infrastructure.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      <div className="mt-16 pt-16 border-t border-gray-800">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          <span className="text-blue-400">Backend-Centric</span> Projects
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
          These highlight my deep expertise in distributed systems and cloud
          architecture
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
