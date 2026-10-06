import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Language, type Translation } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  t: Translation;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
  try {
    const saved = localStorage.getItem('language');
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {
    // armazenamento indisponível
  }
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = t.locale;
    document.title = t.meta.title;
    try {
      localStorage.setItem('language', language);
    } catch {
      // armazenamento indisponível
    }
  }, [language, t]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de LanguageProvider');
  }
  return context;
};
