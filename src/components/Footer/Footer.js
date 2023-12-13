import React from 'react';
import './Footer.css';
import { Card, Divider, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

function Footer({darkMode}) {
  return (
    <Card sx={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100px',
      padding: '20px 50px',
    }}>
      {/* <div style={{flexGrow: 1}}>
        <Typography component="div" variant="h5">
              Gamer's Utopia
        </Typography>
        <Typography component="div" variant="p" width={300} marginTop={3}>
          Our Aim: Provide the gaming enthusiats with the best possible platform in existence.
        </Typography>
      </div> */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flexGrow: 1
      }}>

          <ul className="footer-social">
            <li><a href="www.google.com"><FacebookIcon /></a></li>
            <li><a href="www.google.com"><LinkedInIcon /></a></li>
            <li><a href="www.google.com"><GitHubIcon /></a></li>
            <li><a href="www.google.com"><TwitterIcon /></a></li>
            <li><a href="www.google.com"><EmailIcon /></a></li>
          </ul>
          <ul className='footer-menu'>
            <li><a href="www.google.com">Home</a></li>
            <Divider orientation="vertical" flexItem />
            <li><a href="/about">About</a></li>
            <Divider orientation="vertical" flexItem />
            <li><a href="www.google.com">Services</a></li>
            <Divider orientation="vertical" flexItem />
            <li><a href="www.google.com">Team</a></li>
            <Divider orientation="vertical" flexItem />
            <li><a href="www.google.com">Contact</a></li>
          </ul>
          <p>&copy; 2023 Gamer's Utopia. All rights reserved. Designed by Gamer's Utopia Team.</p>

      </div>
    </Card>
  )
}

export default Footer