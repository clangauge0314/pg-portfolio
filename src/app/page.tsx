'use client';

import Link from 'next/link';
import { useThemeStore } from '@/store/themeStore';
import ContactModal from '@/components/ContactModal';
import { useState } from 'react';
import { useLanguageStore } from '@/store/languageStore';
import { translations } from '@/locales';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const { isDark } = useThemeStore();
  const { language } = useLanguageStore();
  const t = translations[language];
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <div
        className={`min-h-screen bg-gradient-to-br transition-colors duration-300 ${
          isDark ? 'from-gray-900 to-gray-800' : 'from-gray-50 to-gray-100'
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-20"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
          <div className="text-center">
            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 transition-colors duration-300 flex flex-col sm:flex-row justify-center items-center sm:gap-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              } ${language === 'ko' || language === 'ja' ? 'gap-2 sm:gap-2' : ''}`}
            >
              {language === 'ko' ? (
                <>
                  <span>안녕하세요.</span>
                  <span className="sm:inline">강준성입니다</span>
                </>
              ) : language === 'ja' ? (
                <>
                  <span>こんにちは。</span>
                  <span className="sm:inline">カンジュンソンです</span>
                </>
              ) : (
                <span>{t.home.title}</span>
              )}
            </h1>
            <p
              className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {t.home.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className={`px-8 py-3 rounded-lg transition-colors duration-300 font-medium ${
                  isDark
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {t.home.viewProjects}
              </Link>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className={`px-8 py-3 border-2 rounded-lg transition-colors duration-300 font-medium ${
                  isDark
                    ? 'border-white text-white hover:bg-white hover:text-black'
                    : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                }`}
              >
                {t.home.contact}
              </button>
            </div>
          </div>

          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className={`${
                isDark ? 'bg-gray-800' : 'bg-white'
              } p-6 rounded-lg shadow-lg transition-colors duration-300`}
            >
              <h3
                className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {t.home.projects}
              </h3>
              <p
                className={`${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                } mb-4 transition-colors duration-300`}
              >
                {t.home.projectsDesc}
              </p>
              <Link
                href="/projects"
                className={`${
                  isDark ? 'text-blue-400' : 'text-yellow-600'
                } hover:underline transition-colors duration-300`}
              >
                {t.home.seeMore}
              </Link>
            </div>

            <div
              className={`${
                isDark ? 'bg-gray-800' : 'bg-white'
              } p-6 rounded-lg shadow-lg transition-colors duration-300`}
            >
              <h3
                className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {t.home.skills}
              </h3>
              <p
                className={`${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                } mb-4 transition-colors duration-300`}
              >
                {t.home.skillsDesc}
              </p>
              <Link
                href="/skills"
                className={`${
                  isDark ? 'text-blue-400' : 'text-yellow-600'
                } hover:underline transition-colors duration-300`}
              >
                {t.home.seeMore}
              </Link>
            </div>

            <div
              className={`${
                isDark ? 'bg-gray-800' : 'bg-white'
              } p-6 rounded-lg shadow-lg transition-colors duration-300`}
            >
              <h3
                className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {t.home.experience}
              </h3>
              <p
                className={`${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                } mb-4 transition-colors duration-300`}
              >
                {t.home.experienceDesc}
              </p>
              <Link
                href="/experience"
                className={`${
                  isDark ? 'text-blue-400' : 'text-yellow-600'
                } hover:underline transition-colors duration-300`}
              >
                {t.home.seeMore}
              </Link>
            </div>
          </motion.div>
        </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            className={`py-12 transition-colors duration-300 ${
              isDark ? 'bg-gray-900' : 'bg-white'
            }`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ delay: 0.15, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1
              className={`text-4xl font-bold mb-8 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              {t.home.about}
            </h1>

            <div className={`prose prose-lg max-w-none ${isDark ? 'prose-invert' : ''}`}>
              <div className="mb-8">
                <h2
                  className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {t.home.intro}
                </h2>
                <p
                  className={`${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  } leading-relaxed transition-colors duration-300`}
                >
                  {t.home.introText}
                </p>
              </div>

              <div className="mb-8">
                <h2
                  className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {t.home.strengths}
                </h2>
                <p
                  className={`${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  } leading-relaxed transition-colors duration-300 mb-3`}
                >
                  {t.home.strengthsText}
                </p>
                <ul
                  className={`list-disc list-inside space-y-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {t.home.strengthsList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2
                  className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {t.home.experienceTitle}
                </h2>
                <ul
                  className={`list-disc list-inside space-y-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {t.home.experienceList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
