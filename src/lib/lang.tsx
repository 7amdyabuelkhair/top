import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { content, type Lang } from "./site-content";

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (typeof content)[Lang];
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "ar" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = content[lang].dir;
    document.title = content[lang].seo.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", content[lang].seo.description);
  }, [lang]);

  const value: LangContextValue = {
    lang,
    setLang,
    toggle: () => setLang(lang === "ar" ? "en" : "ar"),
    t: content[lang],
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}

export { productImageMap } from "./images";
