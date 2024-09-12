import React from 'react'

const Footer = (props) => {
  const {showModal, handleToggleModal} = props

  return (
    <footer>
      <div className='bgGradient'></div>
    <div>
      <h2>The Martian Landscape</h2>
      <h1>The APOD Project</h1> 
    </div>
    <button onClick={handleToggleModal}>
    <i class="fa-solid fa-circle-info"></i>
    </button>
  </footer>
  )
}

export default Footer