import { Button, createTheme, Divider, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Nav from '../Component/Nav';
import axios from 'axios';
import Footer from '../Component/Footer';

function Board() {
    // const {user} =useUser();
    const [member, setMember] = useState({});

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    useEffect(() => {
        axios.get('/api/auth/getuser')
            .then((response) => {
                setMember(response.data);
            })
            .catch(() => {
                console.error("Fetching user error..!");
                // alert()
            });
    }, []);

    return (
        <div>
            <Nav />
            <br /><br /><br />
            {/* {user.role === 'ADMIN' && (
          <Grid container>
              <Grid item xs={12} textAlign='right'>
                  <Button variant='contained'>
                      Add New Member
                  </Button>
              </Grid>
          </Grid>
      )} */}
            {/* <img src='' width='100%' height='100vh' style={{ position: 'absolute' }} /> */}
            <Grid container>
                <Grid item xs={12} textAlign='center'>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h2' sx={{ fontWeight: 'bolder' }}>
                            THE BOARD OF OFFICIALS
                        </Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>
            <Grid container textAlign='center'>
                <Grid item xs={12}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                            THE BOARD OF OFFICIALS<br />
                            2023-2024
                        </Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>
            <Grid container textAlign='center' justifyContent='center'>

                {/* {user.role === 'ADMIN' && (
            <Grid item xs={11} sm={5} md={3.5} onClick={handleEdit(member.id)}>
                <img src={member.image} width='300px' height='300px' /><br />
                <ThemeProvider theme={theme}>
                    <Typography variant='h5' sx={{ fontWeight: 400 }}>
                        {member.name}
                    </Typography>
                </ThemeProvider>
            </Grid>
        )} */}
                {/* {user.role !== 'ADMIN' && ( */}
                <br /><br /><br />
                <Grid item xs={11} sm={5} md={3.5}>
                    <img src={member.image} width='300px' height='300px' /><br />
                    <ThemeProvider theme={theme}>
                        <Typography variant='h5' sx={{ fontWeight: 400 }}>
                            {member.name}
                        </Typography>
                    </ThemeProvider>
                </Grid>
                {/* )} */}
            </Grid>
            <Divider sx={{ borderTopWidth: 3, borderColor: 'black' }} />

            <Footer />
        </div>
    );
}

export default Board;
