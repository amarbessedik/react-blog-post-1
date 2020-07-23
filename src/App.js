import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import Post from "./containers/Post";
import About from "./containers/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path='/post/:postId' component={Post}/>
        <Route path='/about' component={About}/>
        <Route /> 
      </div>
    </Router>
  );
}

export default App;
