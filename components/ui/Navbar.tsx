import React from 'react'
import { AppBar, Toolbar, Typography, Link, Box, Button, IconButton, Badge } from '@mui/material'
import NavLink from 'next/link'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'


export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <NavLink legacyBehavior href="/" passHref>
                    <Link sx={{ alignItems: 'center', display: 'flex' }}>
                        <Typography variant='h6'>
                            Inicio |
                        </Typography>
                        <Typography sx={{ ml: 0.5 }}>
                            Shop
                        </Typography>
                    </Link>
                </NavLink>
            </Toolbar>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <NavLink legacyBehavior passHref href='/category/men'>
                    <Link>
                        <Button>
                            Hombres
                        </Button>
                    </Link>

                </NavLink>
                <NavLink legacyBehavior passHref href='/category/women'>
                    <Link>
                        <Button>
                            Mujeres
                        </Button>
                    </Link>

                </NavLink>
                <NavLink legacyBehavior passHref href='/category/kids'>
                    <Link>
                        <Button>
                            Niños
                        </Button>
                    </Link>
                </NavLink>
            </Box>
            <IconButton>
                <SearchOutlined />
            </IconButton>
            <NavLink passHref href="/cart">
                <Badge badgeContent={2} color='secondary'>
                    <ShoppingCartOutlined />
                </Badge>

            </NavLink>
            <Button>
                Menú
            </Button>
        </AppBar>
    )
}
