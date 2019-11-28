import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as NameIconSvg } from '../../assets/img/name.svg'
import HeroComponent from '../../components/HeroComponent'
import HeaderNav from '../../components/HeaderNav'
import MapComponent from '../../components/MapComponent'

const HomePage = () => {

  const preLoadingScreenContainer = useRef();

  const [imgOpener, setImageOpener] = useState(true)
  const [domElement, setDomElement] = useState(null)
  const [menuMapActive, setMenuMapActive] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      imgOpener && preLoadingScreenContainer.current.classList.add('zoom-out')
      setTimeout(() => {
        setImageOpener(false)
      }, 2000)
    }, 6000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.intersectionRatio >= 0.5 ) {
          setMenuMapActive(true)
        } else {
          setMenuMapActive(false)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    )

    if(domElement) {
      observer.observe(domElement)
    }
  })

  return (
    <React.Fragment>
      {!imgOpener ? <HeaderNav  menuMapActive={ menuMapActive } /> : ''}
      <main>
        {imgOpener ? <div className="pre-loading-screen" ref={preLoadingScreenContainer}>
          <NameIconSvg />
        </div> :
          <React.Fragment>
            <HeroComponent />
            <MapComponent setDomElement={setDomElement} />
            <footer className="footer-container">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <span className="copyright"></span>
                  </div>
                </div>
              </div>
            </footer>
          </React.Fragment>
        }
      </main>
    </React.Fragment>
  )
}

export default HomePage;