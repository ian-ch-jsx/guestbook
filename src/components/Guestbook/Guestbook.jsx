import { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import { useTheme } from '../../context/ThemeContext';
import { v4 as uuid } from 'uuid';
import './Guestbook.css';

export default function Guestbook() {
  const [name] = useState('');
  const [entry, setEntry] = useState('');
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();
  const { theme } = useTheme();

  function updateGuest() {
    setEntries([...entries, { name, message: entry, id: uuid() }]);
    setEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGuest();
  };

  return (
    <div className="form-container" data-theme={theme}>
      <form className="entry-form" onSubmit={handleSubmit}>
        <span>
          <textarea
            className="entry-box"
            value={entry}
            placeholder="your message"
            onChange={(e) => setEntry(e.target.value)}
          />
        </span>
        <span>
          <button className="button" type="submit">
            sign
          </button>
          {user && (
            <button
              data-testid="logout-button"
              type="button"
              onClick={() => {
                setUser('');
              }}
            >
              Im not {user}!
            </button>
          )}
        </span>
      </form>
    </div>
  );
}
