import React from 'react';

export default function Entry({ entry: { name, message } }) {
  return (
    <div className="entry-card">
      <p>{message}</p>
      <p>- {name}</p>
    </div>
  );
}
