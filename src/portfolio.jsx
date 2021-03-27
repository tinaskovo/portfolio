import React, { useState, useEffect } from 'react'
import './portfolio.scss'
import { ReactComponent as ChevronDown } from './icons/chevron-down.svg'
import Modal from './modal.jsx'
import galleryImages from './data/gallery-images.js'

const Portfolio = () => {

  let keyCounter = 0;
  const [modalIndex, setModalIndex] = useState()

  const setShow = (index) => {
    setModalIndex(index);
    document.body.style.overflow = 'hidden'
  }

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setShow(null)
        document.body.style.overflow = 'unset';
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])


  return (

    <div className="portfolio-container">
      <div className="landing-page" id="top">
        <div className="profile-image">
          <img src="https://lh3.googleusercontent.com/en4RvLXL0GbRTm6PKV_MQxxfS_Ioivyu1L7KbSr_iN65ii1ssLMVt5BjPgke80-F_JSsJh7fK7YhHg3P9XzyLZLHLrNn9KrwoMIoTg1arDRMyejHjL5_zX8XzO3FXVhywcBvS05G3g=w430-h315-p-k" alt="profile" />
        </div>
        <div className="landing-page-text">
          <h1>Hi, my name is Tina. </h1>
          <h2>I am a Front End Developer based in Copenhagen</h2>
        </div>
        <a href="#work" className="scroll-down">
          <p>Scroll down to see some of my work</p>
          <ChevronDown className="chevron-down" />
        </a>
      </div>

      <div className="work" id="work">
        <h1>Work</h1>
        <div className="gallery">
          {
            galleryImages.map((galleryImage, index) => (
              <>
                <div className="gallery-wrapper">
                  <div className="gallery-image" onClick={() => { setShow(index) }} >
                    <img
                      src={galleryImage.imageSrc}
                      alt="previous work"
                      key={keyCounter++}
                      />
                    <button className="gallery-button">See more</button>
                  </div>
                </div>
                <Modal
                  isShowing={modalIndex === index}
                  hide={() => { setShow(null); ; document.body.style.overflow = 'unset'; } }
                  key={keyCounter++}
                  galleryImage={galleryImage}
                />
              </>
            ))
          }

        </div>
        <a href="#about" className="scroll-down">
          <p>
          About
          </p>
          <ChevronDown className="chevron-down" />
        </a>
      </div>

      <div className="about" id="about">
        <h1>About</h1>
        <p>
          Liberal Arts Major turned Code Nerd <br/>
          I enjoy building things, both privately and professionally <br/>
          When I'm not coding, you can find me in my allotment in the middle of a DIY project, or cruising around Copenhagen on my vintage moped.
        </p>
        <a href="#contact" className="scroll-down">
         <p> Contact</p>
          <ChevronDown className="chevron-down" />
        </a>
      </div>

      <div className="contact" id="contact">
        <h2>Call me</h2>
        <p>+45 666</p>
        <a href="#top" className="top-button">To top</a>
      </div>
    </div>
  )
}

export default Portfolio