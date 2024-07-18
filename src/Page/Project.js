import React, { useEffect, useState } from 'react'
import { Nav } from '../Component'
import { createTheme, Divider, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@mui/material'
import axios from 'axios';
import Footer from '../Component/Footer';

function Project() {

    // const {user} = useUser();
    const [projects, setProjects] = useState({});

    useEffect(() => {
        axios.get('/api/auth/getprojects')
            .then((response) => {
                setProjects(response.data);
            })
            .catch(() => {
                console.error("Fetching user error..!");
                // alert()
            });
    }, []);

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (
        <div>
            <Nav />
            <br /><br /><br />
            {/* {user.role === 'ADMIN' && (
          <Grid container>
              <Grid item xs={12} textAlign='right'>
                  <Button variant='contained'>
                      Add New Project
                  </Button>
              </Grid>
          </Grid>
      )} */}

            <Grid container>
                <Grid item xs={12} textAlign='center'>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h3' sx={{ fontWeight: 'bolder' }}>
                            OUR SIGNATURE PROJECTS
                        </Typography><br />
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                            Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing
                        </Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>

            <Divider sx={{ borderTopWidth: 3, borderColor: 'black' }} />

            {/* {user.role === 'ADMIN' && projects.map((project, index) => {

                <Grid item xs={11} sm={5} md={3.5} onClick={handleEdit(project.id)} key={index}>
                    <img src={project.image} style={{boarderRadius:'30px'}} width='500px' height='500px' /><br />
                    <ThemeProvider theme={theme}>
                        <Typography variant='h5' sx={{ fontWeight: 400 }}>
                            <Box className='box'>    
                                {project.discription}
                            </Box>
                        </Typography>
                    </ThemeProvider>
                </Grid>
            })} */}
            {/* {user.role !== 'ADMIN' && ( */}
            <br /><br /><br />
            <Grid item xs={11} sm={5} md={3.5}>
                <img src={projects.image} width='300px' height='300px' /><br />
                <ThemeProvider theme={theme}>
                    <Typography variant='h5' sx={{ fontWeight: 400 }}>
                        {projects.discription}
                    </Typography>
                </ThemeProvider>
            </Grid>
            {/* )} */}

            <Divider sx={{ borderTopWidth: 3, borderColor: 'black' }} />

            <Footer />
        </div>
    )
}

export default Project
