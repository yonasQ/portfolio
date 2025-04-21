"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import ThemeToggle from "@/context/ThemeToggle";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      setScrolled(window.scrollY > 10);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "shadow-lg" : "border-b border-border-color"
      } backdrop-blur-md`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("home")}
            className="text-lg sm:text-xl font-bold flex items-center focus:outline-none cursor-pointer dark:text-white text-gray-900"
          >
            <span className="bg-gray-700 w-5 h-5 sm:w-6 sm:h-6 rounded-full mr-2 flex items-center justify-center">
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </span>
            Yonas<span className="text-blue-500">.</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 sm:gap-6">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-1 py-2 text-sm font-medium cursor-pointer ${
                  activeSection === section.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "dark:text-gray-400 text-gray-600 hover:text-gray-900 dark:hover:text-white"
                } focus:outline-none`}
              >
                {section.name}
                {activeSection === section.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-0.5 w-full bg-blue-500 dark:bg-blue-400"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Social Icons (Desktop) */}
            <div className="hidden lg:flex items-center gap-1 sm:gap-2">
              <SocialMedias />
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 dark:text-gray-400 text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-2 py-4">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  whileHover={{ x: 4 }}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-3 rounded-lg text-left cursor-pointer ${
                    activeSection === section.id
                      ? "dark:bg-blue-900/30 bg-blue-100 text-blue-600 dark:text-blue-400 font-medium"
                      : "dark:text-gray-400 text-gray-600 hover:dark:bg-gray-800 hover:bg-gray-100"
                  } focus:outline-none`}
                >
                  {section.name}
                </motion.button>
              ))}
              <div className="flex justify-center gap-3 pt-2 px-4">
                <SocialMedias />
              </div>
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
      <motion.a
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 sm:p-2 dark:bg-gray-800 bg-gray-100 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
        aria-label="GitHub"
      >
        <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.a>
      <motion.a
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://linkedin.com/in/yonas-kemon"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 sm:p-2 dark:bg-gray-800 bg-gray-100 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
        aria-label="LinkedIn"
      >
        <FiLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.a>
      <motion.a
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="mailto:yonaskemon01@gmail.com"
        className="p-1.5 sm:p-2 dark:bg-gray-800 bg-gray-100 rounded-full text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
        aria-label="Email"
      >
        <FiMail className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.a>
      <motion.a
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://t.me/yquest"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 sm:p-2 dark:bg-gray-800 bg-gray-100 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
        aria-label="Telegram"
      >
        <FaTelegram className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.a>
      <motion.a
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/251953136922"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 sm:p-2 dark:bg-gray-800 bg-gray-100 rounded-full text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.a>
    </>
  );
};
