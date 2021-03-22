import React, { useState, useEffect } from 'react'
import './portfolio.scss'
import { ReactComponent as ChevronDown } from './icons/chevron-down.svg'
import Modal from './modal.js'
import galleryImages from './data/gallery-images.js'

// http://findmatthew.com/

const Portfolio = () => {

  let keyCounter = 0;
  const [modalIndex, setModalIndex] = useState()

  const setShow = (index) => {
    setModalIndex(index);
  }

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setShow(null)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (

    <div className="portfolio-container">
      <div className="landing-page" id="top">
        <div className="landing-page-headline">
          <h1>Hi, I am Developer</h1>
        </div>
        <a href="#work" className="section-button">
          See my work
          <ChevronDown className="chevron-down" />
        </a>
      </div>

      <div className="work" id="work">
        <h1>This is my work</h1>
        <div className="gallery">
          {
            galleryImages.map((galleryImage, index) => (
              <>
                <div className="gallery-image">
                  <img
                    src={galleryImage.imageSrc}
                    alt="previous work"
                    key={keyCounter++}
                    onClick={() => { setShow(index) }} />
                </div>

                <Modal
                  isShowing={modalIndex === index}
                  hide={() => { setShow(null) }}
                  key={keyCounter++}
                  galleryImage={galleryImage}
                />
              </>
            ))
          }

        </div>
        <a href="#about" className="section-button">
          About
          <ChevronDown className="chevron-down" />
        </a>
      </div>

      <div className="about" id="about">
        <h1>About</h1>
        <p>I am great developer</p>
        <a href="#contact" className="section-button">
          Contact
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