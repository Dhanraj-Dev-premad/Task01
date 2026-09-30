// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Navbar from './Navbar';
import MainContent from './MainContent';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
