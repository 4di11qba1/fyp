import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Person from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Navbar({darkMode, changeMode, windowWidth}) {
    const props = 1;
    const nav = useNavigate();

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
                <IconButton color="inherit">
                    <img src='img/tiger-logo.jpg' alt='Logo' style={{width: '25px'}} />
                </IconButton>

                <Typography variant="h6" component="div">
                    Gamer's Utopia
                </Typography>
            </div>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                <IconButton color="inherit" onClick={() => nav('/signin')}>
                    <Person />
                </IconButton>

                <IconButton color="inherit" onClick={changeMode}>
                    {darkMode ? <DarkMode /> : <LightMode />}
                </IconButton>
            </div>

          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}