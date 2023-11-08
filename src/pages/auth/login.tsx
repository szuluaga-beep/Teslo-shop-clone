import React from 'react'
import { AuthLayout } from '../../../components/layout'
import { Box, Button, Grid, TextField, Typography, Link as LinkMaterial } from '@mui/material'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { validations } from '../../../utils'

interface FormData {
    email: string;
    password: string;
}


const LoginPage = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<FormData>()

    const onLoginUser = async (data: FormData) => {
        console.log({ data })
    }
    return (
        <AuthLayout title='Ingresar'>
            <form onSubmit={handleSubmit(onLoginUser)} noValidate>

                <Box sx={{ width: '350px', padding: '10px 20px' }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography variant='h1' component={'h1'}>Iniciar sesión</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Correo"
                                type='email'
                                variant='filled'
                                {...register("email", {
                                    required: 'Este campo es requerido',
                                    validate: validations.isEmail
                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="contraseña"
                                type='password'
                                {...register("password", {
                                    required: 'Este campo es requerido',
                                    minLength: { value: 6, message: 'Minimo de 6 caracteres' }
                                })}
                                error={!!errors.password}
                                helperText={errors.password?.message}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type='submit' color='secondary' className='circular-btn' size='large' fullWidth>
                                Ingresar
                            </Button>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Link href='/auth/register' passHref legacyBehavior>
                                <LinkMaterial underline='always'>
                                    ¿No tienes cuenta?
                                </LinkMaterial>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>

            </form>
        </AuthLayout>
    )
}

export default LoginPage