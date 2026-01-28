'use client';

import { useRouter, usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';

const pages = [
  { path: '/', index: 0 },
  { path: '/projects', index: 1 },
  { path: '/skills', index: 2 },
  { path: '/experience', index: 3 },
];

export default function PageNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const { isDark } = useThemeStore();

  const getCurrentPageIndex = () => {
    return pages.find((page) => page.path === pathname)?.index ?? 0;
  };

  const handlePrevious = () => {
    const currentIndex = getCurrentPageIndex();
    const targetIndex = Math.max(currentIndex - 1, 0);
    if (targetIndex !== currentIndex) {
      router.push(pages[targetIndex].path);
    }
  };

  const handleNext = () => {
    const currentIndex = getCurrentPageIndex();
    const targetIndex = Math.min(currentIndex + 1, pages.length - 1);
    if (targetIndex !== currentIndex) {
      router.push(pages[targetIndex].path);
    }
  };

  const currentIndex = getCurrentPageIndex();
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < pages.length - 1;

  return (
    <>
      {canGoPrevious && (
        <button
          onClick={handlePrevious}
          className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-30 hover:opacity-70 ${isDark ? 'bg-gray-800/50 border border-gray-700 text-white' : 'bg-white/50 border border-gray-200 text-gray-700'}`}
          aria-label="이전 페이지"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {canGoNext && (
        <button
          onClick={handleNext}
          className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-30 hover:opacity-70 ${isDark ? 'bg-gray-800/50 border border-gray-700 text-white' : 'bg-white/50 border border-gray-200 text-gray-700'}`}
          aria-label="다음 페이지"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </>
  );
}

