import { createContext, useState } from "react";

import { Schema } from "../data/Schema";
import { spanish, english } from "../data/Lang";

export type LanguageContextType = {
  actually: string;
  language: Schema;
  handleLanguage: (lang: string) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  actually: "spanish",
  language: spanish,
  handleLanguage: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Schema>(spanish);

  const handleLanguage = (lang: string) => {
    if (lang === "spanish") {
      setLanguage(spanish);
    } else if (lang === "english") {
      setLanguage(english);
    }
  };

  return (
    <LanguageContext.Provider
      value={{ actually: language.selected, language, handleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
