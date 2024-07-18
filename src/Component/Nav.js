import React, { useState } from 'react';
import { AppBar, Button, createTheme, Grid, responsiveFontSizes, ThemeProvider, Typography, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Rotract from '../Assats/RotractLogo.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import '../Styles/Component/Nav.css';
import { useTheme } from '@mui/material/styles';

const customTheme = createTheme();

function Nav() {
  const [menuopen, setMenuopen] = useState(false);

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const handleMenuClick = () => {
    setMenuopen(!menuopen);
  }

  const theme1 = useTheme();
  const isSmaller = useMediaQuery(theme1.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <AppBar className='topbar' position='fixed' sx={{ backgroundColor: 'rgba(142, 211, 236, 0.5)' }}>
          {isSmaller && <Grid container position='absolute' className='menu' sx={{ zIndex: 100 }}>
            <Grid item xs={12} textAlign='right'>
              <MenuIcon fontSize='medium' className='menu' onClick={handleMenuClick} />
            </Grid>
          </Grid>}
          <div className='inbar'>
            <Grid
              className={menuopen ? "open" : ""}
              container
              sx={{ marginTop: "-10px" }}
              spacing={3}
              position='absolute'
              textAlign='center'
              justifyContent='center'
            >
              <Grid container justifyContent='flex-end' sx={{ marginBottom: '-50px', marginTop: '20px', marginRight: '10px' }}>
                <Grid item>
                  <Button variant='outlined' size='small'>Log in</Button>
                </Grid>
              </Grid>
              <Grid item className='innav'>
                <NavLink to='/' className='navcontent'>
                  <ThemeProvider theme={theme}>
                    <Typography variant='body1'>Home</Typography>
                  </ThemeProvider>
                </NavLink>
              </Grid>
              <Grid item className='innav'>
                <NavLink to='/board' className='navcontent'> {/* Change the path to '/board' */}
                  <ThemeProvider theme={theme}>
                    <Typography variant='body1'>Our board</Typography>
                  </ThemeProvider>
                </NavLink>
              </Grid>
              <Grid item className='innav'>
                <NavLink to='/project' className='navcontent'>
                  <ThemeProvider theme={theme}>
                    <Typography variant='body1'>Project</Typography>
                  </ThemeProvider>
                </NavLink>
              </Grid>
              <Grid item className='innav'>
                <NavLink to='#' className='navcontent'>
                  <ThemeProvider theme={theme}>
                    <Typography variant='body1'>Gallery</Typography>
                  </ThemeProvider>
                </NavLink>
              </Grid>
              <Grid item className='innav'>
                <NavLink to='#' className='navcontent'>
                  <ThemeProvider theme={theme}>
                    <Typography variant='body1'>About</Typography>
                  </ThemeProvider>
                </NavLink>
              </Grid>
            </Grid>
          </div>
          <Grid container textAlign='left' justifyContent='left'>
            <Grid item xs={12}>
              <img src={Rotract} className='logo' style={{ padding: '3px', marginBottom: '-3.5px' }} width='120px' height='45px' alt='Rotract logo' />
            </Grid>
          </Grid>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}

export default Nav;
