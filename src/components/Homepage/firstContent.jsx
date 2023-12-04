import React from 'react'
import landingpage from '/src/images/landingpage.png'

function firstContent() {
  return (
    <div className='firstContent'>
    <div className='firstBox'>
        <h1 className='contentText'>Searching for the perfect internet service provider in your Axis?</h1>
        <p className='contentParagraph'>Get the right information here! Whether you are a casual user or a tech savy professional, our comprehensive ratings and reviews will be your guide light in deciding your preferred ISP.</p>

        <button className='ratings'>See Ratings</button>
    </div>
        <div className='secomdBox'>
        <img src={landingpage} className='image'/>
        </div>
    </div>
  )
}

export default firstContent