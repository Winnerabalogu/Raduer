// App.js
import { useState } from 'react';
import './App.css';
import Header from './components/Homepage/Header.jsx';
import FirstContent from './components/Homepage/firstContent';
import About from './components/Homepage/About';
import content from './components/Homepage/content';

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
