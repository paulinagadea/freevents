import { Box, Toolbar, AppBar, Grid, Button, Typography, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export const NavBar2: React.FC<{}> = () => {
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
                                <Button href="/home" variant="outlined" color= "inherit">Ingresar</Button>
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