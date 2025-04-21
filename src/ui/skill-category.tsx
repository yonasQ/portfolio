"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SkillCategory {
  name: string;
  items: string[];
  icon: IconType;
}

export default function SkillCategory({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      className="card"
    >
      <div className="flex items-center gap-3 mb-3 sm:mb-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 dark:bg-blue-900/20 bg-blue-100/50 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <h3 className="text-base sm:text-lg font-bold dark:text-white text-gray-900">
          {category.name}
        </h3>
      </div>

      <ul className="space-y-2 sm:space-y-3">
        {category.items.map((skill, i) => (
          <li key={i} className="flex items-center">
            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mr-2 sm:mr-3"></div>
            <span className="dark:text-gray-300 text-gray-700 text-sm sm:text-base">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
