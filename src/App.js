import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import PlaceToVisit from "./components/PlaceToVisit";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight:"100vh",
    backgroundImage:`url(${process.env.PUBLIC_URL + "/bg.jpeg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
}));

function App() {

  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
      <CssBaseline /> {/* nos permite sacar las lineas blancas por defecto del margen */}
      <Header />
      <PlaceToVisit />
    </div>
    </Router>
  );
}

export default App;
