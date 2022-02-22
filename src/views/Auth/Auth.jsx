import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useUser } from '../../context/UserContext';

export default function Auth() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useUser();
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === process.env.REACT_APP_AUTH_USERNAME &&
      password === process.env.REACT_APP_AUTH_PASSWORD
    ) {
      setUser(name);
      console.log('yay');
    } else {
      console.log('frick');
    }
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
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </div>
  );
}
