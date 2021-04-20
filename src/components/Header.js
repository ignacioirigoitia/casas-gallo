import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort"

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
    }
}));

function Header () {

    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        Hogares <span className={classes.colorText}>Gallo.</span>
                    </h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;