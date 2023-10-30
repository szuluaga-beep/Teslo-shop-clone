import React from 'react'
import { Typography } from '@mui/material'
import { ShopLayout } from '../../../components/layout'
import { useProducts } from '../../../hooks'
import { FullScreenLoading } from '../../../components/ui'
import { ProductList } from '../../../components/products'

const WomenProductsPage = () => {
    const { products, isLoading } = useProducts("products?gender=women")

    return (
        <ShopLayout title='Women Products' pageDescription='Encuentra los mejores productos de mujeres Aquí'>
            <Typography variant='h1' component={'h1'}>Women</Typography>
            <Typography variant="h2" sx={{ mb: 1 }}>
                Todos los productos de mujeres
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

export default WomenProductsPage