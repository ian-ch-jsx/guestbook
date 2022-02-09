import { useContext, createContext } from 'react';
import useLocalStorage from '../hooks/LocalStorage';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'light' : 'dark');

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContext provider');
  }
  return context;
};

export { ThemeProvider, useTheme };
