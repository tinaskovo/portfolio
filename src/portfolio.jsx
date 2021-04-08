import React, { useState, useEffect } from 'react'
import './portfolio.scss'
import { ReactComponent as ChevronDown } from './icons/chevron-down.svg'
import { ReactComponent as GitHub } from './icons/github.svg'
import { ReactComponent as Linkedin} from './icons/linkedin.svg'
import { ReactComponent as ChevronUp } from './icons/chevron-up.svg'
import { ReactComponent as ChevronRight} from './icons/chevron-right.svg'
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
          <p className="scroll-title">Scroll down to see some of my work</p>
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
                    <ChevronRight className="chevron-right"/>
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
          <p className="scroll-title">
          About
          </p>
          <ChevronDown className="chevron-down" />
        </a>
      </div>

      <div className="about" id="about">
        <h1>About</h1>
        <div className="presentation">
          <div className="profile-image">
            <img src="https://lh3.googleusercontent.com/B0ivcdApc1AQBvXRkv2Ll0lw49LL79i2t8LhvrXZMU2Ivy8GAXIoXjqTXkjsIy7ZJ3dG1qZSI2bP3w-o5-O7PxcOB3F1_U8fLx0qKvPXOcK9M2rHqo1ha1r_hKCqrSqT0dBPYFQywA=w2400" alt=""/>
          </div>
          <p>
            Liberal Arts Major turned Code Nerd <br/>
            I enjoy building things, both privately and professionally <br/>
            When I'm not coding, you can find me in my allotment, in the middle of a DIY project, or cruising around Copenhagen on my vintage moped.
          </p>
        </div>
        <a href="#contact" className="scroll-down">
         <p className="scroll-title"> Contact</p>
          <ChevronDown className="chevron-down" />
        </a>
      </div>

      <div className="contact" id="contact">
        <h2>Let's keep in touch!</h2>
        <p><strong>Phone:</strong>  +45 61 65 90 31</p>
        <div className="social">
          <a href="https://github.com/tinaskovo">
            <GitHub className="social-icon"/>
          </a>
          <a href="https://www.linkedin.com/in/tinaskovolesen/">
            <Linkedin className="social-icon"/>
          </a>
        </div>
        <a href="#top" className="top-button">
          <p>Back to top</p>
        <ChevronUp className="chevron-up"/>
        </a>

      </div>
    </div>
  )
}

export default Portfolio