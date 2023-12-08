import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidenav from './components/Sidenav/Sidenav';
import { MyThemeProvider, lightTheme, darkTheme } from './components/Theme.js';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const changeMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className="App">
      <MyThemeProvider darkMode={darkMode}>
        <AnimatePresence>
          <Router>
            <Sidenav
              windowWidth={windowWidth}
              lightTheme={lightTheme}
              darkTheme={darkTheme}
              darkMode={darkMode}
              changeMode={changeMode}
            />
          </Router>
        </AnimatePresence>
      </MyThemeProvider>
    </div>
  );
}

export default App;
