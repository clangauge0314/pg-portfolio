'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useThemeStore } from '@/store/themeStore';
import { useLanguageStore } from '@/store/languageStore';
import { translations } from '@/locales';
import { NavigationShell } from './Navigation/NavigationShell';

export interface NavItem {
  href: string;
  label: string;
}

export default function Navigation() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const { isDark } = useThemeStore();
  const { language, toggleLanguage } = useLanguageStore();

  const t = translations[language];
  const navItems: NavItem[] = [
    { href: '/', label: t.nav.home },
    { href: '/projects', label: t.nav.projects },
    { href: '/skills', label: t.nav.skills },
    { href: '/experience', label: t.nav.experience },
  ];

  const currentIndex = navItems.findIndex((item) => item.href === pathname);

  return (
    <NavigationShell
      navItems={navItems}
      currentIndex={currentIndex}
      isHovered={isHovered}
      setIsHovered={setIsHovered}
      isDark={isDark}
      language={language}
      toggleLanguage={toggleLanguage}
    />
  );
}


