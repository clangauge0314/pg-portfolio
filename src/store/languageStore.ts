import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'ko' | 'ja' | 'en';

interface LanguageState {
  language: Language;
  isInitialized: boolean;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  initializeLanguage: () => Promise<void>;
}

const languages: Language[] = ['ko', 'ja', 'en'];

function detectLanguageFromBrowser(): Language {
  if (typeof window === 'undefined') return 'ko';
  
  const browserLang = navigator.language || (navigator as any).userLanguage;
  
  if (browserLang.startsWith('ko')) return 'ko';
  if (browserLang.startsWith('ja')) return 'ja';
  return 'en';
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'ko',
      isInitialized: false,
      setLanguage: (language: Language) => set({ language }),
      toggleLanguage: () => set((state) => {
        const currentIndex = languages.indexOf(state.language);
        const nextIndex = (currentIndex + 1) % languages.length;
        return { language: languages[nextIndex] };
      }),
      initializeLanguage: async () => {
        if (get().isInitialized) return;
        
        try {
          const response = await fetch('/api/detect-country');
          const data = await response.json();
          
          if (data.language) {
            set({ language: data.language, isInitialized: true });
            return;
          }
        } catch (error) {
          console.error('Failed to detect language from IP:', error);
        }
        
        const browserLang = detectLanguageFromBrowser();
        set({ language: browserLang, isInitialized: true });
      },
    }),
    {
      name: 'language-storage',
      partialize: (state) => ({ language: state.language }),
    }
  )
);

