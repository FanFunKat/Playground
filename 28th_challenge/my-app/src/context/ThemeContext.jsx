import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [accentColor, setAccentColor] = useState('#63537d');
  const [fontPercentage, setFontPercentage] = useState(100);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode={ isDarkMode },
        toggleDarkMode={ toggleDarkMode },
        accentColor={ accentColor },
        updateAccentColor={ setAccentColor },
        fontPercentage={ fontPercentage },
        updateFontPercentage={ setFontPercentage }
      }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

