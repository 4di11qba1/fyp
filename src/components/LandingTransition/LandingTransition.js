import React from 'react';
import { useEffect, useState } from 'react';
import './LandingTransition.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { lightTheme, darkTheme } from '../Theme';

function LandingTransition({darkMode}) {
  const [styles, setStyles] = useState({
    '--bg-color': darkMode ? darkTheme.palette.background.paper : lightTheme.palette.background.paper,
    '--txt-color': darkMode ? darkTheme.palette.primary.text : lightTheme.palette.primary.text
  });

  useEffect(() => {
    setStyles({
      '--bg-color': darkMode ? darkTheme.palette.background.paper : lightTheme.palette.background.paper,
      '--txt-color': darkMode ? darkTheme.palette.primary.text : lightTheme.palette.primary.text
    });
  }, [darkMode]);

  const [startAnimation, setStartAnimation] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    
    const timeoutId = setTimeout(() => {
      setStartAnimation(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {startAnimation && 
        <div className='ltrans-outer' style={styles}>
          <div className= 'ltrans-container'>
            <div className="ltrans-container-content">
            <div className="ltrans-container-content-inner">
            <div className="ltrans-title">
              <h1 className='ltrans-h1'>Gamer's Utopia</h1>
            </div>
            <div className="ltrans-par">
            <p className="ltrans-p">
              Welcome to Gamer's Utopia, where pixels meet perfection and controllers unlock realms of infinite excitement! Dive into a digital wonderland where every click is a step closer to gaming nirvana. Our virtual haven is a symphony of immersive experiences, where fantasy merges with reality, and high scores are the currency of glory.
            </p>
            </div>
            <div className="ltrans-btns">
              <div className='ltrans-btns-more'>
                <Button variant="contained" onClick={() => nav('/store')}> Go to Store </Button>
              </div>
            </div>
            </div>
            </div>
            <div className="ltrans-container-outer-img">
              <div className="ltrans-img-inner">
                <img src='/img/landing-img.jpg'  alt="" className="ltrans-container-img"/>
                
              </div>
            </div>
          </div>
          <div className="ltrans-overlay"></div>
        </div>
      }
    </>
  )
}

export default LandingTransition