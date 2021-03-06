import { useUser } from '../../context/UserContext';
import ThemeControls from '../ThemeControls/ThemeControls';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

export default function Header() {
  const { user } = useUser();
  const { theme } = useTheme('');

  const welcome = user ? `Hi, ${user}!` : 'sign the guestbook';
  return (
    <header data-theme={theme}>
      <span className="spaceholder"></span>
      <h1>{welcome}</h1>
      <ThemeControls />
    </header>
  );
}
