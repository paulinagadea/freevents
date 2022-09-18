import { Box, Toolbar, AppBar, Grid, Button, Typography, Stack } from "@mui/material";
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Container } from "@mui/system";
import Slide from '@material-ui/core/Slide';
import React from "react";
import { Link } from "react-router-dom";

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

export default function HideAppBar(props) {
    return(
        <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
        
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
                        <Typography variant="h3">Freefest</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing = {2}>
                                <Button href="/home" color= "secondary" variant="contained">Inicio</Button>
                                <Button href="/userregister" color= "secondary" variant="contained">Registrarse</Button>
                                <Button href="/paquetes" color= "secondary" variant="contained">Paquetes</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    );
};