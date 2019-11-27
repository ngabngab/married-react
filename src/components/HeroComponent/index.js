import React from 'react'
import BgHero1366 from '../../assets/img/bg-1366.jpg'
const HeroComponent = () => {
  const clickButton = () => {
    const mapSection = document.querySelector('.map-section')
    mapSection.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <React.Fragment>
      <section className="hero-container">
        <div className="img-wrapper">
          <img src={BgHero1366} alt="heroImage"  />
        </div>
        <div className="hero-text">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="title">We're getting married</h1>
              </div>
              <div className="col-12">
                <h2 className="subtitle">Saturday, 7 december 2019<br />11:00 - 17:00 WIB</h2>
              </div>
              <div className="col-12 cta-container">
                <button className="btn btn-primary" onClick={clickButton}>Show location</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default HeroComponent
