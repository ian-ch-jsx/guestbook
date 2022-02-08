import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();
  return (
    <div>
      <h1>hi, {user}!</h1>
    </div>
  );
}
