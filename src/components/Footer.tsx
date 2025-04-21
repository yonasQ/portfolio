import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-border-color py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Branding section */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-lg sm:text-xl font-bold dark:text-white text-gray-900 hover:dark:text-blue-400 hover:text-blue-600  "
            >
              Yonas<span className="text-blue-600 dark:text-blue-400">.</span>
            </Link>
            <p className="mt-1 sm:mt-2 dark:text-gray-400 text-gray-600 text-xs sm:text-sm">
              Backend Engineer & Cloud Architect
            </p>
          </div>

          {/* Social links and copyright */}
          <div className="flex flex-col items-center md:items-end gap-3 sm:gap-4">
            <div className="flex space-x-4 sm:space-x-5">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-400 text-gray-600 hover:text-blue-600 dark:hover:text-blue-400  "
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yonas-kemon"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-400 text-gray-600 hover:text-blue-600 dark:hover:text-blue-400  "
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:yonaskemon01@gmail.com"
                className="dark:text-gray-400 text-gray-600 hover:text-blue-600 dark:hover:text-blue-400  "
                aria-label="Email"
              >
                <FiMail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
            <p className="dark:text-gray-500 text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} Yonas Kemon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
