import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
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
  const linkElement = screen.getByText(/sign the guestbook/i);
  expect(linkElement).toBeInTheDocument();
});

test('logout button appears when name has been input and input disappears', () => {
  render(
    <ThemeProvider>
      <EntryProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </EntryProvider>
    </ThemeProvider>
  );

  const signButton = screen.getByRole('button', { name: /sign/i });
  const input = screen.getByPlaceholderText(/name/i);
  const message = screen.getByPlaceholderText(/your message/i);

  userEvent.type(input, 'Ian');
  userEvent.type(message, 'my message');
  userEvent.click(signButton);

  const logoutButton = screen.getByTestId('logout-button');

  expect(logoutButton).toBeInTheDocument();
  expect(input).not.toBeInTheDocument();
});

test('tests that entries are rendered', () => {
  render(
    <ThemeProvider>
      <EntryProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </EntryProvider>
    </ThemeProvider>
  );
  const signButton = screen.getByRole('button', { name: /sign/i });
  const input = screen.getByPlaceholderText(/name/i);
  const message = screen.getByPlaceholderText(/your message/i);

  userEvent.type(input, 'ian');
  userEvent.type(message, 'this is an entry');
  userEvent.click(signButton);

  const post = screen.getByText(/this is an entry/i);
  const name = screen.getByRole('heading', { name: /- ian/i });
  const div = screen.getByTestId('entry');

  expect(post).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(div).toBeInTheDocument();
});
