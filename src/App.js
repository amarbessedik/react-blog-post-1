import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Home />
    </div>
  );
}

export default App;
