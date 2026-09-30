// Navbar.js
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Navbar() {
  // Access the context values directly
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar-${theme}`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </nav>
  );
}

export default Navbar;
