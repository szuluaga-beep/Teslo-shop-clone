import React from 'react'
import { ShopLayout } from '../../../components/layout'
import { Typography } from '@mui/material'
import { useProducts } from '../../../hooks'
import { FullScreenLoading } from '../../../components/ui'
import { ProductList } from '../../../components/products'

const KidProductsPage = () => {
    const { products, isLoading } = useProducts("products?gender=kid")
    console.log(products)
    return (
        <ShopLayout title='Kid Products' pageDescription='Encuentra los mejores productos de niños Aquí'>
            <Typography variant='h1' component={'h1'}>Kid</Typography>

            <Typography variant="h2" sx={{ mb: 1 }}>
                Todos los productos de niños
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

export default KidProductsPage