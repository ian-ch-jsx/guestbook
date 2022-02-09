import EntryList from '../../components/EntryList/EntryList';
import Guestbook from '../../components/Guestbook/Guestbook';
import Header from '../../components/Header/Header';
import { EntryProvider } from '../../context/EntryContext';
import useLocalStorage from '../../hooks/LocalStorage';

export default function Home() {
  return (
    <EntryProvider>
      <Header />
      <Guestbook />
      <EntryList />
    </EntryProvider>
  );
}
