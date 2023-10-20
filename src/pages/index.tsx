import React from 'react'
import { Typography, Grid, Card, CardActionArea, CardMedia } from '@mui/material'
import { ShopLayout } from '../../components/layout'
import { initialData } from '../../database/products'

const index = () => {
  return (
    <ShopLayout title='Teslo-shop' pageDescription='Encuentra los mejores productos de Teslo Aqio'>
      <Typography variant="h1" component='h1'>Tienda</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      <Grid container spacing={4}>
        {
          initialData.products.map(product => (
            <Grid item xs={6} sm={4} key={product.slug}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component={'img'}
                    image={`products/${product.images[0]}`}
                    alt={product.title}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }

      </Grid>
    </ShopLayout>
  )
}

export default index