import React from 'react'
import { Typography } from '@mui/material'
import { ShopLayout } from '../../../components/layout'
import { useProducts } from '../../../hooks'
import { FullScreenLoading } from '../../../components/ui'
import { ProductList } from '../../../components/products'

const MenProductsPage = () => {
    const { products, isLoading } = useProducts("products?gender=men")

    return (
        <ShopLayout title='Men Products' pageDescription='Encuentra los mejores productos de hombres Aquí'>
            <Typography variant='h1' component={'h1'}>Men</Typography>
            <Typography variant="h2" sx={{ mb: 1 }}>
                Todos los productos de hombres
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

export default MenProductsPage