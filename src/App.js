import React from 'react';
import './App.css';
import Main from './Component/main/main';
import About from './Component/about/About';
import Watch from './Component/watch/Watch';
import Exclusive from './Component/exclusive/Exclusive';

function App() {
  return (
    <div className="App">
      <Main/>
      <About/>
      <Watch/>
      <Exclusive/>
    </div>
  );
}

export default App;
