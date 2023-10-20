import React from 'react'
import { Grid, Typography, Box, Button, Chip } from '@mui/material'
import { ShopLayout } from '../../../components/layout'
import { initialData } from '../../../database/products'
import { ProductSlideShow } from '../../../components/products'
import { ItemCounter } from '../../../components/ui'

const product = initialData.products[0]

const ProductPage = () => {
    return (
        <ShopLayout title={product.title} pageDescription={product.description}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <ProductSlideShow images={product.images}/>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Typography variant='h1' component={'h1'}>
                        {product.title}
                    </Typography>
                    <Typography variant='subtitle1' component={'h2'}>
                        {`$${product.price}`}
                    </Typography>
                    <Box sx={{ my: 2 }}>
                        <Typography variant='subtitle2'>
                            Cantidad
                        </Typography>
                        <ItemCounter/>

                    </Box>
                    <Button fullWidth color="secondary" className='circular-btn'>
                        Agregar al carrito
                    </Button>
                    {/* <Chip sx={{ width: '100%' }} label="No hay disponibles" color='error' variant='outlined' /> */}
                    <Box sx={{ mt: 3 }}>
                        <Typography variant='subtitle1'>Descripción</Typography>
                        <Typography variant='subtitle2'>
                            {product.description}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default ProductPage