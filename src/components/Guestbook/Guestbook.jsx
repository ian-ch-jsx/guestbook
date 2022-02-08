import { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';

export default function Guestbook() {
  const [name, setName] = useState('');
  const [entry, setEntry] = useState('');
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();

  function updateGuest() {
    if (!entry) return;
    setUser(name);
    setEntries([...entries, { name, message: entry }]);
  }

  const nameInput = (
    <div className="form">
      <span>
        <label htmlFor="name">Name:</label>
      </span>
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

  const message = user ? 'Thanks for signing!' : 'Please sign!';
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
            Sign
          </button>
          {user && (
            <button
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
