import { createTheme, ThemeProvider } from '@mui/material'
import { useState, useEffect } from 'react'
import React from 'react';
import Sidenav from './components/Sidenav/Sidenav';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// import { Color } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
      text: '#000000',
    },
    background: {
      default: '#d6d6d6',
      paper: '#ffffff',
    }
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#d6d6d6',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'black', // Set the default background color
          color: 'white',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black'
          }
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#050505',
      text: '#ffffff'
    },
    background: {
      default: '#2e2e2e',
      paper: '#050505'
    }
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#050505',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff', // Set the default background color
          color: 'black',
          '&:hover': {
            backgroundColor: 'black',
            color: 'white'
          }
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
                {/* <Box sx={{
                    // width: '100%',
                    // height: '100vh',
                    bgcolor: 'background.default',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: '15px',
                    transition: 'all 1s'
                }}> */}
                  
                  <Sidenav 
                    windowWidth={windowWidth} 
                    lightTheme={lightTheme} 
                    darkTheme={darkTheme} 
                    darkMode={darkMode} 
                    changeMode={changeMode}
                  />
                  
                {/* </Box> */}
              </Router>
          </AnimatePresence>


      </ThemeProvider>
    </div>
  );
}

export default App;
