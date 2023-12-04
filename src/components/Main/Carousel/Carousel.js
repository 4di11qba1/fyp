import React from 'react';
import './Carousel.css';

const Carousel = () => {
  return (
    <div className="void" id="void">
      <div className="crop">
        <ul className="card-list" style={{ '--count': 6 }}>
          {[...Array(6)].map((_, index) => (
            <li className='list-item' key={index}>
              <div className="card">
                <a className='list-anchor' href='www.google.com'>
                  <span className="model-name">Gretel-ACTGAN</span>
                  <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="last-circle"></div>
        <div className="second-circle"></div>
      </div>
      <div className="mask"></div>
      <div className="center-circle"></div>
    </div>
  );
};

export default Carousel;