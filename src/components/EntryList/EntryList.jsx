import { useEntries } from '../../context/EntryContext';
import Entry from '../Entry/Entry';

export default function EntryList() {
  const { entries } = useEntries();
  return (
    <div className="entry-list">
      {entries.map((entry) => (
        <p key={entry.name}>
          <Entry entry={entry} />
        </p>
      ))}
    </div>
  );
}
