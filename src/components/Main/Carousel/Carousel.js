import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import './Carousel.css';

const Carousel = ({darkTheme, lightTheme, darkMode}) => {

  const itemData = [
    {
      img: '/img/games/batman-vertical.jpg',
      title: 'Batman Arkham Knight',
      desc: 'Batman: Arkham Knight is a 2015 action-adventure game developed by Rocksteady Studios and published by Warner Bros. Interactive Entertainment.',
      price: '$69.99'
    },
    {
      img: '/img/games/gtav-vertical.jpg',
      title: 'Grand Theft Auto V',
      desc: 'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series.',
      price: '$69.99'
    },
    {
      img: '/img/games/mirage-vertical.jpg',
      title: 'Assassins Creed Mirage',
      desc: 'Counter-Strike 2 is a 2023 multiplayer tactical first-person shooter game developed and published by Valve. It is the fifth main installment of the Counter-Strike series.',
      price: '$69.99'
    },
    {
      img: '/img/games/nfs-vertical.jpg',
      title: 'Need for Speed Heat',
      desc: 'The sequel to 2018 The Crew 2 and the third game in The Crew series, and was released on September 14, 2023.',
      price: '$69.99'
    },
    {
      img: '/img/games/cod-vertical.jpg',
      title: 'Call of Duty Modern Warfare 2',
      desc: 'A sequel to 2022 Modern Warfare II, serving as the third entry in the rebooted Modern Warfare sub-series and the twentieth installment in the overall Call of Duty series.',
      price: '$69.99'
    },
  ]

  const [bgColor, setBgColor] = useState();
  const [textColor, setTextColor] = useState();
  const [hoveredIndex, setHoveredIndex] = useState(0);

  useEffect(() => {
    setBgColor({
      backgroundColor: darkMode ? darkTheme.palette.background.paper : lightTheme.palette.background.paper
    })

    setTextColor({
      color: darkMode ? darkTheme.palette.primary.text : lightTheme.palette.primary.text
    })
  }, [darkMode, darkTheme, lightTheme])

  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  // const handleCardLeave = (index) => {
  //   setHoveredIndex(null);
  // };

  return (
    <div className="void" id="void">
      <div className="crop">
        <ul className="card-list" style={{ '--count': 5 }}>
          {itemData.slice(0, 5).map((item, index) => (
            <li className='list-item' key={item.title}>
              <div
                className="card"
                style={bgColor}
                onMouseEnter={() => handleCardHover(index)}
                // onMouseLeave={() => handleCardLeave(index)}
              >
                <img src={item.img} alt={item.title} width={55} height={55} style={{borderRadius: '5px'}} />
                <a className='list-anchor' href='www.google.com'>
                  <span className="model-name" style={textColor}>{item.title}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="last-circle"></div>
        <div className="second-circle"></div>
      </div>
      <div className="mask">
        {(hoveredIndex !== null && hoveredIndex >= 0) ? 
          <>
            <div className="hoveredCard">
              <img src={itemData[hoveredIndex].img} alt={itemData[hoveredIndex].title} />
              <div className="card-content">
                <h2>
                  {itemData[hoveredIndex].title}
                </h2>
                <p>
                  {itemData[hoveredIndex].desc}
                </p>
                <a href="www.google.com" className="button">
                  <Button variant='contained' size="medium">{itemData[hoveredIndex].price}</Button>
                </a>
              </div>
            </div>
          </> : null
        }
      </div>
      <div className="center-circle" style={bgColor}>
        <svg className='circular-svg' viewBox="0 0 100 100">
          <defs>
            <path id="circle"
              d="
                M 50, 50
                m -37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0"/>
          </defs>
          <text fontSize="17">
            <textPath xlinkHref="#circle">
              Gamer's Utopia
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Carousel;