import { NextPage } from 'next'
import { Typography } from '@mui/material'
import { ShopLayout } from '../../components/layout'
import { ProductList } from '../../components/products'
import { useProducts } from '../../hooks'
import { FullScreenLoading } from '../../components/ui'



const HomePage: NextPage = () => {

  const { products, isLoading } = useProducts("products")


  // console.log(data)
  return (
    <ShopLayout title='Teslo-shop' pageDescription='Encuentra los mejores productos de Teslo Aquí'>
      <Typography variant="h1" component='h1'>Tienda</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList
            products={products}
          />

      }
    </ShopLayout>
  )
}

export default HomePage