import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { Switch, Route } from "react-router-dom";

export default function Main(props) {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
  );
}
