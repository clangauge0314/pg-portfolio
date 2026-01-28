'use client';

import { useThemeStore } from '@/store/themeStore';
import { useLanguageStore } from '@/store/languageStore';
import { translations } from '@/locales';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'RESTful API', level: 85 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'Prisma', level: 75 },
      { name: 'MySQL', level: 70 },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'CI/CD', level: 70 },
      { name: 'Linux', level: 75 },
    ],
  },
];

export default function Skills() {
  const { isDark } = useThemeStore();
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <div
      className={`min-h-screen py-12 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        >
        <h1
          className={`text-4xl font-bold mb-8 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {t.skills.title}
        </h1>
        <p
          className={`text-xl mb-12 transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {t.skills.subtitle}
        </p>

        <div className="space-y-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className={`${
                isDark ? 'bg-gray-800' : 'bg-white'
              } rounded-lg shadow-lg p-6 transition-colors duration-300`}
            >
              <h2
                className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`font-medium transition-colors duration-300 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`w-full rounded-full h-3 transition-colors duration-300 ${
                        isDark ? 'bg-gray-700' : 'bg-gray-200'
                      }`}
                    >
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${
                          isDark ? 'bg-white' : 'bg-yellow-500'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={`mt-12 ${
            isDark ? 'bg-gray-800' : 'bg-white'
          } rounded-lg shadow-lg p-6 transition-colors duration-300`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h2
            className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t.skills.learning}
          </h2>
          <div className="flex flex-wrap gap-3">
            {['Rust', 'Go', 'Kubernetes', 'Microservices', 'Machine Learning'].map((tech) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isDark ? 'bg-blue-900 text-blue-300' : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
      </AnimatePresence>
    </div>
  );
}
