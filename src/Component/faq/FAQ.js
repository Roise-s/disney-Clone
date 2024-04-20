import React, { useState } from 'react'
import './faq.css'

function FAQ() {

const [active, setActive] = useState(false)

const handleClick = () => {
    if(active) {
        setActive(false);
    } else {
        setActive(true);
        setActive1(false)
        setActive2(false)
        setActive3(false)
    }
};

const [active1, setActive1] = useState(false)

const handleClick1 = () => {
    if(active1) {
        setActive1(false);
    } else {
        setActive1(true);
        setActive(false)
        setActive2(false)
        setActive3(false)
    }
};

const [active2, setActive2] = useState(false)

const handleClick2 = () => {
    if(active2) {
        setActive2(false);
    } else {
        setActive2(true);
        setActive(false)
        setActive1(false)
        setActive3(false)
    }
};

const [active3, setActive3] = useState(false)

const handleClick3 = () => {
    if(active3) {
        setActive3(false);
    } else {
        setActive3(true);
        setActive(false)
        setActive1(false)
        setActive2(false)
    }
};


console.log(active)

  return (
    <div className='reactFAQ'>
      <section>
        <h2 className="title">Frequently Asked Question</h2>

        <div onClick={handleClick} className={`faq ${active? 'active' : ''}`}>
            <div className="question">
                <h3>What is Disney+</h3>

                <svg width="15" height="10" viewBox="0 0 42 25">
                    <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/>
                </svg>

            </div>
            <div className="answer">
                <p>
                    Disney+ is the streaming home for entertainment from Disney, Pixar, Marvel, Star Wars, National Geographic,
                    Star and more. With Disney+ you get: <br/> Access ti hit TV series, movies throwbacks and timeless classics <br/>
                    Easy-to-use parental controls for family-friendly viewing <br/> Recommendations tailored to you
                </p>
            </div>
        </div>

        <div onClick={handleClick1} className={`faq ${active1? 'active' : ''}`}>
            <div className="question">
                <h3>What Can I watch on Disney+?</h3>

                <svg width="15" height="10" viewBox="0 0 42 25">
                    <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/>
                </svg>

            </div>
            <div className="answer">
                <p>
                    With the world's greatest stories from Disney, Pixar, Marvel, Star Wars and National Geographic, plus general entertainment with Star, discover everything you imagined, plus more, with Disney+.
                    Watch the latest blockbuster movies, award-winning original series, documentaries, classics, exclusive specials, all in one place. 
                </p>
            </div>
        </div>

        <div onClick={handleClick2} className={`faq ${active2? 'active' : ''}`}>
            <div className="question">
                <h3>What are the subscription plans for Disney+?</h3>

                <svg width="15" height="10" viewBox="0 0 42 25">
                    <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/>
                </svg>

            </div>
            <div className="answer">
                <p>
                    From 2 August 2023, Disney+ will be available on the following compatible devices based on the chosen subscription plan: <br/>
                    <li>Disney+ Premium Plan is supported in mobile devices, tablets, web browsers, set-top boxes, and smart TVs</li> <br/>
                    <li>Disney+ Mobile Plan supports Mobile and Tablets devices</li>
                </p>
            </div>
        </div>

        <div onClick={handleClick3} className={`faq ${active3? 'active' : ''}`}>
            <div className="question">
                <h3>Is there any commitment when singing up for Disney+</h3>

                <svg width="15" height="10" viewBox="0 0 42 25">
                    <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/>
                </svg>

            </div>
            <div className="answer">
                <p>
                    Disney+ subscribers have the ability to cancel their subscription at any time, such cancellation then takes effect in accordance with the terms of the Subscribers Agreement.
                    Please keep in mind, cancelling your Disney+ subscription will not delete your Disney+ account, subject to applicable data privacy laws.
                    For more information go to the Real Disney+ website cos, I Kagugelo don't work in Disney..... and why are you even reading this? 
                </p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default FAQ
