import React, { FC, useState, useMemo } from 'react'
import { Card, CardActionArea, CardMedia, Grid, Box, Typography } from '@mui/material'
import { IProduct } from '../../interfaces'
import Link from 'next/link'

interface Props {
  product: IProduct
}
export const ProductCard: FC<Props> = ({ product }) => {

  const [isHovered, setIsHovered] = useState(false)
  const [isImageLoadeded, setIsImageLoaded] = useState(false)

  const productImage = useMemo(() => {
    return isHovered
      ? `/products/${product.images[1]}`
      : `/products/${product.images[0]}`
  }, [isHovered, product.images])

  return (
    <Grid item xs={6} sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <Link href={`/products/${product.slug}`} passHref legacyBehavior prefetch={false}>
          <CardActionArea>
            <CardMedia
              component={'img'}
              image={productImage}
              className='fadeIn'
              alt={product.title}
              onLoad={(e) => setIsImageLoaded(true)}
            />
          </CardActionArea>
        </Link>
      </Card>
      <Box sx={{ mt: 1 }} className='fadeIn'>
        <Typography fontWeight={700} sx={{display:isImageLoadeded?'block':'none'}}>{product.title}</Typography>
        <Typography fontWeight={700}>
          {`$${product.price}`}
        </Typography>

      </Box>
    </Grid>
  )
}
