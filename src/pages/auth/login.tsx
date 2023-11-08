import React, { useState } from 'react'
import { AuthLayout } from '../../../components/layout'
import { Box, Button, Grid, TextField, Typography, Link as LinkMaterial, Chip } from '@mui/material'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import axios from "axios";
import { validations } from '../../../utils'
import { tesloApi } from '../../../api'
import { ErrorOutline } from '@mui/icons-material'

interface FormData {
    email: string;
    password: string;
}


const LoginPage = () => {

    const [showError, setShowError] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm<FormData>()

    const onLoginUser = async ({ email, password }: FormData) => {
        // console.log({ data })
        setShowError(false)

        try {
            const { data } = await tesloApi.post('/user/login', { email, password })

            // console.log(data)

            const { token, user } = data
        } catch (error) {
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 3000);

            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
        //TODO: Navegar a la pantalla que el usuario estaba

    }
    return (
        <AuthLayout title='Ingresar'>
            <form onSubmit={handleSubmit(onLoginUser)} noValidate>

                <Box sx={{ width: '350px', padding: '10px 20px' }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography variant='h1' component={'h1'}>Iniciar sesión</Typography>

                            <Chip
                                label='No reconocemos ese usuario/contraseña'
                                icon={<ErrorOutline />}
                                color='error'
                                className='fadeIn'
                                sx={{ display: showError ? 'flex' : 'none' }}
                            />

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