'use client';

import Link from 'next/link';
import { useThemeStore } from '@/store/themeStore';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguageStore } from '@/store/languageStore';
import { translations } from '@/locales';
import { getProjectsForLanguage } from '@/constants/projects';

export default function Projects() {
  const { isDark } = useThemeStore();
  const { language } = useLanguageStore();
  const t = translations[language];
  const projects = getProjectsForLanguage(language);

  return (
    <div
      className={`min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        >
        <h1
          className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {t.projects.title}
        </h1>
        <p
          className={`text-xl mb-12 transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {t.projects.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/projects/${project.id}`}
                  className={`group block h-full ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${isDark ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {project.titleText}
                    </h3>
                    <p className={`text-sm mb-4 line-clamp-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.descriptionText}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors duration-300 ${isDark ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors duration-300 ${isDark ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    <div className={`flex items-center text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-900'}`}>
                      {t.projects.viewDetails}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      </AnimatePresence>
    </div>
  );
}
