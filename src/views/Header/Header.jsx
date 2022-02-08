import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();

  const welcome = user ? `hi, ${user}!` : 'welcome!';
  return (
    <div>
      <h1>{welcome}</h1>
    </div>
  );
}
