// About.jsx
import React from 'react';

function About(props) {
    return (
      <div className='About-Section'>
        {props.texts ? (
          <div className='about'>
            <div className='maincontent'>
              <h1 className='contenttext'>{props.texts.head}</h1>
              <h2 className='contentparagraph'>{props.texts.subtext}</h2>
            </div>
          </div>
        ) : (
          <>
            <h1 className='aboutus'>About Us</h1>
            <p className='aboutparagraph'>
              Radeur is a ground-breaking web that puts the power of network
              performance assessment directly into your hands. With Radeur, you
              take control of your internet connection and unleash its full
              potential.
            </p>
          </>
        )}
      </div>
    );
  }
  export default About