import React from 'react'
import { AuthLayout } from '../../../components/layout'
import { Box, Button, Grid, TextField, Typography, Link as LinkMaterial } from '@mui/material'
import Link from 'next/link'

const RegisterPage = () => {
    return (
        <AuthLayout title='Registrarse'>
            <Box sx={{ width: '350px', padding: '10px 20px' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant='h1' component={'h1'}>
                            Registrarse
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Nombre completo"
                            variant='outlined'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Correo"
                            type='email'
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
                            Registrarse
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Link href='/auth/login' passHref legacyBehavior>
                            <LinkMaterial underline='always'>
                                ¿Ya tienes cuenta?
                            </LinkMaterial>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    )
}

export default RegisterPage