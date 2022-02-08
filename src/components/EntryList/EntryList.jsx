import { useEntries } from '../../context/EntryContext';
import Entry from '../Entry/Entry';
import './EntryList.css';

export default function EntryList() {
  const { entries } = useEntries();
  return (
    <div className="entry-list">
      {entries.map((entry) => (
        <span key={entry.name}>
          <Entry entry={entry} />
        </span>
      ))}
    </div>
  );
}
