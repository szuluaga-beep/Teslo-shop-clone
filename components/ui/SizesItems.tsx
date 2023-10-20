import React, { FC } from 'react'
import { Box, Button } from '@mui/material'
import { ISizes } from '../../interfaces'

interface Props {
    sizeSelected?: ISizes;
    sizes: ISizes[]
}
export const SizesItems: FC<Props> = ({ sizeSelected, sizes }) => {
    return (
        <Box>
            {
                sizes.map((size) => (
                    <Button
                        color={sizeSelected === size ? "primary" : "info"}
                        key={size}>
                        {size}
                    </Button>
                ))
            }
        </Box>
    )
}
