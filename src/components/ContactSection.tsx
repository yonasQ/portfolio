"use client";

import { useState } from "react";
import {
  FiSend,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiPhone,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.log(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 sm:px-6 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center dark:text-white text-gray-900">
          Get In Touch
        </h2>
        <p className="dark:text-gray-400 text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 text-center">
          Have a project in mind or want to discuss backend architecture?
        </p>

        <div className="dark:bg-gray-900 bg-white rounded-lg dark:border-gray-800 border-gray-200 p-4 sm:p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="dark:text-gray-500 text-gray-400 w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 dark:bg-gray-800 bg-gray-50 dark:border-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base dark:text-white text-gray-900"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="dark:text-gray-500 text-gray-400 w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 dark:bg-gray-800 bg-gray-50 dark:border-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base dark:text-white text-gray-900"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute top-2 sm:top-3 left-3">
                <FiMessageSquare className="dark:text-gray-500 text-gray-400 w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 dark:bg-gray-800 bg-gray-50 dark:border-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base dark:text-white text-gray-900"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <div className="pt-1 sm:pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 w-full px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    {" "}
                    <FiSend className="w-4 h-4" /> Send Message{" "}
                  </>
                )}
              </button>
            </div>
          </form>

          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 sm:mt-4 p-2 sm:p-3 dark:bg-green-900/50 bg-green-100 dark:border-green-700 border-green-300 rounded-lg dark:text-green-300 text-green-800 text-xs sm:text-sm"
            >
              Message sent successfully! I&apos;ll get back to you soon.
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 sm:mt-4 p-2 sm:p-3 dark:bg-red-900/50 bg-red-100 dark:border-red-700 border-red-300 rounded-lg dark:text-red-300 text-red-800 text-xs sm:text-sm"
            >
              Failed to send message. Please try again or email me directly.
            </motion.div>
          )}

          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 dark:border-gray-800 border-gray-200">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 dark:text-white text-gray-900">
              Connect Directly
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {/* Email */}
              <a
                href="mailto:yonaskemon01@gmail.com"
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 dark:bg-gray-800 bg-gray-50 hover:dark:bg-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-xs sm:text-sm"
              >
                <span className="w-8 h-8 sm:w-10 sm:h-10 dark:bg-gray-700 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                </span>
                <span className="dark:text-gray-300 text-gray-700">Email</span>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/yquest"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 dark:bg-gray-800 bg-gray-50 hover:dark:bg-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-xs sm:text-sm"
              >
                <span className="w-8 h-8 sm:w-10 sm:h-10 dark:bg-blue-500/10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaTelegram className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                </span>
                <span className="dark:text-gray-300 text-gray-700">
                  Telegram
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/251953136922"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 dark:bg-gray-800 bg-gray-50 hover:dark:bg-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-xs sm:text-sm"
              >
                <span className="w-8 h-8 sm:w-10 sm:h-10 dark:bg-green-500/10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400" />
                </span>
                <span className="dark:text-gray-300 text-gray-700">
                  WhatsApp
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+251953136922"
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 dark:bg-gray-800 bg-gray-50 hover:dark:bg-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-xs sm:text-sm"
              >
                <span className="w-8 h-8 sm:w-10 sm:h-10 dark:bg-purple-500/10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
                </span>
                <span className="dark:text-gray-300 text-gray-700">
                  +251 953 136 922
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
