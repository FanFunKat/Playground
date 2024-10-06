import React from 'react'
import porfileImage from '../assets/chuck.png'
import Link from './Link'

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
        <Link href='#projects'>Check out my work</Link>
      </div>
    </section>
  )
}

export default Hero
