// App.js
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FirstContent from './components/firstContent';
import About from './components/About';
import content from './components/content';

function App() {
  return (
    <>
      <Header />
      <FirstContent />
      <About />
      {content.map((texts) => (
        <About key={texts.id} texts={texts} />
      ))}
    </>
  );
}

export default App;
