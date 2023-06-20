import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Links from './Links';
import Footer from './components/Footer';


function App() {
  

  return (
    <HashRouter> 
      <Header />
      <Links />
      <Footer />
    </HashRouter>
  );
}

export default App;
