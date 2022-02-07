import { useState, createContext, useContext } from 'react';

const EntryContext = createContext();

const EntryProvider = ({ children }) => {
  const [entry, setEntry] = useState([]);

  return <EntryContext.Provider value={{ entry, setEntry }}>{children}</EntryContext.Provider>;
};

const useEntries = () => {
  const context = useContext(EntryContext);

  if (context === undefined) {
    throw new Error('useEntry must be used within a EntryContext provider');
  }
  return context;
};

export { EntryProvider, useEntries };
