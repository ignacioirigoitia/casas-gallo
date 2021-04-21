import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column"
        }
    },
}));

function Timbu( ) {

    const classes = useStyles();

    return (
        <div className={classes.root} id="place-to-visit">
            <h1 id="timbu">Timbu</h1>
        </div>
    )
};

export default Timbu;