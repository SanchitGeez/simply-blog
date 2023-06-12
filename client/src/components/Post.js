import React from 'react'

function Post() {
  return (
    <div className="post">
        <div className='image'>
          <img src="https://www.livemint.com/lm-img/img/2023/06/09/600x338/Porsche_911_1686313160647_1686313169056.JPG" alt="post-image"/>
        </div>
        
        <div className='texts'>
          <h2>Back
          Porsche 911 Reimagined by Singer: Posher Than Ever</h2>
          <p className="info">
            <a href="" className="author">Sanchit Gupta</a>
            <time>20-6-03 16:45</time>
          </p>
          <p className='summary'>SPEAK MEMORY Singer Vehicle Design in Torrance, Calif., restores and modifies classic Porsche 911 Carreras from 1989-1994. The air-cooled, largely analog cars represent a ‘sweet spot’ in Porsche’s history</p>
        </div>
        
         
      </div>
  )
}

export default Post