import React from 'react';
import { Button } from '@mui/material';
import './HoveredCard.css';

function HoveredCard({ item }) {
  return (
    <>
        <div className="hoveredCard">
            <img src={item.img} alt={item.title} />
            <div className="card-content">
                <h2>
                    {item.title}
                </h2>
                <p>
                    {item.desc}
                </p>
                <a href="www.google.com" className="button">
                    <Button variant='contained' size="medium">{item.price}</Button>
                </a>
            </div>
        </div>
    </>
  )
}

export default HoveredCard