import React from 'react'
import { ShopLayout } from '../../../components/layout'
import { Box, Button, Card, CardContent, Divider, Grid, Typography, Link as LinkMaterial } from '@mui/material'
import { CartList, OrderSummary } from '../../../components/cart'
import Link from 'next/link'

const SummaryPage = () => {
    return (
        <ShopLayout title='Resumen' pageDescription='Resumen de la orden'>
            <Typography variant='h1' component='h1'>Resumen de la orden</Typography>
            <Grid container sx={{ mt: 2 }}>
                <Grid xs={12} sm={7}>
                    <CartList />
                </Grid>
                <Grid xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>Resumen (3 Productos)</Typography>
                            <Divider sx={{ my: 2 }} />
                            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                <Link href="/checkout/address" legacyBehavior passHref>
                                    <LinkMaterial underline='always'>
                                        Editar
                                    </LinkMaterial>
                                </Link>
                            </Box>
                            <Typography variant='subtitle1'>Dirección de entrega</Typography>
                            <Typography>Steven Zuluaga Cortes</Typography>
                            <Typography>Calle 45 # 107-45</Typography>
                            <Typography>Colombia</Typography>
                            <Divider sx={{ my: 2 }} />
                            <OrderSummary />
                            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                <Link href="/cart" legacyBehavior passHref>
                                    <LinkMaterial underline='always'>
                                        Editar
                                    </LinkMaterial>
                                </Link>
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <Button color='secondary' className='circular-btn' fullWidth>Confirmar orden</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default SummaryPage