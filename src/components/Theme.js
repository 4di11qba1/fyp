import { createTheme, ThemeProvider } from '@mui/material';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff',
            text: '#000000',
        },
        background: {
            default: '#d6d6d6',
            paper: '#ffffff',
        }
    },
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                    backgroundColor: '#d6d6d6',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: 'none'
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: 'black', // Set the default background color
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'white',
                        color: 'black'
                    }
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    color: 'black'
                },
            },
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#000000',
            text: '#ffffff'
        },
        background: {
            default: '#2e2e2e',
            paper: '#000000'
        }
    },
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                    backgroundColor: '#050505',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
            root: {
                boxShadow: 'none'
            },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff', // Set the default background color
                    color: 'black',
                    '&:hover': {
                    backgroundColor: 'black',
                    color: 'white'
                    }
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    color: 'white'
                },
            },
        },
    },
});

export const MyThemeProvider = ({ children, darkMode }) => {
    const theme = darkMode ? darkTheme : lightTheme;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};