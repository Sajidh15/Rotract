import React from 'react';
import { AppBar, Grid, Typography, useMediaQuery, Link, Divider } from '@mui/material';
import { ThemeProvider, createTheme, responsiveFontSizes, useTheme } from '@mui/material/styles';
import FB from '../Assats/Facebook.png';
import TikTok from '../Assats/Tiktok.png';
import Instagram from '../Assats/Instagram.png';
import LinkedIn from '../Assats/Linkedin.png';
import RotractLogo from '../Assats/RotractLogo.jpg';

const customTheme = createTheme();

function Footer() {
    const theme = useTheme();
    const isSmaller = useMediaQuery(theme.breakpoints.down('sm'));
    const isXSmaller = useMediaQuery('(max-width:700px)');

    let theme1 = createTheme();
    theme1 = responsiveFontSizes(theme1);
    // const isSmaller = useMediaQuery(theme.breakpoints.down('800px'));

    return (
        <ThemeProvider theme={customTheme}>
            <div>
                <br />
                <Grid container textAlign='center' justifyContent='center'>
                    {!isXSmaller && <Grid item xs={5} textAlign='left'>
                        {isSmaller && <img className='logo' src={RotractLogo} alt='Rotract logo' width='180px' height='180px' />}
                        {!isSmaller && <img className='logo' src={RotractLogo} alt='Rotract logo' width='250px' height='250px' />}
                        &nbsp;&nbsp;&nbsp;<Divider variant='vertical' /><br />
                        <Typography variant='h4' sx={{ color: 'black', fontWeight: 'bold' }}>
                            NAVIGATION
                        </Typography><br />
                        <Typography variant='h4' sx={{ color: 'black' }}>
                            Home
                        </Typography><br />
                        <Typography variant='h4' sx={{ color: 'black' }}>
                            Our board
                        </Typography><br />
                    </Grid>}

                    {isXSmaller && <Grid item xs={12} textAlign='center'>
                        {isSmaller && <img className='logo' src={RotractLogo} alt='Rotract logo' width='180px' height='180px' />}
                        {!isSmaller && <img className='logo' src={RotractLogo} alt='Rotract logo' width='250px' height='250px' />}
                        <br />
                        <Typography variant='h4' sx={{ color: 'black', fontWeight: 'bold' }}>
                            NAVIGATION
                        </Typography><br />
                        <Typography variant='h4' sx={{ color: 'black' }}>
                            Home
                        </Typography><br />
                        <Typography variant='h4' sx={{ color: 'black' }}>
                            Our board
                        </Typography><br />
                    </Grid>}

                    {!isXSmaller && <Grid item xs={5} textAlign='right'>
                        <ThemeProvider theme={theme1}>
                            <br /><br /><br /><Typography variant='h4' sx={{ color: 'black', fontWeight: 'bold' }}>
                                NAVIGATION
                            </Typography><br />
                            <Link to='/'>
                                <Typography variant='h4' sx={{ color: 'black' }}>
                                    Home
                                </Typography>
                            </Link><br />
                            <Typography variant='h4' sx={{ color: 'black' }}>
                                Our board
                            </Typography><br />
                            <Typography variant='h4' sx={{ color: 'black' }}>
                                Projects
                            </Typography><br />
                            <Typography variant='h4' sx={{ color: 'black' }}>
                                Gallery
                            </Typography><br />
                        </ThemeProvider>
                    </Grid>}
                </Grid>
                <br />
                {!isSmaller && (
                    <>
                        <Grid container spacing={2} textAlign='center' justifyContent='center'>
                            <Grid item xs={2}>
                                <Link to='https://www.facebook.com/photo/?fbid=508401191505043&set=a.508401168171712'>
                                    <img src={FB} alt='FB logo' width='25px' height='25px' />
                                    <Typography variant='body2'>
                                        Facebook
                                    </Typography>
                                </Link>
                            </Grid>

                            <Grid item xs={2}>
                                <Link to='#'>
                                    <img src={Instagram} alt='Instagram logo' width='25px' height='25px' />
                                    <Typography variant='body2'>
                                        Instagram
                                    </Typography>
                                </Link>
                            </Grid>

                            <Grid item xs={2}>
                                <Link to='#'>
                                    <img src={TikTok} alt='TikTok logo' width='25px' height='25px' />
                                    <Typography variant='body2'>
                                        TikTok
                                    </Typography>
                                </Link>
                            </Grid>

                            <Grid item xs={2}>
                                <Link to='#'>
                                    <img src={LinkedIn} alt='LinkedIn logo' width='25px' height='25px' />
                                    <Typography variant='body2'>
                                        LinkedIn
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </>
                )}

                {isSmaller && (
                    <>
                        <Grid container spacing={2} textAlign='center' justifyContent='center'>
                            <Grid item xs={2}>
                                <Link to='https://www.facebook.com/photo/?fbid=508401191505043&set=a.508401168171712'>
                                    <img src={FB} alt='FB logo' width='25px' height='25px' />
                                    {/* <Typography variant='body2'>
                                        Facebook
                                    </Typography> */}
                                </Link>
                            </Grid>

                            <Grid item xs={2}>
                                <Link to='#'>
                                    <img src={Instagram} alt='Instagram logo' width='25px' height='25px' />
                                    {/* <Typography variant='body2'>
                                        Instagram
                                    </Typography> */}
                                </Link>
                            </Grid>

                            <Grid item xs={2}>
                                <img src={TikTok} alt='TikTok logo' width='25px' height='25px' />
                                {/* <Typography variant='body2'>
                                    TikTok
                                </Typography> */}
                            </Grid>

                            <Grid item xs={2}>
                                <img src={LinkedIn} alt='LinkedIn logo' width='25px' height='25px' />
                                {/* <Typography variant='body2'>
                                    LinkedIn
                                </Typography> */}
                            </Grid>
                        </Grid>
                    </>
                )}
                <br />
                <AppBar className='topbar' position='sticky' sx={{ backgroundColor: 'rgba(142, 211, 236, 0.5)' }}>
                    <Grid container textAlign='center'>
                        <Grid item xs={12} sx={{ padding: '15px', color: 'black' }}>
                            <Typography variant='body2'>
                                &copy; All right reserved by The Rotract Club of Saegis Campus, Sri Lanka.
                            </Typography>
                        </Grid>
                    </Grid>
                </AppBar>
            </div>
        </ThemeProvider>
    );
}

export default Footer;
