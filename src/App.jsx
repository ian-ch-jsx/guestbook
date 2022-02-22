import './App.css';
import Home from './views/Home/Home';
import { useTheme } from './context/ThemeContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import Header from './components/Header/Header';

function App() {
  const { theme } = useTheme('');
  return (
    <div className="App" data-theme={theme}>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
