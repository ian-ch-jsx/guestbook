import { useUser } from '../../context/UserContext';
import ThemeControls from '../ThemeControls/ThemeControls';
import './Header.css';

export default function Header() {
  const { user } = useUser();

  const welcome = user ? `hi, ${user}!` : 'sign the guestbook';
  return (
    <div className="header">
      <span className="spaceholder"></span>
      <h1>{welcome}</h1>
      <ThemeControls />
    </div>
  );
}
