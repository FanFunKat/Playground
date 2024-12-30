import React from "react";

// Typ dla jednego języka
type LanguageOption = {
  label: string;
  value: string;
};

// Typ dla właściwości komponentu Languages
interface LanguagesProps {
  language: string; // Aktualnie wybrany język
  onLanguageChange: (value: string) => void; // Funkcja zmiany języka
}

export function Languages({ language, onLanguageChange }: LanguagesProps) {
  return (
    <div>
      <label className="label">Select Language</label>
      <div className="opts">
        {LANGUAGES.map(({ label, value }: LanguageOption) => {
          return (
            <div
              key={label}
              className={`opt ${language === value ? "selected" : ""}`}
              onClick={() => onLanguageChange(value)}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const LANGUAGES: LanguageOption[] = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "French", value: "fr" },
  { label: "Hindi", value: "hi" },
  { label: "Japanese", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Simplified Chinese", value: "zh-CN" },
  { label: "Spanish", value: "es" },
  { label: "Swahili", value: "sw" },
  { label: "Thai", value: "th" }
];