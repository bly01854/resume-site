import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { Switch, Route, withRouter } from "react-router-dom";

function Main(props) {
  const { location } = props;
  return (
    <main>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
          </Switch>
    </main>
  );
}


export default withRouter(Main);
