import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: "none",  /* le sacamos el fondo al header */
        fontFamily: "Nunito"
    },
    icon: {
        color: "#fff",
        fontSize: "2rem",
    },
    appbarTitle: {
        flexGrow: "1", /* me separa los elementos llevando uno a una punta y otro a la otra */
    },
    appbarWrapper: {
        width: "80%",
        margin: "0 auto",
    },
    colorText: {
        color: "#5AFF3D",
    },
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Nunito",
    },
    title: {
        color: "#fff",
        fontSize: "4.5rem",
    },
    container: {
        textAlign: "center",
    },
    goDown: {
        color: "#5AFF3D",
        fontSize: "4rem"
    },
    menu: {
        fontFamily: "Nunito",
        backgroundColor: "#5AFF3D",
        fontWeight: "bold",
        fontSize: "1rem",
    },
}));

function Header () {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();

    const [checked, setChecked] = useState(false);
    //configuracion para la animacion de la bienvenida
    useEffect(() => {
        setChecked(true);
    }, [])

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        Hogares <span className={classes.colorText}>Gallo.</span>
                    </h1>
                    <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >   
                        <Link to="/"><MenuItem className={classes.menu} onClick={handleClose}>Inicio</MenuItem></Link>
                        <Link to="/puerto-gallo"><MenuItem className={classes.menu} onClick={handleClose}>Puerto Gallo</MenuItem></Link> 
                        <Link to="/chana"><MenuItem className={classes.menu} onClick={handleClose}>Chana</MenuItem></Link>
                        <Link to="/timbu"><MenuItem className={classes.menu} onClick={handleClose}>Timbu</MenuItem></Link>
                        <Link to="/contact"><MenuItem className={classes.menu} onClick={handleClose}>Contactanos</MenuItem></Link>
                    </Menu>
                </Toolbar>
            </AppBar>

            <Collapse in={checked} {...(checked ? { timeout:1500 }: {})} collapsedHeight={50}> {/* si cumple el check cuando se carga la pagina, se da la animacion en 1 segundo */}
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Bienvenidos a <br/>
                        <span className={classes.colorText}>Hogares Gallo.</span>
                    </h1>
                    <Scroll to="place-to-visit" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    )
}

export default Header;