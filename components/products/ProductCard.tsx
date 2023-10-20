import React, { FC, useState, useMemo } from 'react'
import { Card, CardActionArea, CardMedia, Grid, Box, Typography } from '@mui/material'
import { IProducts } from '../../interfaces'

interface Props {
  product: IProducts
}
export const ProductCard: FC<Props> = ({ product }) => {

  const [isHovered, setIsHovered] = useState(false)

  const productImage = useMemo(() => {
    return isHovered
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`
  }, [isHovered, product.images])

  return (
    <Grid item xs={6} sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <CardActionArea>
          <CardMedia
            component={'img'}
            image={productImage}
            className='fadeIn'
            alt={product.title}
            // onLoad={(e) => console.log("cargo")}
          />
        </CardActionArea>
      </Card>
      <Box sx={{ mt: 1 }} className='fadeIn'>
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={700}>
          {`$${product.price}`}
        </Typography>

      </Box>
    </Grid>
  )
}
