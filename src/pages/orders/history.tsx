import React from 'react'
import Link from 'next/link'
import { Typography, Grid, Chip, Link as LinkMaterial} from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

import { ShopLayout } from '../../../components/layout'

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 100 },
    { field: 'fullName', headerName: "Nombre completo", width: 300 },
    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra la información si está pagada o no',
        renderCell(params: GridRenderCellParams<any, boolean>) {
            return (
                params.row.paid
                    ? <Chip color='success' label='Pagada' variant='outlined' />
                    : <Chip color='error' label='No pagada' variant='outlined' />
            )
        },
        width: 300
    },
    {
        field: 'Orden',
        headerName: 'Ver orden',
        sortable:false,
        renderCell(params: GridRenderCellParams<any, boolean>) {
            return (
                <Link href={`/orders/${params.row.id}`} passHref legacyBehavior>
                    <LinkMaterial underline='always'>
                    Ver orden
                    </LinkMaterial>
                </Link>
            )
        },
        width: 300
    }
]
const rows = [
    { id: 1, fullName: "Juan Perez", paid: true },
    { id: 2, fullName: "Maria Rodriguez", paid: false },
    { id: 3, fullName: "Jose Diaz", paid: false },
]
const HistoryPage = () => {
    return (
        <ShopLayout
            title='Historial'
            pageDescription=''

        >
            <Typography variant='h1' component='h1'>Historial de ordenes</Typography>

            <Grid container>
                <Grid item sx={{ height: 500, width: '100%' }}>
                    <DataGrid
                        columns={columns}
                        rows={rows}
                        pagination={true}
                        initialState={{
                            pagination: { paginationModel: { pageSize: 5 } },
                        }}
                        pageSizeOptions={[5, 10, 20]}
                    />

                </Grid>
            </Grid>


        </ShopLayout>
    )
}

export default HistoryPage