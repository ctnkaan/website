/* @refresh reload */
import './index.css'

import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Projects from './pages/Projects';
import Community from './pages/Community';
import Blog from "./pages/Blog"

render(() => (
    <> 
      <Navbar />
      <Router>
        <Route path="/projects" component={Projects} />
        <Route path="/community" component={Community} />
        <Route path="/blog" component={Blog} />
        <Route path="/" component={Home} />
      </Router>
    </>
), document.getElementById("root"));