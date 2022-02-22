import { useUser } from '../../context/UserContext';
import './Entry.css';

export default function Entry({ entry: { message } }) {
  const { user } = useUser();

  return (
    <div className="entry-card" data-testid="entry">
      <p>{message}</p>
      <h3>- {user}</h3>
    </div>
  );
}
