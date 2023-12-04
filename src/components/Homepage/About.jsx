import React from 'react';
import content from './content'; 
function About(props) {
  return (
    <div>
      {!props.texts && (
        <div className='About-Section'>
          <h1 className='aboutus'>About Us</h1>
          <p className='aboutparagraph'>
            Radeur is a ground-breaking web that puts the power of network
            performance assessment directly into your hands. With Radeur, you
            take control of your internet connection and unleash its full
            potential.
          </p>
        </div>
      )}

      {!props.texts && (
        <div className="About-Main">
        {!props.texts
          ? content.map(item => (
              <div key={item.id} className='About-Section'>
                <div className='about'>
                  <div className='maincontent'>
                    <h1 className='contenttext'>{item.head}</h1>
                    <h2 className='contentparagraph'>{item.subtext}</h2>
                  </div>
                </div>
              </div>
            ))
          : (
              <div className='about'>
                <div className='maincontent'>
                  <h1 className='contenttext'>{props.texts.head}</h1>
                  <h2 className='contentparagraph'>{props.texts.subtext}</h2>
                </div>
              </div>
            )
        }
      </div>
      
      )}
    </div>
  );
}

export default About;





