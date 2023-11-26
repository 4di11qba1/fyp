import { 
    FormControl,
    FormGroup,
    FormControlLabel, 
    FormHelperText, 
    Input, 
    InputLabel, 
    Card, 
    CardContent, 
    CardMedia, 
    Typography, 
    Button,
    Checkbox
} from '@mui/material'

function SignIn({ windowWidth }) {
  return (
    <>
        <Card sx={{display: 'flex', flexDirection: 'row', borderRadius: '15px', transition: 'all 1s'}}>

            { 
                (windowWidth > 750) ?
                    <>
                        <CardMedia
                            component="img"
                            sx={{ width: 250 }}
                            image="/img/sign in/ghost.jpeg"
                            alt="Call of Duty"
                        />
                    </>
                    : null
            }

            <CardContent sx={{
                gap: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '20px'
            }}>
                <div style={{
                    display: 'flex'
                }}>
                    <Button>
                        <CardMedia
                            component="img"
                            sx={{ width: 30 }}
                            image="/img/sign in/google.png"
                            alt="Google"
                        />
                    </Button>
                    <Button>
                        <CardMedia
                            component="img"
                            sx={{ width: 30 }}
                            image="/img/sign in/fb.png"
                            alt="Google"
                        />
                    </Button>
                    <Button>
                        <CardMedia
                            component="img"
                            sx={{ width: 30 }}
                            image="/img/sign in/xbox.png"
                            alt="Google"
                        />
                    </Button>
                    <Button>
                        <CardMedia
                            component="img"
                            sx={{ width: 30 }}
                            image="/img/sign in/nintendo.png"
                            alt="Google"
                        />
                    </Button>
                    <Button>
                        <CardMedia
                            component="img"
                            sx={{ width: 30 }}
                            image="/img/sign in/ps.png"
                            alt="Google"
                        />
                    </Button>
                </div>

                    <Typography component="div" variant="h6">
                        Sign In
                    </Typography>
                
                    <FormControl sx={{width: '400px'}}>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Enter your email.</FormHelperText>
                    </FormControl>

                    <FormControl sx={{width: '400px'}}>
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input id="my-input" type="password" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Never share your password with anyone.</FormHelperText>
                    </FormControl>

                    <FormGroup sx={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <FormControlLabel control={<Checkbox />} label="Remember Me" />
                        <Button>
                            Forgot your Password?
                        </Button>
                    </FormGroup>

                    <Button variant="contained" sx={{width: '400px'}}>Sign In</Button>
                    <Button sx={{width: '400px'}}>
                        Privacy Policy
                    </Button>
                    
                    <div style={{display: 'flex'}}>
                        <Typography sx={{display: 'flex', alignItems: 'center'}}>
                            Don't have an account?
                        </Typography>
                        <Button>
                            Sign Up
                        </Button>
                    </div>
                    
            </CardContent>

        </Card>
    </>
  )
}

export default SignIn