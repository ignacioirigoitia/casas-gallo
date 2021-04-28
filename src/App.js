import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import PlaceToVisit from "./components/PlaceToVisit";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PuertoGallo from "./components/PuertoGallo";
import Chana from "./components/Chana";
import Timbu from "./components/Timbu";
import Contactanos from "./components/Contactanos";
import "./App.css";

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
      <Switch>
        <Route path="/" exact component={PlaceToVisit}/>

        <Route path="/puerto-gallo" component={PuertoGallo} />

        <Route path="/timbu" component={Timbu} />

        <Route path="/chana" component={Chana} />

        <Route path="/contact" component={Contactanos} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
