import React from 'react'
import { Grid, Typography, Box, Button, Chip } from '@mui/material'
import { ShopLayout } from '../../../components/layout'
import { initialData } from '../../../database/products'
import { ProductSlideShow } from '../../../components/products'
import { FullScreenLoading, ItemCounter, SizesItems } from '../../../components/ui'
import { useRouter } from 'next/router'
import { useProducts } from '../../../hooks'
import { IProduct } from '../../../interfaces'
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { dbProduct } from '../../../database'

interface Props {
    product: IProduct
}

const ProductPage: NextPage<Props> = ({ product }) => {
    // const router = useRouter()

    // const { products: product, isLoading } = useProducts<IProduct>(`/products/${router.query.slug}`)

    // if (isLoading) {
    //     return(
    //         <FullScreenLoading/>
    //     )
    // }

    // if (!product) {
    //     return(
    //         <h1>Producto no existe</h1>
    //     )
    // }
    return (
        <ShopLayout title={product.title} pageDescription={product.description}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <ProductSlideShow images={product.images} />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Typography variant='h1' component={'h1'}>
                        {product.title}
                    </Typography>
                    <Typography variant='subtitle1' component={'h2'}>
                        {`$${product.price}`}
                    </Typography>
                    <Box sx={{ my: 2 }}>
                        <Typography variant='subtitle2'>
                            Cantidad
                        </Typography>
                        <ItemCounter />
                        <SizesItems
                            // sizeSelected={product.sizes[0]}
                            sizes={product.sizes}
                        />

                    </Box>
                    <Button fullWidth color="secondary" className='circular-btn'>
                        Agregar al carrito
                    </Button>
                    {/* <Chip sx={{ width: '100%' }} label="No hay disponibles" color='error' variant='outlined' /> */}
                    <Box sx={{ mt: 3 }}>
                        <Typography variant='subtitle1'>Descripción</Typography>
                        <Typography variant='subtitle2'>
                            {product.description}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

// getStaticPaths
// getStaticProps

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//     const { slug = '' } = params as { slug: string }

//     const product = await dbProduct.getProductBySlug(slug)

//     if (!product) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false
//             }
//         }
//     }
//     return {
//         props: {
//             product
//         }
//     }
// }
export const getStaticPaths: GetStaticPaths = async () => {
    const productsSlugs = await dbProduct.getAllProductSlugs()
    // console.log(productsSlugs)

    return {
        // paths:[],
        // fallback:'blocking'
        paths: productsSlugs.map(({ slug }) => ({
            params: {
                slug
            }
        })),
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // console.log(params)

    const { slug = '' } = params as { slug: string }
    // console.log(slug)
    const product = await dbProduct.getProductBySlug(slug)


    if (!product) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: {
            product
        },
        revalidate: 60 * 60 * 24
    }
}


export default ProductPage