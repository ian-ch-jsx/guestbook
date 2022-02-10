import './App.css';
import Home from './views/Home/Home';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme('');
  return (
    <div className="App" data-theme={theme}>
      <Home />
    </div>
  );
}

export default App;
