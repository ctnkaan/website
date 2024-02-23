/* @refresh reload */
import './index.css'

import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import Home from "./pages/Home";

render(() => (
  <Router>
    <Route path="/" component={Home} />
  </Router>
), document.getElementById("root"));