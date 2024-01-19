import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Home } from '@mui/icons-material';
import { Login, Logout, AppRegistration } from '@mui/icons-material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// import { Route, Routes } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import './Sidenav.css';
import Searchbar from '../Searchbar/Searchbar';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import Game from '../Game/Game';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer({ windowWidth, lightTheme, darkTheme, darkMode, changeMode }) {
  const [open, setOpen] = React.useState(false);
  const nav = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigateTo = (url) => {
    nav(url)
  }

  useEffect(() => {
    const handleLoad = () => {
      const elements = document.getElementsByClassName('css-1r9jet7');
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
      }
    };
  
    window.onload = handleLoad;
  
    // Clean up the event listener when the component is unmounted
    return () => {
      window.onload = null;
    };
  })

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' })
            }}
          >
            <img src='img/tiger-logo.jpg' alt='Logo' style={{width: '25px'}} />
          </IconButton>
          <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>

            <Typography variant="h6" noWrap component="div">
              Store
            </Typography>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <Searchbar lightTheme={lightTheme} darkTheme={darkTheme} darkMode={darkMode} />
              <PersonIcon />
            </div>

          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{visibility: open ? 'visible' : 'hidden'}}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigateTo('/store')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                borderRadius: '0 30px 30px 0',
                bgcolor: isActive('/') ? 'background.default' : ''
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Home />
              </ListItemIcon>
              <ListItemText primary='Home' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigateTo('/signin')}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  borderRadius: '0 30px 30px 0',
                  bgcolor: isActive('/signin') ? 'background.default' : ''
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Login />
                </ListItemIcon>
                <ListItemText primary='Sign In' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigateTo('/signup')}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  borderRadius: '0 30px 30px 0',
                  bgcolor: isActive('/signup') ? 'background.default' : ''
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AppRegistration />
                </ListItemIcon>
                <ListItemText primary='Sign Up' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
            <Divider />
            <List>
              <ListItem disablePadding sx={{ display: 'block' }} onClick={changeMode}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    borderRadius: '0 30px 30px 0'
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {darkMode ? <DarkMode /> : <LightMode />}
                  </ListItemIcon>
                  <ListItemText primary={darkMode ? 'White Mode' : 'Dark Mode'} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  borderRadius: '0 30px 30px 0'
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Logout />
                </ListItemIcon>
                <ListItemText primary='Sign Out' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ width: '50vw', flexGrow: 1 }}>
        <DrawerHeader />
        <Routes>
          <Route exact path="/" element={
            <Main lightTheme={lightTheme} 
                darkTheme={darkTheme} 
                darkMode={darkMode} 
                windowWidth={windowWidth} 
            />} 
          />
          <Route path="/game" element={<Game windowWidth={windowWidth} />} />
        </Routes>
      </Box>
    </Box>
  );
}
