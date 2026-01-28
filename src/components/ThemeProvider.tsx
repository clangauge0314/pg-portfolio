'use client';

import { useThemeStore } from '@/store/themeStore';
import { useEffect } from 'react';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDark } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem('theme-storage');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.state?.isDark) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      } catch (e) {
      }
    }
  }, []);

  return <>{children}</>;
}
