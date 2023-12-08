import React from 'react';
import './GCard.css';
import { Button } from '@mui/material';

function GCard({ darkTheme, lightTheme, darkMode, item }) {
    const style = {
        '--title': `"${item.title}"`,
        '--bgInner': darkMode ? darkTheme.palette.background.default : lightTheme.palette.background.default
    };
  return (
    <div className="gc-container" style={style}>
        <div className="gc-card" style={style}>
            <div className="gc-imgBx">
                <img src={item.img} alt={item.title} />
            </div>

            <div className="gc-contentBx">

                <h2>{item.title}</h2>

                <div className="gc-size">
                    <h3>{item.genre}</h3>
                </div>

                {/* <div className="gc-color">

                    <h3>Color :</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> */}
                <div className='gc-btn'>
                  <Button variant='contained'>{item.price}</Button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default GCard