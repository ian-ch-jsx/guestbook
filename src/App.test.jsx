import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import EntryList from './components/EntryList/EntryList';
import Guestbook from './components/Guestbook/Guestbook';
import { EntryProvider } from './context/EntryContext';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';

test('renders the header', () => {
  render(
    <ThemeProvider>
      <EntryProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </EntryProvider>
    </ThemeProvider>
  );
  const header = screen.getByText(/sign the guestbook/i);
  expect(header).toBeInTheDocument();
});

test('tests that entries are rendered', () => {
  render(
    <ThemeProvider>
      <EntryProvider>
        <UserProvider>
          <Guestbook />
          <EntryList />
        </UserProvider>
      </EntryProvider>
    </ThemeProvider>
  );
  const signButton = screen.getByRole('button', { name: /sign/i });
  const message = screen.getByLabelText(/message-textarea/i);

  userEvent.type(message, 'this is an entry');
  userEvent.click(signButton);

  const post = screen.getByText(/this is an entry/i);
  const div = screen.getByTestId('entry');

  expect(post).toBeInTheDocument();
  expect(div).toBeInTheDocument();
});
