import React from 'react';

import './App.css';
import Footer from './components/Footer/Footer.js';
import Main from './components/Main/Main.js';
import Header from './components/Header/Header.js';

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/ImagefromiOS.jpg)` }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
