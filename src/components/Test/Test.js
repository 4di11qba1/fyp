import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './Test.css';

const Page = ({ offset, gradient, onClick, item }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className='slopeBegin'>
        <img style={{position: 'relative'}} src={item.img} alt={item.title} />
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>

    <ParallaxLayer className='text number' offset={offset} speed={0.3}>
      <span>{item.title}</span>
    </ParallaxLayer>
  </>
);

export default function App() {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <div style={{ background: '#dfdfdf' }}>
      <Parallax className='parallexContainer' ref={parallax} pages={itemData.length} horizontal>
      {itemData.map((item, index) => (
          <Page key={index} offset={index} gradient="pink" item={item} onClick={() => scroll(index + 1)} />
        ))}
      </Parallax>
    </div>
  );
}




const itemData = [
  {
    img: '/img/games/honkai.png',
    title: 'Honkai Impact Star Rail',
    desc: 'Honkai: Star Rail is a role-playing gacha video game developed by miHoYo, published by miHoYo in mainland China and worldwide by Cognosphere, d/b/a HoYoverse.',
    price: '$44.99'
  },
  {
    img: '/img/games/batman.png',
    title: 'Batman Arkham Knight',
    desc: 'Batman: Arkham Knight is a 2015 action-adventure game developed by Rocksteady Studios and published by Warner Bros. Interactive Entertainment.',
    price: '$65.99'
  },
  {
    img: '/img/games/codmw3.png',
    title: 'Call of Duty Modern Warfare 3',
    desc: 'A sequel to 2022 Modern Warfare II, serving as the third entry in the rebooted Modern Warfare sub-series and the twentieth installment in the overall Call of Duty series.',
    price: '$69.99'
  },
  {
    img: '/img/games/crew.png',
    title: 'The Crew Motorfest',
    desc: 'The sequel to 2018 The Crew 2 and the third game in The Crew series, and was released on September 14, 2023.',
    price: '$59.99'
  },
  {
    img: '/img/games/cs2.png',
    title: 'Counter Strike 2',
    desc: 'Counter-Strike 2 is a 2023 multiplayer tactical first-person shooter game developed and published by Valve. It is the fifth main installment of the Counter-Strike series.',
    price: '$29.99'
  },
  {
    img: '/img/games/ffxv.png',
    title: 'Final Fantasy XV',
    desc: 'Final Fantasy XV is an action role-playing game developed and published by Square Enix. The fifteenth main installment of the Final Fantasy series.',
    price: '$89.99'
  },
  {
    img: '/img/games/ffxvi.png',
    title: 'Final Fantasy XVI',
    desc: 'Final Fantasy XVI is a 2023 action role-playing game developed and published by Square Enix. The sixteenth main installment in the Final Fantasy series.',
    price: '$69.99'
  },
  {
    img: '/img/games/gta5.png',
    title: 'Grand Theft Auto V',
    desc: 'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series.',
    price: '$49.99'
  },
  {
    img: '/img/games/rdr2.png',
    title: 'Red Dead Redemption 2',
    desc: 'Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption.',
    price: '$59.99'
  }
];