import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useUser } from '../../context/UserContext';

export default function Auth() {
  const [name, setName] = useState('');
  const { setUser } = useUser();
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('Kingsley');
    setUser('Kingsley');
  };

  return (
    <div className="form-container" data-theme={theme}>
      <form>
        <label htmlFor="username">name: </label>
        <input
          id="username"
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="password">password: </label>
        <input type="password" placeholder="password" />
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </div>
  );
}
