import './Entry.css';

export default function Entry({ entry: { name, message } }) {
  return (
    <div className="entry-card" data-testid="entry">
      <p>{message}</p>
      <h3>- {name}</h3>
    </div>
  );
}
