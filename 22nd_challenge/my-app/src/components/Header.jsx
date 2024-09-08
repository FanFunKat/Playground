import React from 'react'

export const Header = ({ title, itemTotal }) => {
  return (
    <header>
      <h1>{title}</h1>
      <span className='total-items'>Items: {itemTotal}</span>
    </header>
  )
}