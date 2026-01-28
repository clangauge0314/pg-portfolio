'use client';

import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow-lg border flex items-center justify-center transition-colors duration-300 ${isDark ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-100'}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-500" />
        ) : (
          <Moon className={`w-4 h-4 sm:w-6 sm:h-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
        )}
      </motion.div>
    </motion.button>
  );
}
