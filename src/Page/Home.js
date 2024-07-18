import React from 'react'
import { Nav } from '../Component'
import { createTheme, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@mui/material'

function Home() {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (
        <div>
            <Nav />
            <Grid container>
                {/* <img src='' alt='Discriptive image' /> */}
            </Grid>
            <Grid container textAlign='center'>
                <Grid item xs={12}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h2' sx={{ fontWeight: 'bold', marginTop: '20%' }}>
                            SERVICE ABOVE SELF
                        </Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>

        </div>
    )
}

export default Home
