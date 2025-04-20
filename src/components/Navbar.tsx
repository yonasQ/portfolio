"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const sections = [
  { id: "home", name: "Home" },
  { id: "projects", name: "Projects" },
  { id: "experience", name: "Experience" },
  { id: "skills", name: "Skills" },
  { id: "contact", name: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 dark:bg-gray-950/90 bg-white/90 backdrop-blur-md dark:border-b dark:border-gray-800 border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold flex items-center focus:outline-none cursor-pointer dark:text-white text-gray-900"
          >
            <span className="bg-blue-600 w-6 h-6 rounded-full mr-2"></span>
            Yonas<span className="text-blue-400">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-1 py-2 text-sm transition-colors cursor-pointer ${
                  activeSection === section.id
                    ? "text-blue-400"
                    : "dark:text-gray-400 text-gray-600 hover:dark:text-gray-200 hover:text-gray-900"
                } focus:outline-none`}
              >
                {section.name}
                {activeSection === section.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-0.5 w-full bg-blue-500"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Social Icons (Desktop) */}
            <div className="hidden lg:flex items-center gap-2">
              <SocialMedias />
            </div>
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 dark:text-gray-400 text-gray-600 hover:dark:text-white hover:text-gray-900 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden py-4 dark:border-t dark:border-gray-800 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 rounded-lg transition-colors text-left cursor-pointer ${
                    activeSection === section.id
                      ? "dark:bg-blue-900/30 bg-blue-100 text-blue-400"
                      : "dark:text-gray-400 text-gray-600 hover:dark:bg-gray-800 hover:bg-gray-100"
                  } focus:outline-none`}
                >
                  {section.name}
                </button>
              ))}
            </div>
            <div className="flex gap-4 mt-6 px-4">
              <SocialMedias />
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

const SocialMedias = () => {
  return (
    <>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 dark:text-gray-400 text-gray-600 hover:text-blue-400 transition-colors"
        aria-label="GitHub"
      >
        <FiGithub className="w-5 h-5" />
      </a>
      <a
        href="https://linkedin.com/in/yonas-kemon"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 dark:text-gray-400 text-gray-600 hover:text-blue-400 transition-colors"
        aria-label="LinkedIn"
      >
        <FiLinkedin className="w-5 h-5" />
      </a>
      <a
        href="mailto:yonaskemon01@gmail.com"
        className="p-2 dark:text-gray-400 text-gray-600 hover:text-blue-400 transition-colors"
        aria-label="Email"
      >
        <FiMail className="w-5 h-5" />
      </a>
      <a
        href="https://t.me/yquest"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 dark:text-gray-400 text-gray-600 hover:text-blue-400 transition-colors"
        aria-label="Telegram"
      >
        <FaTelegram className="w-5 h-5" />
      </a>
      <a
        href="https://wa.me/251953136922"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 dark:text-gray-400 text-gray-600 hover:text-green-400 transition-colors"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5" />
      </a>
    </>
  );
};
