import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Promotion({img, heading, paragraph}) {
    const nav = useNavigate();
    const styles = {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'column',
        backgroundImage: `url('${img}')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        width: '100vw', 
        height: '80vh', 
        textShadow: '4px 4px 8px #000000'
    }
  return (
    <div style={styles}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px', width: '400px', textAlign: 'center'}}>
            <Typography component="div" variant="h4" sx={{color: 'white'}}>
                {heading}
            </Typography>
            <Typography component="div" variant="p" sx={{color: 'white'}}>
                {paragraph}
            </Typography>
            <Button variant="contained" onClick={() => nav('/signup')}>Sign Up</Button>
        </div>
    </div>
  )
}

export default Promotion