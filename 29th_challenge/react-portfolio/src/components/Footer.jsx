import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <span>Katarzyna {year}&copy;</span>
    </footer>
  )
}

export default Footer
