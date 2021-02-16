import { useState, useEffect } from "react";
import { i18n } from "i18n.js";

export default function useTranslation() {
  const [language, setLanguage] = useState("en");

  useEffect(() => setLanguage(i18n.language), []);

  const changeLanguage = (lg) => {
    if (language !== lg) {
      setLanguage(lg);
      i18n.changeLanguage(lg);
    }
  };

  return [language, changeLanguage];
}
