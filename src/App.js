import { createTheme, ThemeProvider } from '@mui/material'
import { useState, useEffect } from 'react'
import React from 'react';
import { Box } from '@mui/material';
import Sidenav from './components/Sidenav/Sidenav';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8A0303',
      text: '#524747'
    },
    background: {
      default: '#e8caca',
      paper: '#e8dada'
    }
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#e8caca',
          },
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D21919',
      text: '#e3dede'
    },
    background: {
      default: '#634a4a',
      paper: '#251e1d'
    }
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#634a4a',
          },
        },
      },
    },
  },
});

function App() {

  const [darkMode, setDarkMode] = useState(false)
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
    console.log("Clicked")
    darkMode ? setDarkMode(false) : setDarkMode(true)
  }

  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>


          <AnimatePresence>
              <Router>
                <Box sx={{
                    width: '100%',
                    height: '100vh',
                    bgcolor: 'background.default',
                    display: 'flex',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    flexDirection: 'row',
                    gap: '15px',
                    transition: 'all 1s'
                }}>
                  
                  <Sidenav 
                    windowWidth={windowWidth} 
                    lightTheme={lightTheme} 
                    darkTheme={darkTheme} 
                    darkMode={darkMode} 
                    changeMode={changeMode}
                  />
                  
                </Box>
              </Router>
          </AnimatePresence>


      </ThemeProvider>
    </div>
  );
}

export default App;
