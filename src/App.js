import React from "react";
import { Link, Route } from "react-router-dom";

import Currencies from "./Currencies";
import Home from "./Home";
import Price from "./Price";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Bitcoin Prices</Link>
        <Link to="/currencies">Currencies</Link>
      </nav>
      <main>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/currencies">
          <Currencies />
        </Route>
        <Route path="/price/:currency">
          <Price />
        </Route>
      </main>
    </>
  );
}
