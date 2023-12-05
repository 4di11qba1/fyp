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
      main: '#8A0303',
      text: '#524747',
    },
    background: {
      default: '#e8caca',
      paper: 'rgb(232, 218, 218)',
    },
    action: {
      selected: '#ffe8e7',
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
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
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
      paper: '#251e1d',
      gradient: `radial-gradient(100% 50% at 100% 50%, #e3dede 0%, rgba(60, 26, 229, 0.247904) 11.79%, rgba(59, 26, 229, 0.241896) 21.38%, rgba(58, 26, 229, 0.2324) 29.12%, rgba(57, 26, 229, 0.219837) 35.34%, rgba(55, 26, 229, 0.20463) 40.37%, rgba(53, 26, 229, 0.1872) 44.56%, rgba(51, 26, 229, 0.16797) 48.24%, rgba(48, 26, 229, 0.147363) 51.76%, rgba(46, 26, 229, 0.1258) 55.44%, rgba(44, 26, 229, 0.103704) 59.63%, rgba(41, 26, 229, 0.0814963) 64.66%, rgba(39, 26, 229, 0.0596) 70.88%, rgba(36, 26, 229, 0.038437) 78.62%, rgba(34, 26, 229, 0.0184296) 88.21%, rgba(32, 26, 229, 0) 100%)`,
    },
    action: {
      selected: '#533e3f',
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
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
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
