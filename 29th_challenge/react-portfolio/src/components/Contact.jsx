import React from 'react'
import { Icons } from './Icons'

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <h2>Contact Me</h2>
      <p>Let&apos;s connect and create together.</p>
      <div className='socials-container'>
        <a href='#'>
          <Icons.facebook />
        </a>
        <a href='#'>
          <Icons.instagram />
        </a>
        <a href='#'>
          <Icons.twitter />
        </a>
        <a href='#'>
          <Icons.linkedin />
        </a>
        <a href='#'>
          <Icons.github />
        </a>
      </div>
    </section>
  )
}

export default Contact
