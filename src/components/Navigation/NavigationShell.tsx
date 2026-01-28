import { motion } from 'framer-motion';
import type { NavItem } from '../Navigation';
import { NavItems } from './NavItems';
import { LanguageToggleButton } from './LanguageToggleButton';

interface NavigationShellProps {
  navItems: NavItem[];
  currentIndex: number;
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
  isDark: boolean;
  language: string;
  toggleLanguage: () => void;
}

export function NavigationShell({
  navItems,
  currentIndex,
  isHovered,
  setIsHovered,
  isDark,
  language,
  toggleLanguage,
}: NavigationShellProps) {
  const currentPath = navItems[currentIndex]?.href ?? '/';

  return (
    <>
      <nav
        className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={`Main navigation - current language ${language}`}
      >
        <motion.div
          className={`relative px-3 py-2 sm:px-6 sm:py-4 rounded-full backdrop-blur-md shadow-xl border transition-colors duration-300 ${
            isDark ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-gray-200'
          }`}
          initial={false}
          animate={{
            paddingLeft: isHovered ? '1rem' : '0.75rem',
            paddingRight: isHovered ? '1rem' : '0.75rem',
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 35,
            mass: 0.8,
          }}
        >
          <motion.div
            className="flex items-center"
            animate={{
              gap: isHovered ? '0.75rem' : '0.5rem',
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 35,
              mass: 0.8,
            }}
          >
            <NavItems
              navItems={navItems}
              pathname={currentPath}
              isHovered={isHovered}
              isDark={isDark}
            />

            <LanguageToggleButton
              isHovered={isHovered}
              isDark={isDark}
              language={language}
              toggleLanguage={toggleLanguage}
              navItemCount={navItems.length}
            />
          </motion.div>
        </motion.div>
      </nav>
      {isHovered && (
        <button
          type="button"
          className="fixed inset-0 z-40 sm:hidden"
          onClick={() => setIsHovered(false)}
          aria-label="Close navigation overlay"
        />
      )}
    </>
  );
}

 