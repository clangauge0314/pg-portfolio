import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavItem } from '../Navigation';

interface NavItemsProps {
  navItems: NavItem[];
  pathname: string;
  isHovered: boolean;
  isDark: boolean;
}

export function NavItems({ navItems, pathname, isHovered, isDark }: NavItemsProps) {
  return (
    <>
      {navItems.map((item, index) => {
        const isActive = pathname === item.href;

        return (
          <motion.div
            key={item.href}
            className="relative"
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
                <motion.div
                  key="dot"
                  initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: {
                      delay: index * 0.05,
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
                      delay: (navItems.length - index - 1) * 0.03,
                      duration: 0.2,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  }}
                >
                  <Link href={item.href}>
                    <motion.div
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                        isActive
                          ? `${isDark ? 'bg-blue-400' : 'bg-yellow-500'}`
                          : `${isDark ? 'bg-gray-600 hover:bg-gray-400' : 'bg-gray-400 hover:bg-gray-600'}`
                      }`}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 1.1 }}
                      animate={{
                        scale: isActive ? 1.25 : 1,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 20,
                      }}
                    />
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
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
                      delay: index * 0.06,
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
                      delay: (navItems.length - index - 1) * 0.03,
                      duration: 0.25,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  }}
                >
                  <Link href={item.href}>
                    <motion.div
                      className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 whitespace-nowrap block ${
                        isActive
                          ? `${isDark ? 'bg-blue-400 text-black' : 'bg-yellow-500 text-black'} shadow-lg`
                          : `${isDark ? 'bg-transparent text-gray-300 hover:bg-gray-700' : 'bg-transparent text-gray-700 hover:bg-gray-100'}`
                      }`}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        scale: isActive ? 1.05 : 1,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 20,
                      }}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </>
  );
}

 