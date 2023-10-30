import React, { useContext } from 'react'
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Badge } from '@mui/material'

import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { UiContext } from '../../context'


export const Navbar = () => {
    const { asPath } = useRouter()

    const { toogleSiMenu } = useContext(UiContext)

    return (
        <AppBar>
            <Toolbar>
                <Link legacyBehavior href="/">
                    <a style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold', alignItems: 'center', display: 'flex' }}>
                        <Typography variant='h6'>
                            Inicio |
                        </Typography>
                        <Typography sx={{ ml: 0.5 }}>
                            Shop
                        </Typography>
                    </a>
                </Link>
            </Toolbar>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Link legacyBehavior passHref href='/category/men'>
                    <a>
                        <Button color={asPath === '/category/men' ? 'primary' : 'info'}>
                            Hombres
                        </Button>
                    </a>

                </Link>
                <Link legacyBehavior passHref href='/category/women'>
                    <a>
                        <Button color={asPath === '/category/women' ? 'primary' : 'info'}>
                            Mujeres
                        </Button>
                    </a>

                </Link>
                <Link legacyBehavior passHref href='/category/kid'>
                    <a>
                        <Button color={asPath === '/category/kid' ? 'primary' : 'info'}>
                            Niños
                        </Button>
                    </a>
                </Link>
            </Box>
            <IconButton>
                <SearchOutlined />
            </IconButton>
            <Link passHref href="/cart">
                <Badge badgeContent={2} color='secondary'>
                    <ShoppingCartOutlined />
                </Badge>

            </Link>
            <Button onClick={toogleSiMenu}>
                Menú
            </Button>
        </AppBar>
    )
}
