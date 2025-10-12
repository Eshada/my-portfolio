"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Language } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof typeof translations.en) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Get initial language from localStorage or default to English
function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en'
  
  try {
    const saved = localStorage.getItem("language") as Language | null
    // Only return saved language if it exists, otherwise default to English
    if (saved === 'en' || saved === 'ar') return saved
    return 'en'
  } catch {
    return 'en'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with English as default
  const [language, setLanguageState] = useState<Language>(() => getInitialLanguage())

  useEffect(() => {
    // Update document on mount and language change
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
      document.documentElement.classList.add('hydrated')
    }
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    
    if (typeof window !== 'undefined') {
      localStorage.setItem("language", lang)
      document.documentElement.lang = lang
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    }
  }

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || translations.en[key]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}