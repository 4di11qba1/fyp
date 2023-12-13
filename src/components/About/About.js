import { Divider, Typography, Card, Button } from '@mui/material';
import React from 'react';
import AboutCard from './AboutCard';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import GamepadIcon from '@mui/icons-material/Gamepad';
import PeopleIcon from '@mui/icons-material/People';

function About() {
    const styles = {
        display:'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '80vh',
        width: '100vw',
        backgroundImage: "url('/img/about.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
  return (
    <div>
        <div style={styles}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', width: '40%', textAlign: 'center', textShadow: '4px 4px 8px #000000'}}>
                <Typography component="div" variant="h3" fontWeight={'bold'}>
                    Gamer's Utopia
                </Typography>
                <Typography component="div" variant="h5" fontWeight={'bold'}>
                    About Us
                </Typography>
                <Typography component="div" variant="p">
                    Our Aim: Provide the best possible experience to the enthusiastic gamers and build a community together.
                </Typography>
            </div>
        </div>

        <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', width: '100vw', padding: '10%'}}>
            <AboutCard heading={'Price'} desc={'At Gamers Utopia, we believe in making your dreams affordable. Say goodbye to compromise and hello to extraordinary savings! Our Best Pricing is a celebration of affordability.'} icon={<PriceCheckIcon sx={{width: '50px', height: '50px'}} />} footing={'Unbeatable Savings Await You!'} />
            <Divider flexItem orientation='vertical' />
            <AboutCard heading={'Platforms'} desc={'Are you tired of switching between different platforms for your gaming fix? Look no further! Gamers Utopia brings you a plethora of gaming delights, all in one place.'} icon={<GamepadIcon sx={{width: '50px', height: '50px'}} />} footing={'Games for Every Platform!'} />
            <Divider flexItem orientation='vertical' />
            <AboutCard heading={'Community'} desc={'Are you ready to be part of something extraordinary? Join our community, the ultimate haven for gamers from all platforms to connect, share, and celebrate the love of gaming together!'} icon={<PeopleIcon sx={{width: '50px', height: '50px'}} />} footing={'Join the Conversation Today!'} />
        </div>
        
        <div style={{display: 'flex', width: '100vw', height: '50vh'}}>
            <div style={{width: '50vw', backgroundImage: "url('/img/story.jpg')", backgroundPosition: 'center', backgroundSize: 'cover'}}>

            </div>
            <Card sx={{width: '50vw', display: 'flex', flexDirection: 'column', gap: '15px', padding: '0 50px 0 50px', justifyContent: 'center'}}>
                <Typography component="div" variant="h3" fontWeight={'bold'}>
                    Our Story
                </Typography>
                <Typography component="div" variant="h6">
                    Our Journey
                </Typography>
                <Typography component="div" variant="p">
                    Founded by a group of avid gamers, Gamer's Haven was born out of the desire to simplify the process of finding and purchasing games. We understand the excitement that comes with discovering new titles and the satisfaction of getting the best deals. Our journey started with the belief that every gamer deserves a seamless and enjoyable experience when exploring the vast world of gaming.
                </Typography>
                <Button variant="contained" sx={{width: '30%'}}>Check our Store</Button>
            </Card>
        </div>
    </div>
  )
}

export default About