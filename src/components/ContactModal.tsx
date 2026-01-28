'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStore } from '@/store/themeStore';
import { X, Mail, BookOpen, Github } from 'lucide-react';
import { useLanguageStore } from '@/store/languageStore';
import { translations } from '@/locales';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { isDark } = useThemeStore();
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] sm:w-full max-w-2xl mx-auto sm:mx-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl z-50 max-h-[90vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-3xl font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t.contact.title}
                </h2>
                <button
                  onClick={onClose}
                  className={`p-2 rounded-full transition-colors duration-300 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  <X className={`w-6 h-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
                </button>
              </div>
              
              <p className={`text-lg mb-8 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t.contact.subtitle}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-6 transition-colors duration-300`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center`}>
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <h3 className={`text-xl font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {t.contact.email}
                    </h3>
                  </div>
                  <a
                    href="mailto:clangauge314@gmail.com"
                    className={`hover:underline transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-yellow-600'}`}
                  >
                    clangauge314@gmail.com
                  </a>
                </div>

                <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-6 transition-colors duration-300`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center`}>
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <h3 className={`text-xl font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {t.contact.inflearn}
                    </h3>
                  </div>
                  <a
                    href="https://www.inflearn.com/users/1533664/@dakgangjung123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:underline transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-yellow-600'}`}
                  >
                    {t.contact.viewProfile}
                  </a>
                </div>

                <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-6 transition-colors duration-300`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center`}>
                      <Github className="w-5 h-5 text-white" />
                    </div>
                    <h3 className={`text-xl font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {t.contact.github}
                    </h3>
                  </div>
                  <a
                    href="https://github.com/clangauge0314"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:underline transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-yellow-600'}`}
                  >
                    github.com/clangauge0314
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
