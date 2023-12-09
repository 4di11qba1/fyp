import React from 'react';
import { Card, List, ListItem, FormControl,
    FormHelperText, 
    Input, 
    InputLabel,
    IconButton, Button } from '@mui/material';

function Footer() {
  return (
    <>
        <Card
            sx={{
                // position: "fixed",
                // bottom: 0,
                // left: 0,
                width: "100%",
                // height: '300px',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px'
            }}
        >
            <List sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <ListItem>
                    <h1>Gamer's Utopia</h1>
                </ListItem>
                <ListItem>
                    <img src='img/tiger-logo.jpg' alt='Logo' style={{width: '200px', marginLeft: '23px'}} />
                </ListItem>
            </List>
            <List>
                <ListItem><h2>About</h2></ListItem>
                <ListItem>
                    <IconButton
                        color="inherit"
                        sx={{height: '10px', fontSize: '20px'}}
                    >
                        <p>Our Story</p>
                    </IconButton>
                </ListItem>
                <ListItem>
                    <IconButton
                        color="inherit"
                        sx={{height: '10px', fontSize: '20px'}}
                    >
                        <p>Our Team</p>
                    </IconButton>
                </ListItem>
                <ListItem>
                    <IconButton
                        color="inherit"
                        sx={{height: '10px', fontSize: '20px'}}
                    >
                        <p>Awards</p>
                    </IconButton>
                </ListItem>
            </List>
            <List>
                <ListItem><h2>Address</h2></ListItem>
                <ListItem>
                    <IconButton
                        color="inherit"
                        sx={{height: '10px', fontSize: '15px'}}
                    >
                        <p>PUCIT Old Campus, Lahore, 540000</p>
                    </IconButton>
                </ListItem>
                <ListItem>
                    <IconButton
                        color="inherit"
                        sx={{height: '10px', fontSize: '15px'}}
                    >
                        <p>Phone: 03333333333</p>
                    </IconButton>
                </ListItem>
            </List>
            <List>
                <ListItem><h2>Email Us</h2></ListItem>
                <ListItem>                        
                    <FormControl sx={{width: '400px'}}>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Enter your email.</FormHelperText>
                    </FormControl>
                </ListItem>
                <ListItem>                        
                    <FormControl sx={{width: '400px'}}>
                        <InputLabel htmlFor="my-input">Message</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Enter your message.</FormHelperText>
                    </FormControl>
                </ListItem>
                <ListItem>                        
                    <Button variant="contained">Send</Button>
                </ListItem>
            </List>
        </Card>
    </>
  )
}

export default Footer