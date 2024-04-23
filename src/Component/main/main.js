import React from 'react'
import './main.css'
import Disney_icon from '../../imgs/disney-plus-logo.webp'

function Main() {
  return (
    <div className='mm'>
      <a onClick={() => {alert("Hey this will take you to the real Website, if it didn't click the button again By Kgaugelo.dev")}} rel='noreferrer' href='https://apps.disneyplus.com/za/onboarding' target='_Blank'>
        <button className='btn'>Log In</button>
      </a>
        <div className='main'>
            <img src={Disney_icon} alt='Disney icon' />
            <p>Stream brand new Disney+ Originals, blockbusters, binge-worthy series and more</p>
            <a onClick={() => {alert("Hey this will take you to the real Website, if it didn't click the button again By Kgaugelo.dev")}} rel='noreferrer' href='https://apps.disneyplus.com/za/onboarding' target='_Blank'>
              <button>Sign Up Now &gt;</button>
            </a>
        </div>
    </div>
  )
}

export default Main
