import React, { useContext, useState } from 'react'
import { AuthLayout } from '../../../components/layout'
import { Box, Button, Grid, TextField, Typography, Link as LinkMaterial, Chip } from '@mui/material'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { tesloApi } from '../../../api'
import { validations } from '../../../utils'
import { ErrorOutline } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { AuthContext } from '../../../context'

interface FormData {
    name: string;
    email: string;
    password: string;
}

const RegisterPage = () => {

    const router = useRouter()
    const { registerUser } = useContext(AuthContext)
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErroMesage] = useState('')

    const { handleSubmit, register, formState: { errors } } = useForm<FormData>()

    const onRegister = async ({ name, email, password }: FormData) => {
        setShowError(false)
        // console.log(dataRegister)

        const { hasError, message } = await registerUser(name, email, password)

        if (hasError) {
            setShowError(true)
            setErroMesage(message || '')
            setTimeout(() => {
                setShowError(false)
            }, 3000);

            return
        }
        const destination = router.query.p?.toString() || '/';
        router.replace(destination);
    }
    return (
        <AuthLayout title='Registrarse'>
            <form onSubmit={handleSubmit(onRegister)} noValidate>

                <Box sx={{ width: '350px', padding: '10px 20px' }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography variant='h1' component={'h1'}>
                                Registrarse
                            </Typography>
                            <Chip
                                label='No se reconoce el usuario o la contraseña'
                                icon={<ErrorOutline />}
                                color='error'
                                className='fadeIn'
                                sx={{ display: showError ? 'flex' : 'none' }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Nombre completo"
                                variant='outlined'
                                {...register("name", {
                                    required: 'Este campo es requerido',
                                    minLength: { value: 2, message: 'Debe se der de almenos dos caracteres' }
                                })}
                                error={!!errors?.name}
                                helperText={errors.name?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Correo"
                                type='email'
                                {...register("email", {
                                    required: "Este campo es requerido",
                                    validate: validations.isEmail
                                })}
                                error={!!errors.email}
                                helperText={errors?.email?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="contraseña"
                                type='password'
                                {...register("password", {
                                    required: "Este campo es requerido",
                                    minLength: { value: 6, message: 'Debe de ser de al menos 6 caracteres' }
                                })}
                                error={!!errors.password}
                                helperText={errors?.password?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type='submit' color='secondary' className='circular-btn' size='large' fullWidth>
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
            </form>
        </AuthLayout>
    )
}

export default RegisterPage