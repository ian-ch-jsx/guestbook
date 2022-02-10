import { useTheme } from '../../context/ThemeContext';
import './ThemeControls.css';

export default function ThemeControls() {
  const { theme, setTheme } = useTheme('');

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };
  return (
    <div className="theme-toggle" data-theme={theme}>
      <button onClick={switchTheme}>{theme === 'light' ? 'Dark' : 'Light'} mode</button>
    </div>
  );
}
