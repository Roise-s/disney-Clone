import React from 'react'
import './compatible.css'
import devices_1 from '../../imgs/tv.webp'
import devices_2 from '../../imgs/computer.webp'
import devices_3 from '../../imgs/mobile.webp'

function Compatible() {
  return (
    <div className='compatible'>
      <h2>Compatible Devices</h2>
      <div className='com1'>
        <div className='com2'>
            <img className='img' src={devices_1} alt=''></img>
            <h3>TV</h3>
            <p>Amazon Fire TV</p>
            <p>Android TV</p>
            <p>AppleTV</p>
            <p>Chrome-cast</p>
            <p>LG TV</p>
            <p>Samsung</p>
        </div>
        <div className='com2'>
                <img className='img1' src={devices_2} alt=''></img>
                <h3>Computer</h3>
                <p>Chrome OS</p>
                <p>MacOs</p>
                <p>Windows PC</p>
        </div>
        <div className='com2'>
            <img className='img2' src={devices_3} alt=''></img>
            <h3>Mobile & Tablet</h3>
            <p>Android Phones & <br/> Tablet</p>
            <p>IPhones & IPads</p>
        </div>
      </div>
    </div>
  )
}

export default Compatible
