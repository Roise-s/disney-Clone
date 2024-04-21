import React from 'react';
import './App.css';
import Main from './Component/main/main';
import About from './Component/about/About';
import Watch from './Component/watch/Watch';
import Exclusive from './Component/exclusive/Exclusive';
import Compatible from './Component/compatible/Compatible';

function App() {
  return (
    <div className="App">
      <Main/>
      <About/>
      <Watch/>
      <Exclusive/>
      <Compatible/>
    </div>
  );
}

export default App;
