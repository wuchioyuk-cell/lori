import { useEffect, useRef, useState } from "react";
import { Check, Globe } from "lucide-react";
import { languages } from "./translations";
import { useLanguage } from "./LanguageProvider";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const active = languages.find((l) => l.code === lang) ?? languages[0];

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.languageLabel}
        onClick={() => setOpen((v) => !v)}
        className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-foreground/90 transition-transform hover:scale-[1.03]"
      >
        <Globe className="size-3.5 opacity-70" />
        <span>{active.short}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="glass-strong absolute right-0 z-50 mt-2 min-w-[10rem] overflow-hidden rounded-2xl p-1.5 text-sm shadow-lg"
        >
          {languages.map((l) => {
            const selected = l.code === lang;
            return (
              <li key={l.code}>
                <button
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left transition-colors hover:bg-foreground/5 ${
                    selected ? "text-foreground" : "text-foreground/75"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden className="text-base leading-none">
                      {l.flag}
                    </span>
                    <span className="font-medium">{l.label}</span>
                  </span>
                  {selected ? <Check className="size-3.5 text-primary" /> : null}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
