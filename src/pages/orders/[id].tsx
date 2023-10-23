import React from 'react'
import { ShopLayout } from '../../../components/layout'
import { Box, Card, CardContent, Divider, Grid, Typography, Link as LinkMaterial, Chip } from '@mui/material'
import { CartList, OrderSummary } from '../../../components/cart'
import Link from 'next/link'
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'

const OrderPage = () => {
    return (
        <ShopLayout title='Resumen de la orden 1231213' pageDescription='Resumen de la orden'>
            <Typography variant='h1' component='h1'>Resumen de la orden ABC123</Typography>
            <Chip
                label='Pendiente de pago'
                sx={{ my: 2 }}
                color='error'
                variant='outlined'
                icon={<CreditCardOffOutlined />}
            />
            <Chip
                label='Orden ya fue pagada'
                sx={{ my: 2 }}
                color='success'
                variant='outlined'
                icon={<CreditScoreOutlined />}
            />
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
                            {/* TODO: */}
                            <h1>Pago</h1>
                            <Chip
                                label='Orden ya fue pagada'
                                sx={{ my: 2 }}
                                color='success'
                                variant='outlined'
                                icon={<CreditScoreOutlined />}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default OrderPage