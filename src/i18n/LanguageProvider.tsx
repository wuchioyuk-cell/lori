import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  defaultLanguage,
  languages,
  translations,
  type Dict,
  type LanguageCode,
} from "./translations";

type Ctx = {
  lang: LanguageCode;
  setLang: (l: LanguageCode) => void;
  t: Dict;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "cw-lang";

function isValidLang(value: string | null): value is LanguageCode {
  return !!value && languages.some((l) => l.code === value);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>(defaultLanguage);

  // Hydrate from localStorage on mount (client only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isValidLang(stored)) setLangState(stored);
  }, []);

  // Sync <html lang>
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = translations[lang].htmlLang;
    }
  }, [lang]);

  const setLang = (l: LanguageCode) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
