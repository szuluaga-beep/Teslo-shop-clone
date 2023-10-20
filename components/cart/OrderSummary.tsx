import { Grid, Typography } from "@mui/material"

export const OrderSummary = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Typography>No, Productos</Typography>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Typography>3</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>Subtotal</Typography>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Typography>{`$${300.123}`}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>Impuesto (15 %)</Typography>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Typography>{`$${12.5}`}</Typography>
            </Grid>
            <Grid item xs={6} marginTop={2}>
                <Typography variant="subtitle1">Total</Typography>
            </Grid>
            <Grid item xs={6} marginTop={2} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Typography variant="subtitle1">{`$${312.5}`}</Typography>
            </Grid>
        </Grid>
    )
}
