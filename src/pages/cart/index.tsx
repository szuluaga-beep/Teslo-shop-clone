import React from 'react'
import { ShopLayout } from '../../../components/layout'
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import { CartList } from '../../../components/cart'

const CartPage = () => {
    return (
        <ShopLayout title='Carrito' pageDescription='En esta página encontrás los artículos del carrito'>
            <Typography variant='h1' component='h1'>Carrito</Typography>
            <Grid container sx={{ mt: 2 }}>
                <Grid xs={12} sm={7}>
                    <CartList />
                </Grid>
                <Grid xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>Orden</Typography>
                            <Divider sx={{ my: 2 }} />
                            {/* OdenSummary */}
                            <Box sx={{ mt: 3 }}>
                                <Button color='secondary' className='circular-btn' fullWidth>Checkout</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default CartPage