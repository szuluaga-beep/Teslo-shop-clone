import { Grid, Typography, Link as LinkMaterial, CardActionArea, CardMedia, Box, Button } from "@mui/material"
import { initialData } from "../../database/products"
import Link from "next/link"
import { ItemCounter } from "../ui"

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]
export const CartList = () => {
    return (
        <>
            {
                productsInCart.map(product => (
                    <Grid container key={product.slug} spacing={2} sx={{ mb: 2 }}>
                        <Grid xs={3}>
                            {/* TODO: Llevar a la página del producto */}
                            <Link href='/products/slug' legacyBehavior passHref>
                                <LinkMaterial>
                                    <CardActionArea>
                                        <CardMedia
                                            component='img'
                                            image={`products/${product.images[0]}`}
                                            sx={{ borderRadius: '5px' }}
                                        />
                                    </CardActionArea>
                                </LinkMaterial>
                            </Link>

                        </Grid>
                        <Grid xs={7}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="body1">{product.title}</Typography>
                                <Typography variant="body1">Talla: <strong>M</strong></Typography>
                                {/* Condicional */}
                                <ItemCounter />
                            </Box>
                        </Grid>
                        <Grid xs={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="subtitle1">{`$${product.price}`}</Typography>
                            {/* Editable */}
                            <Button variant="text" color="secondary">
                                Remover
                            </Button>
                        </Grid>
                    </Grid>

                ))
            }
        </>
    )
}
