import React from 'react'
import BgHero1366 from '../../assets/img/bg-1366.jpg'
import BgHero1024 from '../../assets/img/bg-1024.jpg'
import BgHero1920 from '../../assets/img/bg-1920.jpg'
import BgHero375 from '../../assets/img/bg-175.jpg'

const HeroComponent = () => {
  return (
    <React.Fragment>
      <section className="hero-container">
        <div className="img-wrapper">
          {/* <img src={ BgHero1366 } alt="" /> */}
          <img srcset={`${BgHero375} 400w,
             ${BgHero1024} 720w,
             ${BgHero1366} 1200w`}
            sizes="(max-width: 400px) 360px,
                (max-width: 720px) 680px,
              1200px"
            src={BgHero1920} alt="heroImage" />        
     </div>
      </section>
    </React.Fragment>
  )
}

export default HeroComponent
