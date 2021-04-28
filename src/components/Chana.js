import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useWindowPosition from "../hook/useWindowPosition";
import ImageCard from "./ImageCard";
import places from "../static/places";

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

function Chana( ) {

    const classes = useStyles();

    const checked = useWindowPosition("header");

    return (
        <div className={classes.root} id="place-to-visit" checked={checked}>
            <ImageCard place={places[2]} checked={checked} />
        </div>
    )
};

export default Chana;