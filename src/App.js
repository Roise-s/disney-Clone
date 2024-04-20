import React from 'react';
import './App.css';
import Main from './Component/main/main';
import About from './Component/about/About';
import Watch from './Component/watch/Watch';
import Exclusive from './Component/exclusive/Exclusive';
import Compatible from './Component/compatible/Compatible';
import FAQ from './Component/faq/FAQ';
import Footer from './Component/footer/Footer';

function App() {
  return (
    <div className="App">
      <Main/>
      <About/>
      <Watch/>
      <Exclusive/>
      <Compatible/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
