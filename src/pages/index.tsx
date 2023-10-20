import React from 'react'
import { Typography } from '@mui/material'
import { ShopLayout } from '../../components/layout'

const index = () => {
  return (
    <ShopLayout title='Teslo-shop' pageDescription='Encuentra los mejores productos de Teslo Aqio'>
      <Typography variant="h1" component='h1'>Tienda</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
    </ShopLayout>
  )
}

export default index