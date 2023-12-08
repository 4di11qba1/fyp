import { Card, Divider } from "@mui/material";
import TopPicks from "./TopPicks";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import Carousel from "./Carousel/Carousel";
import MobileCarousel from "./Carousel/MobileCarousel/MobileCarousel";
import LandingText from "../LandingText/LandingText";
import LandingTransition from "../LandingTransition/LandingTransition";
import GList from "./GList";

function Main({ darkTheme, lightTheme, darkMode, windowWidth }) {
  const [showLandingText, setShowLandingText] = useState(true);

  useEffect(() => {
    // Hide landing text after a delay (adjust the delay as needed)
    const timeoutId = setTimeout(() => {
      setShowLandingText(false);
    }, 4000);

    return () => {
      // Clear timeout on component unmount
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <AnimatePresence>
          {showLandingText && (
            <motion.div
              key="landingText"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              <LandingText />
            </motion.div>
          )}
        </AnimatePresence>

        {!showLandingText && <LandingTransition />}

        <AnimatePresence>   
          {!showLandingText && (
            <motion.div
              key="mainBody"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              style={{padding: '15px'}}
            >
              {windowWidth > 1000 ? (
                <Carousel
                  lightTheme={lightTheme}
                  darkTheme={darkTheme}
                  darkMode={darkMode}
                  itemData={itemData}
                  windowWidth={windowWidth}
                />
              ) : (
                <MobileCarousel />
              )}

              <TopPicks 
                  heading={'Favorites'} 
                  itemData={itemData} 
                  lightTheme={lightTheme} 
                  darkTheme={darkTheme} 
                  darkMode={darkMode} />

              <Card sx={{ display: 'flex', flexWrap: 'wrap', gap: '15px', minHeight: '300px', padding: '25px', borderRadius: '15px' }}>
                <GList heading={'Top Sellers'} itemData={itemData} />
                <Divider orientation="vertical" flexItem />
                <GList heading={'Most Played'} itemData={itemData} />
                <Divider orientation="vertical" flexItem />
                <GList heading={'New Releases'} itemData={itemData} />
              </Card>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Main;



const itemData = [
  {
    img: '/img/games/honkai.png',
    title: 'Honkai Impact Star Rail',
    desc: 'Honkai: Star Rail is a role-playing gacha video game developed by miHoYo, published by miHoYo in mainland China and worldwide by Cognosphere, d/b/a HoYoverse.',
    price: '$44.99',
    genre: 'Open World RPG'
  },
  {
    img: '/img/games/batman.png',
    title: 'Batman Arkham Knight',
    desc: 'Batman: Arkham Knight is a 2015 action-adventure game developed by Rocksteady Studios and published by Warner Bros. Interactive Entertainment.',
    price: '$65.99',
    genre: 'Open World RPG'
  },
  {
    img: '/img/games/codmw3.png',
    title: 'Call of Duty Modern Warfare 3',
    desc: 'A sequel to 2022 Modern Warfare II, serving as the third entry in the rebooted Modern Warfare sub-series and the twentieth installment in the overall Call of Duty series.',
    price: '$69.99',
    genre: 'First Person Shooter'
  },
  {
    img: '/img/games/crew.png',
    title: 'The Crew Motorfest',
    desc: 'The sequel to 2018 The Crew 2 and the third game in The Crew series, and was released on September 14, 2023.',
    price: '$59.99',
    genre: 'Open World Racing'
  },
  {
    img: '/img/games/cs2.png',
    title: 'Counter Strike 2',
    desc: 'Counter-Strike 2 is a 2023 multiplayer tactical first-person shooter game developed and published by Valve. It is the fifth main installment of the Counter-Strike series.',
    price: '$29.99',
    genre: 'First Person Shooter'
  },
  {
    img: '/img/games/ffxv.png',
    title: 'Final Fantasy XV',
    desc: 'Final Fantasy XV is an action role-playing game developed and published by Square Enix. The fifteenth main installment of the Final Fantasy series.',
    price: '$89.99',
    genre: 'Open World RPG'
  },
  {
    img: '/img/games/ffxvi.png',
    title: 'Final Fantasy XVI',
    desc: 'Final Fantasy XVI is a 2023 action role-playing game developed and published by Square Enix. The sixteenth main installment in the Final Fantasy series.',
    price: '$69.99',
    genre: 'Open World RPG'
  },
  {
    img: '/img/games/gta5.png',
    title: 'Grand Theft Auto V',
    desc: 'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series.',
    price: '$49.99',
    genre: 'Open World RPG'
  },
  {
    img: '/img/games/rdr2.png',
    title: 'Red Dead Redemption 2',
    desc: 'Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption.',
    price: '$59.99',
    genre: 'Open World RPG'
  }
];