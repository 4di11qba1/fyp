import { Typography, IconButton, Divider } from '@mui/material';
import React from 'react';

function AboutCard({heading, desc, icon, footing}) {
    const styles = {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        flexBasis: '345px',
    }
  return (
    <div style={styles}>
        <IconButton color="inherit">
            {icon}
        </IconButton>
        <Typography component="div" variant='h4'>
            {heading}
        </Typography>
        <Typography component="div" variant='p' sx={{textAlign: 'center'}}>
            {desc}
        </Typography>
        <Divider flexItem sx={{marginTop: '10px'}} />
        <Typography component="div" variant='h6' sx={{textAlign: 'center'}}>
            {footing}
        </Typography>
        <Divider flexItem />
    </div>
  )
}

export default AboutCard