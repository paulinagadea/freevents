import { Box, Toolbar, AppBar, Grid, Button, Typography, Stack } from "@mui/material";
import { Container } from "@mui/system";
import "./LandingPage.css"
import React from "react";
import { Link } from "react-router-dom";

export const NavBar3: React.FC<{}> = () => {
    return(
        
        <Box sx={{flexGrow: 1 }}>
            <AppBar color="secondary" position="fixed">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid 
                        container 
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        >
                        <Grid item>
                        <Typography>Freefest</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing = {2}>
                                <Button href="/eventos" variant="outlined"  color= "inherit">Crea tu Evento</Button>
                                <Button href="/userregister" color= "inherit" variant="contained">Registrarse</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};