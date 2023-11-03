import React, { useContext, useState } from 'react'
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Badge, Input, InputAdornment } from '@mui/material'

import { ClearOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { UiContext } from '../../context'


export const Navbar = () => {
    const { asPath, push } = useRouter()

    const { toogleSiMenu } = useContext(UiContext)

    const [searchTerm, setSearchTerm] = useState('')
    const [isSearchVisible, setIsSearchVisible] = useState(false)

    const onSearchTerm = () => {
        // toogleSiMenu()
        if (searchTerm.trim().length === 0) return
        push(`/search/${searchTerm}`)
        setSearchTerm('')
    }



    return (
        <AppBar>
            <Toolbar>
                <Link legacyBehavior href="/">
                    <a style={{ textDecoration: 'none', color: '#000',
                     fontWeight: 'bold', alignItems: 'center', display: 'flex' }}>
                        <Typography variant='h6'>
                            Inicio |
                        </Typography>
                        <Typography sx={{ ml: 0.5 }}>
                            Shop
                        </Typography>
                    </a>
                </Link>
            </Toolbar>

            <Box
                sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' } }}
                className='fadeIn'
            >
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

            {
                isSearchVisible
                    ? (
                        <Input
                            className='fadeIn'
                            autoFocus
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={(e) => e.code === 'Enter' ? onSearchTerm() : null}
                            type='text'
                            placeholder="Buscar..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setIsSearchVisible(false)}
                                    >
                                        <ClearOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    )
                    : (
                        <IconButton 
                        sx={{ display: { xs: 'none', sm: 'flex' } }}
                        onClick={() => setIsSearchVisible(true)}>
                            <SearchOutlined />
                        </IconButton>
                    )
            }
            <IconButton
                sx={{ display: { xs: 'flex', sm: 'none' } }}
                onClick={toogleSiMenu}>
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
