import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/';
import { useTheme } from '../../context/ThemeContext';
import { useUser } from '../../context/UserContext';
import './Auth.css';

export default function Auth() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();
  const { theme } = useTheme();
  const location = useLocation();
  const history = useHistory();
  const [error, setError] = useState('');
  console.log('username', process.env.REACT_APP_AUTH_USERNAME);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === process.env.REACT_APP_AUTH_USERNAME &&
      password === process.env.REACT_APP_AUTH_PASSWORD
    ) {
      setUser(name);
      const { from } = location.state || { from: { pathname: '/' } };
      history.replace(from.pathname);
    } else {
      setError('boo, you suck!');
    }
  };

  return (
    <div className="auth-container" data-theme={theme}>
      <form>
        <input
          id="username"
          placeholder="name"
          type="text"
          aria-label="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          aria-label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Sign In</button>
        {error && <h2>{error}</h2>}
      </form>
    </div>
  );
}
