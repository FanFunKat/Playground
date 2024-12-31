import React, { useEffect, useState } from "react";
import axios, { CancelTokenSource } from "axios";

interface TranslateProps {
  language: string;
  text: string;
}

export function Translate({ language, text }: TranslateProps) {
  const [translated] = useTranslation(text, language);

  return (
    <div className="translate">
      <label className="label">Output</label>
      <h1 className="title">{translated.replace("&#39;", "'")}</h1>
    </div>
  );
}

const useTranslation = (text: string, language: string): [string] => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (!text) {
      return;
    }

    const cancelToken = axios.CancelToken.source();

    doTranslation(text, language, cancelToken, setTranslated);

    return () => {
      try {
        cancelToken.cancel();
      } catch (err) {
        console.error('Error translating:', err);
      }
    };
  }, [text, language]);

  return [translated];
};

const debounce = <T extends any[]>(fn: (...args: T) => void) => {
  let id: number | null = null; // Możemy zachować typ number

  return (...args: T) => { // Używamy T jako typu argumentów
    if (id) {
      clearTimeout(id);
    }
    id = window.setTimeout(() => {
      fn(...args);
      id = null;
    }, 300);
  };
};

const doTranslation = debounce(
  async (
    input: string,
    languageCode: string,
    cancelToken: CancelTokenSource,
    callback: (translatedText: string) => void
  ) => {
    try {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2?key=${API_KEY}",//don't have API key soo it won't work here :(
        {
          q: input,
          target: languageCode,
        },
        { cancelToken: cancelToken.token }
      );

      callback(data.data.translations[0].translatedText);
    } catch (err) {
      callback("");
      console.error('Error translating:', err);
    }
  }
);
