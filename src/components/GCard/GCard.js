import React from 'react';
import './GCard.css';
import { lightTheme, darkTheme } from '../Theme.js';
import { Card } from '@mui/material';

function GCard({item, darkMode}) {
    const style = {
        '--bgCardGame': darkMode ? darkTheme.palette.background.paper : lightTheme.palette.background.paper,
        '--txtCardGame': darkMode ? darkTheme.palette.primary.text : lightTheme.palette.primary.text 
    }
  return (
    <div className="container page-wrapper" style={style}>
        <div className="page-inner">
            <div className="row">
                <div className='el-wrapper'>
                    <Card sx={{width: '360px', padding: '15px', borderRadius: '15px'}}>
                        <div className="box-up">
                        <img className="gc-img" src={item.img} alt={item.title} />
                        <div className="gc-img-info">
                            <div className="info-inner">
                            <span className="p-name"><Card>{item.title}</Card></span>
                            <span className="p-company"></span>
                            </div>
                            <div className="a-size">{item.desc}</div>
                        </div>
                        </div>

                        <div className="box-down">
                        <div className="h-bg">
                            <div className="h-bg-inner"></div>
                        </div>

                        <a className="gc-cart" href="www.google.com">
                            <span className="gc-price">{item.genre}</span>
                            <span className="gc-add-to-cart">
                            <span className="gc-txt">See More</span>
                            </span>
                        </a>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GCard