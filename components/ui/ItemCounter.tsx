import React, { FC, useState } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { RemoveCircleOutline, AddCircleOutline } from '@mui/icons-material'
interface Props {

}
export const ItemCounter: FC<Props> = () => {
    const [counter, setCounter] = useState(0)


    const addCounter = () => {
        setCounter((prev) => prev + 1)
    }
    const removeCounter = () => {
        setCounter((prev) => prev - 1)
    }
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
                disabled={counter === 0}
                onClick={() => removeCounter()}>
                <RemoveCircleOutline />
            </IconButton>
            <Typography>{counter}</Typography>
            <IconButton onClick={() => addCounter()}>
                <AddCircleOutline />
            </IconButton>
        </Box>
    )
}
