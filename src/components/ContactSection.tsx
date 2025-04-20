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
    <section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mb-8 text-center">
          Have a project in mind or want to discuss backend architecture?
        </p>

        <div className="bg-gray-900 rounded-lg border border-gray-800 p-5 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-500 w-5 h-5" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-500 w-5 h-5" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute top-3 left-3">
                <FiMessageSquare className="text-gray-500 w-5 h-5" />
              </div>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>
            </div>
          </form>

          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-green-900/50 border border-green-700 rounded-lg text-green-300 text-sm"
            >
              Message sent successfully! I&apos;ll get back to you soon.
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-red-900/50 border border-red-700 rounded-lg text-red-300 text-sm"
            >
              Failed to send message. Please try again or email me directly.
            </motion.div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-800">
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              Connect Directly
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Email */}
              <a
                href="mailto:yonaskemon01@gmail.com"
                className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm sm:text-base"
              >
                <span className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-5 h-5 text-blue-400" />
                </span>
                <span className="text-gray-300">Email</span>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/yquest"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm sm:text-base"
              >
                <span className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaTelegram className="w-5 h-5 text-blue-400" />
                </span>
                <span className="text-gray-300">Telegram</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/251953136922"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm sm:text-base"
              >
                <span className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="w-5 h-5 text-green-400" />
                </span>
                <span className="text-gray-300">WhatsApp</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+251953136922"
                className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm sm:text-base"
              >
                <span className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-5 h-5 text-purple-400" />
                </span>
                <span className="text-gray-300">+251 953 136 922</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
