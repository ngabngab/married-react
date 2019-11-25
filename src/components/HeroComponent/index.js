import React from 'react'
import BgHero1366 from '../../assets/img/bg-1366.jpg'
import BgHero1024 from '../../assets/img/bg-1024.jpg'
import BgHero1920 from '../../assets/img/bg-1920.jpg'
import BgHero375 from '../../assets/img/bg-175.jpg'

const HeroComponent = () => {

  const clickButton  = () => {
    const mapSection = document.querySelector('.map-section')
    mapSection.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <React.Fragment>
      <section className="hero-container">
        <div className="img-wrapper">
          <img srcSet={`${BgHero375} 400w, ${BgHero1024} 720w, ${BgHero1366} 1200w`} sizes="(max-width: 400px) 360px, (max-width: 720px) 680px, 1200px"
            src={BgHero1920} alt="heroImage" loading="lazy"/>
        </div>
        <div className="hero-text">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="title">We're getting married</h1>
              </div>
              <div className="col-12">
                <h2 className="subtitle">Saturday, 7 december 2019<br />08:00 - 17:00 WIB</h2>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" onClick={ clickButton }>Go to location</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default HeroComponent
