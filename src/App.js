import React from 'react';
import { GlobalStyle } from './GlobalStyle';
//Components
import Hero from './components/Hero';
import Header from './components/Header/index';
import Grid from './components/Grid/index';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Grid/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
