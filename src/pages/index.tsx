import { NextPage } from 'next'
import { Typography, Grid, Card, CardActionArea, CardMedia, CircularProgress } from '@mui/material'
import { ShopLayout } from '../../components/layout'
import { initialData } from '../../database/products'
import { ProductList } from '../../components/products'

import useSWR from 'swr'

const fetcher = (...args: [key: string]) => fetch(...args).then(res => res.json())

const HomePage: NextPage = () => {
  const { data, error, isLoading } = useSWR('/api/products', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <CircularProgress />


  // console.log(data)
  return (
    <ShopLayout title='Teslo-shop' pageDescription='Encuentra los mejores productos de Teslo Aqio'>
      <Typography variant="h1" component='h1'>Tienda</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      <ProductList
        products={data}
      />
    </ShopLayout>
  )
}

export default HomePage