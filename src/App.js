import React from 'react';
import './App.css';
import Main from './Component/main/main';
import About from './Component/about/About';
import Watch from './Component/watch/Watch';

function App() {
  return (
    <div className="App">
      <Main/>
      <About/>
      <Watch/>
    </div>
  );
}

export default App;
