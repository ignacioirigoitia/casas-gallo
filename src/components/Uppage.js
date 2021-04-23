import React from 'react';
import { IconButton } from "@material-ui/core";
import { Link as Scroll } from 'react-scroll';
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "30vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    goDown: {
        color: "#5AFF3D",
        fontSize: "4rem"
    }
}));

const Uppage = () => {

    const classes = useStyles();

    return (
        <div>
            <Scroll to="header" smooth={true}>
                <IconButton>
                    <ExpandLessIcon className={classes.goDown} />
                </IconButton>
            </Scroll>
        </div>
    );
}

export default Uppage;
