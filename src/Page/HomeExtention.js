import { Box, createTheme, Divider, Grid, responsiveFontSizes, ThemeProvider, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../Styles/Pages/HomeExt.css'
import Footer from '../Component/Footer';
import { useTheme } from '@mui/material/styles';

const customTheme = createTheme();

function HomeExtention() {

    const [count, setCount] = useState({});

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    useEffect(() => {
        setCount({
            avanue: 10,
            project: 8,
            members: 3
        })
    }, []);

    const theme1 = useTheme();
    const isSmaller = useMediaQuery('(max-width: 800px)');

    const isSmaller2 = useMediaQuery(theme1.breakpoints.down('sm'));

    return (
        <div>
            <ThemeProvider theme={customTheme}>
                <Grid container textAlign='center' justifyContent='center'>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Divider sx={{ borderTopWidth: 3, borderColor: 'black' }} />
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <br />

                    <Grid item xs={11} md={5} lg={4} sx={{ marginTop: '20px' }} textAlign='center'>
                        <Box className='box'>
                            <Typography variant='h5'>
                                Vision
                            </Typography>
                            <Divider />
                            <Typography variant='body1'>
                                testing testing testing testing testing testing testing testing testing testing testing testing
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid md={0.5} sm={12}></Grid>
                    <Grid item xs={11} md={5} lg={4} sx={{ marginTop: '20px' }} textAlign='center'>
                        <Box className='box'>
                            <Typography variant='h5'>
                                Mission
                            </Typography>
                            <Divider />
                            <Typography variant='body1'>
                                testing testing testing testing testing testing testing testing testing testing testing testing
                            </Typography>
                        </Box><br /><br />
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Divider sx={{ borderTopWidth: 3, borderColor: 'black' }} />
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>

                {isSmaller &&
                    <Grid
                        container
                        spacing={5}
                        sx={{ gap: '50px' }}
                        textAlign='center'
                        justifyContent='center'
                    >
                        <Grid item xs={2.5}>
                            <ThemeProvider theme={theme}>
                                <Typography variant='h6'>
                                    Avanue
                                </Typography>
                                <Typography variant='h6'>
                                    {count.avanue || '0'}
                                </Typography>
                            </ThemeProvider>
                        </Grid>

                        <Grid item xs={2.5}>
                            <ThemeProvider theme={theme}>
                                <Typography variant='h6'>
                                    Project
                                </Typography>
                                <Typography variant='h6'>
                                    {count.project || '0'}+
                                </Typography>
                            </ThemeProvider>
                        </Grid>

                        <Grid item xs={2.5}>
                            <ThemeProvider theme={theme}>
                                <Typography variant='h6'>
                                    Members
                                </Typography>
                                <Typography variant='h6'>
                                    {count.members || '0'}
                                </Typography>
                            </ThemeProvider>
                        </Grid>
                    </Grid>
                }

                {isSmaller2 && !isSmaller2 &&
                    <Grid
                        container
                        spacing={5}
                        sx={{ gap: '50px' }}
                        textAlign='center'
                        justifyContent='center'
                    >
                        <Grid item xs={2}>
                            <ThemeProvider theme={theme}>
                                <Typography variant='body2'>
                                    Avanue
                                </Typography>
                                <Typography variant='body2'>
                                    {count.avanue || '0'}
                                </Typography>
                            </ThemeProvider>
                        </Grid>

                        <Grid item xs={2}>
                            <ThemeProvider theme={theme}>
                                <Typography variant='body2'>
                                    Project
                                </Typography>
                                <Typography variant='body2'>
                                    {count.project || '0'}+
                                </Typography>
                            </ThemeProvider>
                        </Grid>

                        <Grid item xs={2}>
                            <ThemeProvider theme={theme}>
                                <Typography variant='body2'>
                                    Members
                                </Typography>
                                <Typography variant='body2'>
                                    {count.members || '0'}
                                </Typography>
                            </ThemeProvider>
                        </Grid>
                    </Grid>
                }

                {!isSmaller &&
                    <Grid
                        container
                        spacing={5}
                        sx={{ gap: '50px' }}
                        textAlign='center'
                        justifyContent='center'
                    >
                        <Grid item>
                            <ThemeProvider theme={theme}>
                                <Typography variant='h3'>
                                    Avanue
                                </Typography>
                                <Typography variant='h3'>
                                    {count.avanue || '0'}
                                </Typography>
                            </ThemeProvider>
                        </Grid>

                        <Grid item>
                            <ThemeProvider theme={theme}>
                                <Typography variant='h3'>
                                    Project
                                </Typography>
                                <Typography variant='h3'>
                                    {count.project || '0'}+
                                </Typography>
                            </ThemeProvider>
                        </Grid>

                        <Grid item>
                            <ThemeProvider theme={theme}>
                                <Typography variant='h3'>
                                    Members
                                </Typography>
                                <Typography variant='h3'>
                                    {count.members || '0'}
                                </Typography>
                            </ThemeProvider>
                        </Grid>
                    </Grid>
                }


                <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Divider sx={{ borderTopWidth: 3, borderColor: 'black' }} />
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <Footer />
            </ThemeProvider>
        </div>
    )
}

export default HomeExtention
