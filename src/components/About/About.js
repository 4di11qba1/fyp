import { Divider, Typography, Card, Button } from '@mui/material';
import React from 'react';
import AboutCard from './AboutCard';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import GamepadIcon from '@mui/icons-material/Gamepad';
import PeopleIcon from '@mui/icons-material/People';

function About({windowWidth}) {
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
            <AboutCard heading={'Price'} desc={'At Gamers Utopia, we believe in making your dreams affordable. Say goodbye to compromise and hello to extraordinary savings! Our Best Pricing is a celebration of affordability.'} icon={<PriceCheckIcon sx={{width: '50px', height: '50px'}} />} footing={'Unbeatable Savings Await You!'} divide={true}  />
            <Divider flexItem orientation='vertical' />
            <AboutCard heading={'Platforms'} desc={'Are you tired of switching between different platforms for your gaming fix? Look no further! Gamers Utopia brings you a plethora of gaming delights, all in one place.'} icon={<GamepadIcon sx={{width: '50px', height: '50px'}} />} footing={'Games for Every Platform!'} divide={true}  />
            <Divider flexItem orientation='vertical' />
            <AboutCard heading={'Community'} desc={'Are you ready to be part of something extraordinary? Join our community, the ultimate haven for gamers from all platforms to connect, share, and celebrate the love of gaming together!'} icon={<PeopleIcon sx={{width: '50px', height: '50px'}} />} footing={'Join the Conversation Today!'} divide={true}  />
        </div>
        
        <div style={{ display: 'flex', width: '100vw', minHeight: '70vh', flexDirection: windowWidth < 700 ? 'column' : 'row' }}>
            {windowWidth < 700 ? (
                <img
                src="/img/story.jpg"
                alt="Our Story"
                style={{
                    width: '100vw',
                    height: '50vh', // Adjust the height as needed
                    objectFit: 'cover',
                }}
                />
            ) : (
                <div
                style={{
                    width: '50vw',
                    backgroundImage: "url('/img/story.jpg')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
                />
            )}
            <Card sx={{ width: windowWidth < 700 ? '100vw' : '50vw', height: '70vh', display: 'flex', flexDirection: 'column', gap: '15px', padding: '0 50px 0 50px', justifyContent: 'center' }}>
                <Typography component="div" variant="h3" fontWeight={'bold'}>
                Our Story
                </Typography>
                <Typography component="div" variant="h6">
                Our Journey
                </Typography>
                <Typography component="div" variant="p">
                Founded by a group of avid gamers, Gamer's Haven was born out of the desire to simplify the process of finding and purchasing games. We understand the excitement that comes with discovering new titles and the satisfaction of getting the best deals. Our journey started with the belief that every gamer deserves a seamless and enjoyable experience when exploring the vast world of gaming.
                </Typography>
                <Button variant="contained" sx={{ width: '30%' }}>Check our Store</Button>
            </Card>
        </div>

        <div style={{display: 'flex', width: '100vw', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10%', }}>
            <Divider flexItem />
            <Typography component="div" variant="h4">
                Game Stores
            </Typography>
            <Divider flexItem />
            <div style={{display: 'flex', width: '100%', flexDirection: windowWidth < 700 && 'column', justifyContent: 'center', alignItems: 'center', gap: '10%', marginTop: '10%'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    {
                        stores.slice(0, 3).map((store, index) => {
                            return <AboutCard key={index} heading={store.heading} icon={store.icon} desc={store.desc} footing={store.domain} divide={true} />
                        })
                    }
                </div>
                <Divider flexItem orientation='vertical' />
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    {
                        stores.slice(3, 6).map((store, index) => {
                            return <AboutCard key={index} heading={store.heading} icon={store.icon} desc={store.desc} footing={store.domain} divide={true} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;

const stores = [
    {
        icon: <img src={'/img/stores/steam.png'} style={{width: '150px'}} alt="Steam" />,
        heading: 'Steam',
        desc: 'Steam is the ultimate destination for playing, discussing, and creating games, with thousands of games from AAA to indie and everything in-between.',
        domain: 'store.steampowered.com'
    },
    {
        icon: <img src={'/img/stores/epic.png'} style={{width: '150px'}} alt="Epic Games" />,
        heading: 'Epic Games Store',
        desc: 'A curated digital storefront for PC and Mac, designed with both players and creators in mind. Focusing on great games and a fair deal for game developers.',
        domain: 'store.epicgames.com/en-US'
    },
    {
        icon: <img src={'/img/stores/ps.png'} style={{width: '150px'}} alt="Playstation" />,
        heading: 'Playstation Store',
        desc: 'Discover PlayStation Plus. Enjoy hundreds of PS5, PS4 and classic PlayStation games, online multiplayer, and more unmissable benefits.',
        domain: 'playstation.com'
    },
    {
        icon: <img src={'/img/stores/xbox.png'} style={{width: '150px'}} alt="Microsoft" />,
        heading: 'Microsoft Store',
        desc: 'Download games instantly to your Windows tablet or computer. Browse thousands of free and paid games by category, read user reviews, and compare ratings.',
        domain: 'microsoft.com'
    },
    {
        icon: <img src={'/img/stores/gog.png'} style={{width: '150px'}} alt="GOG.COM" />,
        heading: 'GOG',
        desc: 'Download the best classic and new games on Windows, Mac & Linux. A vast selection of titles, DRM-free, with free goodies and 30-day money-back guarantee.',
        domain: 'gog.com'
    },
    {
        icon: <img src={'/img/stores/humble.png'} style={{width: '150px'}} alt="HumbleBundle" />,
        heading: 'Humble Bundle',
        desc: 'Humble Bundle sells Games, Ebooks, Software and other Digital Content. Great prices Get it. HumbleBundle sells games, books, software, and more DRM-free multi-format humble bundles.',
        domain: 'humblebundle.com'
    }
]