import { useEntries } from '../../context/EntryContext';
import Entry from '../Entry/Entry';
import { useTheme } from '../../context/ThemeContext';
import './EntryList.css';

export default function EntryList() {
  const { theme } = useTheme();
  const { entries } = useEntries();
  return (
    <div className="entry-list" data-theme={theme}>
      {entries.map((entry) => (
        <span key={entry.id}>
          <Entry entry={entry} />
        </span>
      ))}
    </div>
  );
}
