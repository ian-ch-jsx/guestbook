import React from 'react';
import EntryList from '../../components/EntryList/EntryList';
import Guestbook from '../../components/Guestbook/Guestbook';
import Header from '../Header/Header';
import { EntryProvider } from '../../context/EntryContext';

export default function Home() {
  return (
    <EntryProvider>
      <Header />
      <Guestbook />
      <EntryList />
    </EntryProvider>
  );
}
