import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import places from "../static/places";
import useWindowPosition from "../hook/useWindowPosition";
import Uppage from "./Uppage";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]:{
            flexDirection: "column"
        }
    },
    root2: {
        display: "flex",
        justifyContent: "center",
    },
}));

function PlaceToVisit(){
    const classes = useStyles();

    const checked = useWindowPosition("header");

    return(
        <div>
            <div className={classes.root} id="place-to-visit">
                <ImageCard place={places[0]} checked={checked} />
                <ImageCard place={places[1]} checked={checked} />
                <ImageCard place={places[2]} checked={checked} />
            </div>
            <div className={classes.root2}>
                <Uppage />
            </div>
        </div>    
    )
};

export default PlaceToVisit;