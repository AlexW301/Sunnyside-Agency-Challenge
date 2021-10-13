import React from 'react';
import { GlobalStyle } from './GlobalStyle';
//Components
import Hero from './components/Hero';
import Header from './components/Header/index'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
