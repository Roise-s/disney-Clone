import React from 'react'
import './about.css'
import about_1 from '../../imgs/usp_entertainment_1.webp'
import about_2 from '../../imgs/usp_fav_device_1.webp'
import about_3 from '../../imgs/usp_parental_control_1.webp'

function About() {
  return (
    <div className='main-about'>
      <div className='about'>
        <img className='i1' src={about_1} alt=''></img>
        <p className='p1'>Endless <br/> Entertainment</p>
        <p className='p2'>Explore thousands of hours of Tv series, movies and originals, from all the wonderful worlds of Disney+.</p>
      </div>
      <div className='about'>
        <img src={about_2} alt=''></img>
        <p className='p1'>Available on <br/> selected devices</p>
        <p className='p2 a1'>Stream on up to four compatible devices at once.</p>
      </div>
      <div className='about'>
        <img src={about_3} alt=''></img>
        <p className='p1'>Easy-to-use <br/> parental controls</p>
        <p className='p2 e1'>Keep your family safe with our intuitive parental controls.</p>
      </div>
    </div>
  )
}

export default About
