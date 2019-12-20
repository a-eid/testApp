import React, {useState} from 'react';
import darkTheme from './values/dark';
import lightTheme from './values/light';

export const ThemeContext = React.createContext({});

export const Provider: React.FC = ({children}) => {
  const [theme, setTheme] = useState(lightTheme);

  function toggleTheme() {
    setTheme(theme.name === 'light' ? darkTheme : lightTheme);
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
