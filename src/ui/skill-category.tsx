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
      viewport={{ once: true }}
      className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-400">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-bold">{category.name}</h3>
      </div>

      <ul className="space-y-3">
        {category.items.map((skill, i) => (
          <li key={i} className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <span className="text-gray-300">{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
