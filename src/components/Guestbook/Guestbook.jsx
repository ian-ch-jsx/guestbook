import { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import { v4 as uuid } from 'uuid';
import './Guestbook.css';

export default function Guestbook() {
  const [name, setName] = useState('');
  const [entry, setEntry] = useState('');
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();

  function updateGuest() {
    if (!entry) return;
    setUser(name);
    setEntries([...entries, { name, message: entry, id: uuid() }]);
    setEntry('');
  }

  const nameInput = (
    <div className="name-form">
      <span>
        <input
          id="name"
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </span>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGuest();
  };

  const message = user ? 'Thanks for signing!' : '';
  return (
    <div>
      <h2>{message}</h2>
      {user ? null : nameInput}
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
                setName('');
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
