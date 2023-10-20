import { NextPage } from 'next'
import { Typography, Grid, Card, CardActionArea, CardMedia } from '@mui/material'
import { ShopLayout } from '../../components/layout'
import { initialData } from '../../database/products'
import { ProductList } from '../../components/products'

const HomePage: NextPage = () => {
  return (
    <ShopLayout title='Teslo-shop' pageDescription='Encuentra los mejores productos de Teslo Aqio'>
      <Typography variant="h1" component='h1'>Tienda</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      <ProductList
        products={initialData.products as any}
      />
    </ShopLayout>
  )
}

export default HomePage