import React from 'react'
import { Box, Typography } from '@mui/material'

import { ShopLayout } from '../../../components/layout'
import { useProducts } from '../../../hooks'
import { FullScreenLoading } from '../../../components/ui'
import { ProductList } from '../../../components/products'
import { GetServerSideProps, NextPage } from 'next'
import { dbProduct } from '../../../database'
import { IProduct } from '../../../interfaces'

interface Props {
    products: IProduct[];
    foundProducts: boolean;
    query: string
}
const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {

    // const { products, isLoading } = useProducts(`/search/shirt`)
    return (
        <ShopLayout title='Teslo shop - search' pageDescription='Página de busqueda en teslo shop'>
            <Typography variant='h1' component='h1'>Buscar producto</Typography>

            {
                foundProducts
                    ? <Typography variant='h2' sx={{ mb: 1 }} textTransform={'capitalize'}>Término: {query}</Typography>
                    : (
                        <Box display={'flex'}>
                            <Typography variant='h2' sx={{ mb: 1 }}>No encontramos ningún producto</Typography>
                            <Typography variant='h2' sx={{ ml: 1 }} color='secondary' textTransform={'capitalize'}>{query}</Typography>
                        </Box>
                    )
            }
            <ProductList products={products} />
        </ShopLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { query = '' } = params as { query: string }
    // console.log(query)
    if (query.length === 0) {
        return {
            redirect: {
                destination: '/',
                permanent: true
            }
        }
    }
    let products = await dbProduct.getProductsByTerm(query)

    const foundProducts = products.length > 0

    if (!foundProducts) {
        products = await dbProduct.getAllProducts()
    }
    
    return {
        props: {
            products,
            foundProducts,
            query
        }
    }
}

export default SearchPage