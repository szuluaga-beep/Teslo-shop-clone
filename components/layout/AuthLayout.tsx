import React, { FC, ReactNode } from 'react'
import Head from 'next/head'
import { Box, Container } from '@mui/material'

interface Props {
    children: ReactNode,
    title: string
}
export const AuthLayout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <Box sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {children}
            </Box>

        </>
    )
}
