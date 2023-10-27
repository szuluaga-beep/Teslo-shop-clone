import { NextPage } from 'next'
import { Typography, Grid, Card, CardActionArea, CardMedia, CircularProgress } from '@mui/material'
import { ShopLayout } from '../../components/layout'
import { initialData } from '../../database/products'
import { ProductList } from '../../components/products'
import { useProducts } from '../../hooks'



const HomePage: NextPage = () => {

  const { products, isLoading } = useProducts("products")


  // console.log(data)
  return (
    <ShopLayout title='Teslo-shop' pageDescription='Encuentra los mejores productos de Teslo Aqio'>
      <Typography variant="h1" component='h1'>Tienda</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
      {
        isLoading
          ? <CircularProgress />
          : <ProductList
            products={products}
          />

      }
    </ShopLayout>
  )
}

export default HomePage