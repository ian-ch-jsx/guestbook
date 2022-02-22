import EntryList from '../../components/EntryList/EntryList';
import Guestbook from '../../components/Guestbook/Guestbook';
import { EntryProvider } from '../../context/EntryContext';

export default function Home() {
  return (
    <EntryProvider>
      <Guestbook />
      <EntryList />
    </EntryProvider>
  );
}
