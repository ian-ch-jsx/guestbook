import useLocalStorage from '../../hooks/LocalStorage';
import './ThemeControls.css';

export default function ThemeControls() {
  // if line 9 does not work, change 10 to 'theme' 'light'
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <div className="theme-toggle" data-theme={theme}>
      <button onClick={switchTheme}>{theme === 'light' ? 'Dark' : 'Light'} mode</button>
    </div>
  );
}
