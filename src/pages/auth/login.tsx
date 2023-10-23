import React from 'react'
import { AuthLayout } from '../../../components/layout'
import { Box, Button, Grid, TextField, Typography, Link as LinkMaterial } from '@mui/material'
import Link from 'next/link'

const LoginPage = () => {
    return (
        <AuthLayout title='Ingresar'>
            <Box sx={{ width: '350px', padding: '10px 20px' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant='h1' component={'h1'}>Iniciar sesión</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="correo"
                            variant='filled'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="contraseña"
                            type='password'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button color='secondary' className='circular-btn' size='large' fullWidth>
                            Ingresar
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{display:'flex', justifyContent:'end'}}>
                        <Link href='' passHref legacyBehavior>
                            <LinkMaterial underline='always'>
                                ¿No tienes cuenta?
                            </LinkMaterial>
                        </Link>
                    </Grid>
                </Grid>
            </Box>

        </AuthLayout>
    )
}

export default LoginPage