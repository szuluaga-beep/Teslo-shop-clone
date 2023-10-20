import React from 'react'
import { ShopLayout } from '../../../components/layout'
import { Box, Typography, Link as LinkMaterial } from '@mui/material'
import { RemoveShoppingCart } from '@mui/icons-material'
import Link from 'next/link'

const EmptyPage = () => {
    return (
        <ShopLayout title='Carrito vacio' pageDescription='No hay artículos en el carrito' >

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 200px)' }} >
                <RemoveShoppingCart sx={{ fontSize: 100 }} />
                <Box>
                    <Typography>Su carrito está vacío</Typography>
                    <Link href={'/'} legacyBehavior passHref>
                        <LinkMaterial>
                            <Typography color={'secondary'}>

                                Regresar
                            </Typography>
                        </LinkMaterial>
                    </Link>
                </Box>
            </Box>
        </ShopLayout>
    )
}

export default EmptyPage