import React from 'react'
import porfileImage from '../assets/chuck.png'

const Hero = () => {
  return (
    <section className='hero divider'>
      <div className='image'>
        <img src={porfileImage} alt='Photo of me' />
      </div>
      <div>
        <h1>Katarzyna</h1>
        <p>Junior Frontend Developer</p>
        <p> Gdansk, Poland</p>
        <a href='#projects' className='btn'>Check out my work</a>
      </div>
    </section>
  )
}

export default Hero
