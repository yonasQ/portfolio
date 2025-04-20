"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center mb-0"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500/30 overflow-hidden shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Yonas Kemon - Backend Developer"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-2/3 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-600">
            Yonas Kemon
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
            Full-Stack Developer • Backend Specialist
          </h2>
          <p className="max-w-2xl mx-auto md:mx-0 text-lg text-gray-400 mb-12">
            I build end-to-end solutions with strong focus on{" "}
            <span className="text-blue-400 font-medium">scalable backends</span>
            , distributed systems, and cloud architecture. Proficient in both
            frontend and backend, but most passionate about{" "}
            <span className="text-purple-400 font-medium">
              high-performance systems
            </span>
            .
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
            <a
              onClick={() => {
                const nextSection = document.getElementById("projects");
                if (nextSection) {
                  window.scrollTo({
                    top: nextSection.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              className="px-6 py-3 bg-gradient-to-r from-gray-600 to-blue-600 rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              View Projects
            </a>
            <a
              onClick={() => {
                const nextSection = document.getElementById("contact");
                if (nextSection) {
                  window.scrollTo({
                    top: nextSection.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              className="px-6 py-3 border border-gray-800 hover:border-gray-700 rounded-lg font-medium hover:bg-gray-900/50 transition-all cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="p-3 bg-gray-900 hover:bg-gray-800 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com/in/yonas-kemon"
              aria-label="LinkedIn"
              className="p-3 bg-gray-900 hover:text-blue-400  rounded-full transition-colors"
              target="_blank"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:yonaskemon01@gmail.com"
              className="p-3 bg-gray-900 hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="p-3 bg-gray-900 hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Download Resume"
            >
              <FiDownload className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
