import { motion, AnimatePresence } from 'framer-motion';
import { Languages } from 'lucide-react';

interface LanguageToggleButtonProps {
  isHovered: boolean;
  isDark: boolean;
  language: string;
  toggleLanguage: () => void;
  navItemCount: number;
}

export function LanguageToggleButton({
  isHovered,
  isDark,
  language,
  toggleLanguage,
  navItemCount,
}: LanguageToggleButtonProps) {
  return (
    <motion.div
      className="relative ml-2"
      initial={false}
      layout
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
        mass: 0.5,
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {!isHovered ? (
          <motion.button
            key="dot"
            onClick={toggleLanguage}
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              transition: {
                delay: navItemCount * 0.05,
                type: 'spring',
                stiffness: 500,
                damping: 25,
                mass: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              rotate: 180,
              transition: {
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 cursor-pointer flex items-center justify-center ${
              isDark ? 'bg-gray-500 hover:bg-gray-400' : 'bg-gray-300 hover:bg-gray-500'
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.1 }}
          >
            <Languages className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
          </motion.button>
        ) : (
          <motion.button
            key="menu"
            onClick={toggleLanguage}
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.6,
              filter: 'blur(4px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                delay: navItemCount * 0.06,
                type: 'spring',
                stiffness: 500,
                damping: 30,
                mass: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.6,
              filter: 'blur(4px)',
              transition: {
                duration: 0.25,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 whitespace-nowrap flex items-center gap-1.5 ${
              isDark
                ? 'bg-transparent text-gray-300 hover:bg-gray-700'
                : 'bg-transparent text-gray-700 hover:bg-gray-100'
            }`}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Languages className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>
              {language === 'ko' ? '한글' : language === 'ja' ? '日本語' : 'English'}
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

 