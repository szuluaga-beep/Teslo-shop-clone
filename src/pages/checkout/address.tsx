import React from 'react'
import { ShopLayout } from '../../../components/layout'
import { Box, Button, Grid, MenuItem, TextField, Typography } from '@mui/material'

const AdressPage = () => {
    return (
        <ShopLayout title='Dirección' pageDescription='Confirmar la dirección de destino'>
            <Typography variant='h1' component='h1'>Dirección</Typography>

            <Grid spacing={2} container sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth variant='filled' label='Nombre' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth variant='filled' label='Apellido' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth variant='filled' label='Dirección' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth variant='filled' label='Dirección 2' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth variant='filled' label='Ciudad' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth variant='filled' label='Código postal' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField select value={1} fullWidth variant='filled' label='País'>
                        <MenuItem value={1}>Colombia</MenuItem>
                        <MenuItem value={2}>Perú</MenuItem>
                        <MenuItem value={3}>Venezuela</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth variant='filled' label='Telefóno' />
                </Grid>

            </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse', mt: 2 }}>
                <Button color='secondary' className='circular-btn' size='large'>Guardar y continuar</Button>
            </Box>

        </ShopLayout>
    )
}

export default AdressPage