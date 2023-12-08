import React from 'react';
import { useEffect, useState } from 'react';
import './LandingTransition.css';
import { Button } from '@mui/material';

function LandingTransition() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Delay the start of animations by 2000 milliseconds (adjust as needed)
    const timeoutId = setTimeout(() => {
      setStartAnimation(true);
    }, 2000);

    // Clear timeout on component unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {startAnimation && 
        <div className='ltrans-outer'>
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
                <Button variant="contained"> See More </Button>
              </div>
            </div>
            </div>
            </div>
            <div className="ltrans-container-outer-img">
              <div className="ltrans-img-inner">
                <img src='/img/games/batman.png'  alt="" className="ltrans-container-img"/>
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