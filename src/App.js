import React from 'react';
import { GlobalStyle } from './GlobalStyle';
//Components
import Hero from './components/Hero';
import Header from './components/Header/index';
import Grid from './components/Grid/index';
import Testimonials from './components/Testimonials';
import Pictures from './components/Pictures';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Grid/>
      <Testimonials/>
      <Pictures/>
      <Footer />
      <GlobalStyle/>
    </div>
  );
}

export default App;
