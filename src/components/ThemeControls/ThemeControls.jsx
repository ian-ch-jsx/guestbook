import useLocalStorage from '../../hooks/LocalStorage';

export default function ThemeControls() {
  // if line 9 does not work, change 10 to 'theme' 'light'
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    console.log(newTheme);
  };
  return (
    <div className="app" data-theme={theme}>
      <h1>ThemeControls</h1>
      <span>testing the theme control component</span>
      <button onClick={switchTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme</button>
    </div>
  );
}
