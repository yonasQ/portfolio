"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 z-10 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <div className="relative w-45 h-45 md:w-80 md:h-80 rounded-full border-8 border-white/30 dark:border-gray-800 overflow-hidden shadow-2xl group">
            <Image
              src="/profile.jpg"
              alt="Yonas Kemon - Backend Developer"
              fill
              className="object-cover group-hover:scale-105 transition-transform"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-500/10 dark:to-gray-600/10 mix-blend-overlay" />
            <div className="absolute inset-0 rounded-full border-2 border-white/20 dark:border-gray-400/20 pointer-events-none" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-2/3 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-600 dark:from-white dark:to-blue-400">
            Yonas Kemon
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-600 dark:text-gray-300">
            Full-Stack Developer • Backend Specialist
          </h2>
          <p className="max-w-2xl mx-auto md:mx-0 text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            I build{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              scalable systems
            </span>{" "}
            and
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              {" "}
              cloud architectures
            </span>
            . Focused on performance, clean code, and developer experience.
          </p>

          {/* CTA Buttons */}
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
              className="px-6 py-3 bg-gradient-to-r from-gray-800 to-blue-600 dark:from-white dark:to-blue-400 rounded-lg font-medium hover:opacity-90  cursor-pointer text-white dark:text-black shadow-md"
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
              className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white rounded-lg font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-3">
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/yourusername"
              target="_blank"
              className="p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700  "
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/yonas-kemon"
              target="_blank"
              className="p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700  "
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:yonaskemon01@gmail.com"
              className="p-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600  "
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="/resume.pdf"
              download
              className="p-3 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700  "
              aria-label="Download Resume"
            >
              <FiDownload className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
