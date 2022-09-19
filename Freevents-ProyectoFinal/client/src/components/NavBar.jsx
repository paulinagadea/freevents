import React, {useState} from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import { Container } from "@mui/system";
import './NavBar.css'
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box, Toolbar, AppBar, Grid, Button, Typography, Stack } from "@mui/material";

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar
}))
// const Nav = ({onSearch}) => {
    const NavBar : React.FC<{}> = () => {
        const classes = useStyles()
        return (
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
                        <Typography variant="h4">
                            Freevents
                            </Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing = {2}>
                                <Button color= "secondary" variant="contained" m={1} href="/home" >inicio</Button>
                                <Button color= "secondary" variant="contained" m={1} href="/proveedores">Proveedores</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            {/* <div className={classes.offset}></div> */}
        </Box>
                
                
                
        )
    }
    export default NavBar
//     const [value, setValue] = useState("");
//     const allDogs = useSelector((state) => state.dogs)

//     const handleSearchValue = (e) => {
//         setValue(e.target.value);
//     }

//         const handleSubmit = (e) => {
//             e.preventDefault();
//             const dogs = allDogs.find(el => el.name.toLowerCase().includes(value.trim().toLowerCase()))
//             console.log(value, "SOY EL VALUE")
//             console.log(dogs, "SOY EL NOMBRE EN LOWER CASE")
//             dogs?
//             onSearch(value):
//             alert("No existe el perro")
//             setValue("")
//           };

//           return (
//             <>
//             <div className={s.nav}>
           
//                 <h1 className={s.containerTitulo}>Paw Project</h1>
                
//                 <ul>
//                 <NavLink to="/home/create">
//                   <button className={s.button}>Crear perro </button>
//                 </NavLink>
//                     <form onSubmit={handleSubmit}>
//                   <input
//                    className={s.input}
//                     onChange={handleSearchValue}
//                     value={value}
//                     type="search"
//                     placeholder="Busca un perro..."
//                   />
//                   <button type="submit">🔎</button>
//                     </form>
//                 </ul>
        
//             </div>
//             </>
//           )

// }

// export default Nav