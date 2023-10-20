import { Box, Typography } from '@mui/material'
import { ShopLayout } from '../../components/layout'

const Custom404 = () => {
    return (
        <ShopLayout title='Page not found' pageDescription='No hay nada que mostrar aquí'>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 200px)' }} >
                <Typography variant='h1' component={'h1'} fontSize={100} fontWeight={200}>
                    404 |
                </Typography>
                <Typography marginLeft={2}>
                    No encontramos ninguna página quí
                </Typography>
            </Box>
        </ShopLayout>
    )
}

export default Custom404