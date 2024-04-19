import React from 'react'
import './main.css'
import Disney_icon from '../../imgs/disney-plus-logo.webp'

function Main() {
  return (
    <div className='mm'>
        <button className='btn'>Log In</button>
        <div className='main'>
            <img src={Disney_icon} alt='Disney icon' />
            <p>Stream brand new Disney+ Originals, blockbusters, binge-worthy series and more</p>
            <button>Sign Up Now &gt;</button>
        </div>
    </div>
  )
}

export default Main
