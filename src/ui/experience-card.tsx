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
      viewport={{ once: true }}
      className={`flex ${
        index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-start mb-12`}
    >
      <div className="hidden lg:flex w-1/2"></div>

      <div className="z-10 hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 border-4 border-gray-950 mx-auto">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
      <div
        className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}
      >
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold">{experience.role}</h3>
            <span className="text-sm text-gray-400">{experience.date}</span>
          </div>
          <h4 className="text-blue-400 mb-4">{experience.company}</h4>

          <ul className="space-y-2 text-gray-400 mb-4">
            {experience.responsibilities.map((item, i) => (
              <li key={i} className="flex">
                <span className="mr-2 mt-1 text-blue-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="lg:mt-4 flex flex-wrap gap-2 lg:justify-end">
            {experience.tech.map((tech, i) => (
              <span
                key={i}
                className={`px-2 py-1 bg-gray-800 rounded-full text-xs ${
                  tech.includes("Golang") ||
                  tech.includes("Node.js") ||
                  tech.includes("PostgreSQL")
                    ? "bg-blue-900/30 text-blue-400"
                    : "bg-gray-800 text-gray-300"
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
