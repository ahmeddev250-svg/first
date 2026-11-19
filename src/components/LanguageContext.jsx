import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');

  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const toggleLanguage = (targetLang) => {
    if (targetLang === 'fr' || targetLang === 'ar') {
      setLang(targetLang);
    } else {
      setLang((prev) => (prev === 'fr' ? 'ar' : 'fr'));
    }
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, isRTL: lang === 'ar', toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
