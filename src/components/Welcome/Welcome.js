import React from 'react';
import LandingTransition from '../LandingTransition/LandingTransition.js';
import LandingText from '../LandingText/LandingText.js';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Typography, Divider, Button } from '@mui/material';
import Popular from '../Popular.js';
// import { lightTheme, darkTheme } from '../Theme.js';
import Navbar from '../Navbar.js';
import Promotion from '../Promotion/Promotion.js';
import './Welcome.css';
import GCard from '../GCard/GCard.js';
import OptionsList from '../OptionsList.js';
import Footer from '../Footer/Footer.js';

function Welcome({darkMode, changeMode, windowWidth, itemData, itemDataV, genreList}) {
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
    <div>
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
          {!showLandingText && 
            <motion.div
              key="welcomeBody"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1.5, delay: 2}}
            >
              <Navbar
                darkMode={darkMode}
                changeMode={changeMode}
              />
            </motion.div>
          }
          {!showLandingText && (
              <>
                  <LandingTransition darkMode={darkMode} />
          
                  <motion.div
                    key="welcomeBody"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.5, delay: 2}}
                    style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '10vw', marginTop: '10vw'}}
                  >
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px', padding: '0 10vw 0 10vw'}}>
                      <Typography component="div" variant="h4">
                        People's Choice
                      </Typography>
                      <Divider flexItem />
                      <div style={{display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center', justifyContent: 'center'}}>
                        {itemData.map((item, index) => {
                          return <Popular key={index} item={item} />
                        })}
                      </div>
                      <Divider flexItem />
                      <Button variant="contained">Load More</Button>
                      <Divider flexItem />
                    </div>

                    <Promotion img={'/img/community.jpg'} heading={'Join our Community'} paragraph={'Join our community which is in the making and made by the gamers for gamers. All players are welcome no matter what game you play.'} />
                    
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px', padding: '0 10vw 0 10vw'}}>
                      <Typography component="div" variant="h4">
                        Top Genres
                      </Typography>
                      <Divider flexItem />
                      
                        <OptionsList genreList={genreList} />
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center', justifyContent: 'center'}}>
                          {itemDataV.map((item, index) => {
                            return <GCard key={index} item={item} darkMode={darkMode} />
                          })}
                        </div>

                      <Divider flexItem />
                      <Button variant="contained">Load More</Button>
                      <Divider flexItem />
                    </div>

                    <Footer />
                  </motion.div>
              </>
          )}

        </AnimatePresence>
    </div>
  )
}

export default Welcome;