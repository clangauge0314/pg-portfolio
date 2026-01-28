'use client';

import { useThemeStore } from '@/store/themeStore';
import { useLanguageStore } from '@/store/languageStore';
import { translations } from '@/locales';
import { motion, AnimatePresence } from 'framer-motion';

export default function Experience() {
  const { isDark } = useThemeStore();
  const { language } = useLanguageStore();
  const t = translations[language];

  const work = t.experience.work;
  const educations = t.experience.educations;
  const certificationsList = t.experience.certifications;

  return (
    <div
      className={`min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
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
          {t.experience.title}
        </h1>
        <p
          className={`text-xl mb-12 transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {t.experience.subtitle}
        </p>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2
            className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t.experience.workLabel}
          </h2>
          <div className="space-y-8">
            <div
              className={`${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              } rounded-lg shadow-lg p-6 border-l-4 transition-colors duration-300 ${
                isDark ? 'border-white' : 'border-gray-900'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h2
                    className={`text-2xl font-semibold transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {work.title}
                  </h2>
                  <p
                    className={`text-lg mt-1 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {work.company}
                  </p>
                </div>
                <span
                  className={`mt-2 sm:mt-0 transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {work.period}
                </span>
              </div>
              <ul
                className={`list-disc list-inside space-y-2 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {work.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <h2
            className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t.experience.education}
          </h2>
          <div className="space-y-8">
            {educations.map((edu, index) => (
              <div
                key={index}
                className={`${
                  isDark ? 'bg-gray-800' : 'bg-gray-50'
                } rounded-lg shadow-lg p-6 border-l-4 transition-colors duration-300 ${
                  isDark ? 'border-white' : 'border-gray-900'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h2
                      className={`text-2xl font-semibold transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {edu.title}
                    </h2>
                    <p
                      className={`text-lg mt-1 transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {edu.company}
                    </p>
                  </div>
                  <span
                    className={`mt-2 sm:mt-0 transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {edu.period}
                  </span>
                </div>
                <ul
                  className={`list-disc list-inside space-y-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {edu.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.4 }}
        >
          <h2
            className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t.experience.certificationsLabel}
          </h2>
          <div className="space-y-4">
            {certificationsList.map((cert, index) => (
              <div
                key={index}
                className={`${
                  isDark ? 'bg-gray-800' : 'bg-gray-50'
                } rounded-lg shadow-lg p-6 transition-colors duration-300`}
              >
                <h3
                  className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {cert.name}
                </h3>
                <p
                  className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      </AnimatePresence>
    </div>
  );
}
