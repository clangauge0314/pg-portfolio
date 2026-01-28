'use client';

import Link from 'next/link';
import { useThemeStore } from '@/store/themeStore';
import { useLanguageStore } from '@/store/languageStore';
import { translations } from '@/locales';

export default function NotFound() {
  const { isDark } = useThemeStore();
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="text-center">
        <h1 className={`text-6xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>404</h1>
        <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {t.notFound.title}
        </h2>
        <p className={`mb-8 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {t.notFound.description}
        </p>
        <Link
          href="/"
          className={`px-6 py-3 rounded-lg transition-colors duration-300 font-medium ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
        >
          {t.notFound.backHome}
        </Link>
      </div>
    </div>
  );
}
