import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidenav from './components/Sidenav/Sidenav';
import SignIn from './components/SignIn/SignIn.js';
import SignUp from './components/SignUp/SignUp.js';
import { MyThemeProvider, lightTheme, darkTheme } from './components/Theme.js';
import Welcome from './components/Welcome/Welcome.js';
import Navbar from './components/Navbar.js';
import About from './components/About/About.js';
import Footer from './components/Footer/Footer.js';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Retrieve darkMode value from localStorage or default to false
    return JSON.parse(localStorage.getItem('darkMode')) || true;
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Save darkMode value to localStorage whenever it changes
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const changeMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className="App">
      <MyThemeProvider darkMode={darkMode}>
        <AnimatePresence>
          <Router>
            <Navbar
              darkMode={darkMode}
              changeMode={changeMode}
            />
            <Routes>
              <Route exact path="/signin" element={<SignIn windowWidth={windowWidth} />} />
              <Route exact path="/signup" element={<SignUp windowWidth={windowWidth} />} />
              <Route exact path="/about" element={<About windowWidth={windowWidth} />} />
              <Route exact path="/store/*" element={
                <Sidenav
                  windowWidth={windowWidth}
                  lightTheme={lightTheme}
                  darkTheme={darkTheme}
                  darkMode={darkMode}
                  changeMode={changeMode}
                  itemData={itemData}
                  itemDataV={itemDataV}
                  genreList={genreList}
                />
              } />
              <Route exact path="/" element={
                <Welcome
                  windowWidth={windowWidth}
                  darkMode={darkMode}
                  changeMode={changeMode}
                  itemData={itemData}
                  itemDataV={itemDataV}
                  genreList={genreList}
                />
              } />
            </Routes>

            <Footer />
          </Router>
        </AnimatePresence>
      </MyThemeProvider>
    </div>
  );
}

export default App;


const itemData = [
  {
    img: '/img/games/honkai.png',
    title: 'Honkai Impact Star Rail',
    desc: 'Honkai: Star Rail is a role-playing gacha video game developed by miHoYo, published by miHoYo in mainland China and worldwide by Cognosphere, d/b/a HoYoverse.',
    price: '$44.99',
    genre: 'Open World RPG',
    rating: '4.1'
  },
  {
    img: '/img/games/batman.png',
    title: 'Batman Arkham Knight',
    desc: 'Batman: Arkham Knight is a 2015 action-adventure game developed by Rocksteady Studios and published by Warner Bros. Interactive Entertainment.',
    price: '$65.99',
    genre: 'Open World RPG',
    rating: '4.9'
  },
  {
    img: '/img/games/codmw3.png',
    title: 'Call of Duty Modern Warfare 3',
    desc: 'A sequel to 2022 Modern Warfare II, serving as the third entry in the rebooted Modern Warfare sub-series and the twentieth installment in the overall Call of Duty series.',
    price: '$69.99',
    genre: 'First Person Shooter',
    rating: '4.5'
  },
  {
    img: '/img/games/crew.png',
    title: 'The Crew Motorfest',
    desc: 'The sequel to 2018 The Crew 2 and the third game in The Crew series, and was released on September 14, 2023.',
    price: '$59.99',
    genre: 'Open World Racing',
    rating: '3.8'
  },
  {
    img: '/img/games/cs2.png',
    title: 'Counter Strike 2',
    desc: 'Counter-Strike 2 is a 2023 multiplayer tactical first-person shooter game developed and published by Valve. It is the fifth main installment of the Counter-Strike series.',
    price: '$29.99',
    genre: 'First Person Shooter',
    rating: '4.4'
  },
  {
    img: '/img/games/ffxv.png',
    title: 'Final Fantasy XV',
    desc: 'Final Fantasy XV is an action role-playing game developed and published by Square Enix. The fifteenth main installment of the Final Fantasy series.',
    price: '$89.99',
    genre: 'Open World RPG',
    rating: '4.9'
  },
  {
    img: '/img/games/ffxvi.png',
    title: 'Final Fantasy XVI',
    desc: 'Final Fantasy XVI is a 2023 action role-playing game developed and published by Square Enix. The sixteenth main installment in the Final Fantasy series.',
    price: '$69.99',
    genre: 'Open World RPG',
    rating: '4.9'
  },
  {
    img: '/img/games/gta5.png',
    title: 'Grand Theft Auto V',
    desc: 'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series.',
    price: '$49.99',
    genre: 'Open World RPG',
    rating: '4.8'
  },
  {
    img: '/img/games/rdr2.png',
    title: 'Red Dead Redemption 2',
    desc: 'Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption.',
    price: '$59.99',
    genre: 'Open World RPG',
    rating: '4.8'
  }
];

const itemDataV = [
  {
    img: '/img/games/batman-vertical.jpg',
    title: 'Batman Arkham Knight',
    desc: 'Batman: Arkham Knight is a 2015 action-adventure game developed by Rocksteady Studios and published by Warner Bros. Interactive Entertainment.',
    genre: 'Action',
    price: '$69.99'
  },
  {
    img: '/img/games/gtav-vertical.jpg',
    title: 'Grand Theft Auto V',
    desc: 'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series.',
    genre: 'Open World',
    price: '$69.99'
  },
  {
    img: '/img/games/mirage-vertical.jpg',
    title: 'Assassins Creed Mirage',
    desc: 'Counter-Strike 2 is a 2023 multiplayer tactical first-person shooter game developed and published by Valve. It is the fifth main installment of the Counter-Strike series.',
    genre: 'Stealth',
    price: '$69.99'
  },
  {
    img: '/img/games/nfs-vertical.jpg',
    title: 'Need for Speed Heat',
    desc: 'The sequel to 2018 The Crew 2 and the third game in The Crew series, and was released on September 14, 2023.',
    genre: 'Racing',
    price: '$69.99'
  },
  {
    img: '/img/games/cod-vertical.jpg',
    title: 'Call of Duty Modern Warfare 2',
    desc: 'A sequel to 2022 Modern Warfare II, serving as the third entry in the rebooted Modern Warfare sub-series and the twentieth installment in the overall Call of Duty series.',
    genre: 'FPS',
    price: '$69.99'
  },
]

const genreList = ['Action', 'Adventure', 'RPG', 'Racing', 'Sports', 'First Person', 'Battle Royale', 'Third Person']