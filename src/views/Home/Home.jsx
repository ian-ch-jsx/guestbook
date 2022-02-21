import EntryList from '../../components/EntryList/EntryList';
import Guestbook from '../../components/Guestbook/Guestbook';
import Header from '../../components/Header/Header';
import { EntryProvider } from '../../context/EntryContext';
import Auth from '../Auth/Auth';

export default function Home() {
  return (
    <EntryProvider>
      <Header />
      <Auth />
      <Guestbook />
      <EntryList />
    </EntryProvider>
  );
}
