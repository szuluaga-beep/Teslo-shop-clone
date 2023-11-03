import React from 'react'
import { Typography } from '@mui/material'

import { ShopLayout } from '../../../components/layout'
import { useProducts } from '../../../hooks'
import { FullScreenLoading } from '../../../components/ui'
import { ProductList } from '../../../components/products'
import { GetServerSideProps, NextPage } from 'next'
import { dbProduct } from '../../../database'
import { IProduct } from '../../../interfaces'

interface Props {
    products: IProduct[]
}
const SearchPage: NextPage<Props> = ({ products }) => {

    // const { products, isLoading } = useProducts(`/search/shirt`)
    return (
        <ShopLayout title='Teslo shop - search' pageDescription='Página de busqueda en teslo shop'>
            <Typography variant='h1' component='h1'>Buscar producto</Typography>
            <Typography variant='h2' sx={{ mb: 1 }}>ABC -123</Typography>

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
    // console.log(products)
    //TODO: Retornar otros productos
    return {
        props: {
            products
        }
    }
}

export default SearchPage