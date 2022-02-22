import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function PrivateRoute({ children, ...routeProps }) {
  const { user } = useUser();
  console.log({ routeProps });

  return (
    <>
      <Route
        {...routeProps}
        render={({ location }) =>
          user ? children : <Redirect to={{ pathname: '/auth', state: { from: location } }} />
        }
      />
    </>
  );
}
