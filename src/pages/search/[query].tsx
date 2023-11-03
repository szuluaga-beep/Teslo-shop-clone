import React from 'react'
import { Typography } from '@mui/material'

import { ShopLayout } from '../../../components/layout'
import { useProducts } from '../../../hooks'
import { FullScreenLoading } from '../../../components/ui'
import { ProductList } from '../../../components/products'

const SearchPage = () => {

    const { products, isLoading } = useProducts(`/search/shirt`)
    return (
        <ShopLayout title='Teslo shop - search' pageDescription='Página de busqueda en teslo shop'>
            <Typography variant='h1' component='h1'>Buscar producto</Typography>
            <Typography variant='h2' sx={{ mb: 1 }}>ABC -123</Typography>
            {
                isLoading
                    ? <FullScreenLoading />
                    : <ProductList products={products} />
            }
        </ShopLayout>
    )
}

export default SearchPage