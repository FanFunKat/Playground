import React, { useState } from 'react'
import menu from '../assets/open_menu.svg'
import close from '../assets/close_menu.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <span>Katarzyna</span>
      <button className='menu-btn'
        onClick={() => setIsOpen(!isOpen)} aria-label='Navigation Menu'
        aria-expanded={isOpen}
      >
        <img src={isOpen ? close : menu} alt='menu' />
      </button>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
