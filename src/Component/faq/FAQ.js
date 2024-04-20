import React, { useState } from 'react'
import './faq.css'

function FAQ() {

const [active, setActive] = useState(false)

const handleClick = () => {
    if(active) {
        setActive(false);
    } else {
        setActive(true);
    }
};

console.log(active)

  return (
    <div className='reactFAQ'>
      <section>
        <h2 className="title">FAQ</h2>

        <div onClick={handleClick} className={`faq ${active? 'active' : ''}`}>
            <div className="question">
                <h3>What is JavaScript</h3>

                <svg width="15" height="10" viewBox="0 0 42 25">
                    <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/>
                </svg>

            </div>
            <div className="answer">
                <p>
                    JavaScript, kjgbsd sdjkcghsbdc dhcvhsdvhvdcvhbvd dhgsdvvsdc yghbkebdc dbchbvsdhbdcysdc hdh cch sdygchdbcygd ccbdbchydch sdch sdcgsdphdcsdchehsvbn uge jhef ifhsdngdceufch eh gfhd biudcywfw ewcbdcgewhwd uwfcxe wcb wdcfsdcshc. d f sdsdgew dhk sd xc kesd  gv dugb ewoguyervn  c jgdfbv c
                </p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default FAQ
