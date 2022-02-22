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
  const error = 'invalid login credentials.';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === process.env.REACT_APP_AUTH_USERNAME &&
      password === process.env.REACT_APP_AUTH_PASSWORD
    ) {
      setUser(name);
      const { from } = location.state || { from: { pathname: '/' } };
      history.replace(from.pathname);
    }
  };

  return (
    <div className="auth-container" data-theme={theme}>
      <form className="auth-form">
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
