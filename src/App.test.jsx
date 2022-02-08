import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { EntryProvider } from './context/EntryContext';
import { UserProvider } from './context/UserContext';

test('renders the header', () => {
  render(
    <EntryProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </EntryProvider>
  );
  const linkElement = screen.getByText(/sign the guestbook/i);
  expect(linkElement).toBeInTheDocument();
});

test('logout button appears when name has been input', () => {
  render(
    <EntryProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </EntryProvider>
  );

  const signButton = screen.getByRole('button', { name: /sign/i });
  const input = screen.getByPlaceholderText(/name/i);
  const message = screen.getByPlaceholderText(/your message/i);

  userEvent.type(input, 'Ian');
  userEvent.type(message, 'my message');
  userEvent.click(signButton);

  const logoutButton = screen.getByTestId('logout-button');

  expect(logoutButton).toBeInTheDocument();
});
