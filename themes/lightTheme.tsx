import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1E1E1E'
        },
        secondary: {
            main: '#3A64D8'
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none'
            },

        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                position: 'fixed'
            },
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    height: 60,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent:'space-around'
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 30,
                    fontWeight: 600
                },
                h2: {
                    fontSize: 20,
                    fontWeight: 400
                },
                subtitle1: {
                    fontSize: 18,
                    fontWeight: 600
                }
            }
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'small',
                disableElevation: true
            },
            styleOverrides: {
                root: {
                    backgroundColor:'white',
                    color:'#000',
                    textTransform: 'none',
                    boxShadow: 'none',
                    fontWeight:'bold',
                    borderRadius: 10,
                    ":hover": {
                        backgroundColor: 'rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease-in-out'
                    }
                }
            }
        },
        MuiCard: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
                    borderRadius: '10px',
                }
            }
        }
    }
})