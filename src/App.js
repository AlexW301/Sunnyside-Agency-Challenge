import React from 'react';
import { GlobalStyle } from './GlobalStyle';
//Components
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Hero/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
