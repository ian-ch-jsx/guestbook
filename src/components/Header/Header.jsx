import { useUser } from '../../context/UserContext';
import './Header.css';

export default function Header() {
  const { user } = useUser();

  const welcome = user ? `hi, ${user}!` : 'sign the guestbook';
  return (
    <div className="header">
      <h1>{welcome}</h1>
    </div>
  );
}
